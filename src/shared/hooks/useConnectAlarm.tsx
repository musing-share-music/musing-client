import { useCallback, useEffect, useRef } from 'react';

import useNotificationStore from 'shared/store/notificationStore';
import { useUserInfoStore } from 'shared/store/userInfo';

const useConnectAlarm = () => {
  const eventSourceRef = useRef<EventSource | null>(null); // SSE 인스턴스를 저장할 ref
  const retryCountRef = useRef(0); // 재연결 시도 횟수를 저장할 ref
  const maxRetries = 3; // 최대 재연결 횟수
  const addNotification = useNotificationStore((state) => state.addNotification);
  const { isLogin } = useUserInfoStore();

  const url = '/musing/alarm/create';

  const connectSSE = useCallback(() => {
    if (eventSourceRef.current) {
      return;
    }

    const eventSource = new EventSource(url);
    eventSourceRef.current = eventSource;

    eventSource.onmessage = (event) => {
      const notification = JSON.parse(event.data);
      addNotification(notification);

      // 이벤트 ID 저장 (다음 연결 시 사용)
      localStorage.setItem('lastEventId', event.lastEventId);

      retryCountRef.current = 0;
    };

    // 에러 처리
    eventSource.onerror = (error) => {
      console.error('SSE 연결 에러:', error);

      if (eventSource.readyState === EventSource.CLOSED) {
        if (retryCountRef.current >= maxRetries) {
          console.log('최대 재연결 시도 횟수를 초과했습니다. 연결을 중단합니다.');
          return;
        }

        retryCountRef.current += 1; // 재연결 시도 횟수 증가
        console.log(`SSE 연결이 닫혔습니다. 재연결 시도 중... (${retryCountRef.current}/${maxRetries})`);
        setTimeout(() => {
          connectSSE(); // 재연결 시도
        }, 5000); // 5초 후 재연결
      }
    };
  }, [addNotification]);

  console.log(isLogin());

  const isLoggedIn = isLogin();
  useEffect(() => {
    if (isLoggedIn) {
      console.log('SSE 연결 시도');
      connectSSE();
    }
    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
        eventSourceRef.current = null;
      }
    };
  }, [connectSSE, isLoggedIn]);

  return {
    connectSSE,
  };
};

export default useConnectAlarm;
