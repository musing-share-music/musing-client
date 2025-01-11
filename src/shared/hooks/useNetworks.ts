//메소드 타입
type Method = 'get' | 'post' | 'put' | 'delete';

//파라미터 타입
interface FetchParams {
  method: Method;
  url: string;
  param?: Record<string, unknown> | null;
}

// API 응답 타입 정의
interface ApiResponse {
  success: boolean;
  data?: object;
  error?: string;
}

// 네트워크 요청 훅
const useNetworks = () => {
  const fetchData = async ({ method, url, param = null }: FetchParams): Promise<ApiResponse> => {
    //유효성 검사
    const validMethods: Method[] = ['get', 'post', 'put', 'delete'];
    if (!validMethods.includes(method.toLowerCase() as Method)) {
      return {
        success: false,
        error: 'Invalid method. Use get, post, put, or delete.',
      };
    }

    try {
      const options: RequestInit = {
        method: method.toUpperCase(),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (method.toLowerCase() === 'get' && param) {
        const queryString = new URLSearchParams(param as Record<string, string>).toString();
        url = `http://localhost:8090/${url}?${queryString}`;
      } else if (param && method.toLowerCase() !== 'get') {
        options.body = JSON.stringify(param);
      }

      const response = await fetch(url, options);
      const data = await response.json();

      return { success: true, data };
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  };

  return fetchData;
};

export default useNetworks;
