import { useEffect, useRef } from 'react';

import useNotificationStore from 'shared/store/notificationStore';

const useSSE = (url: string) => {
  const eventSourceRef = useRef<EventSource | null>(null); // SSE 인스턴스를 저장할 ref
  const addNotification = useNotificationStore((state) => state.addNotification); // zustand 스토어의 addNotification 함수 가져오기

  useEffect(() => {
    if (!eventSourceRef.current) {
      // SSE 연결
      const eventSource = new EventSource(url);
      eventSourceRef.current = eventSource; // ref에 저장

      // 이벤트 수신
      eventSource.onmessage = (event) => {
        console.log('새 알람:', event.data);

        // 알림 데이터를 파싱하여 zustand 스토어에 저장
        const notification = JSON.parse(event.data); // { id, content, urlLink, isRead }
        addNotification(notification);

        // 이벤트 ID 저장 (다음 연결 시 사용)
        localStorage.setItem('lastEventId', event.lastEventId);
      };

      // 에러 처리
      eventSource.onerror = (error) => {
        console.error('SSE 연결 에러:', error);

        // 필요 시 재연결 로직 추가
      };

      // 컴포넌트 언마운트 시 연결 종료
      return () => {
        eventSource.close();
        eventSourceRef.current = null; // 연결 해제 후 ref 초기화
      };
    }
  }, [url, addNotification]);
};

export default useSSE;
