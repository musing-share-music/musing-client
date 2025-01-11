import { useMutation, useQuery } from '@tanstack/react-query';

type Method = 'get' | 'post' | 'put' | 'delete';

interface FetchParams {
  method: Method;
  url: string;
  param?: Record<string, unknown> | null;
}

interface ApiResponse {
  success: boolean;
  data?: object;
  error?: string;
}

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

  const useCustomQuery = (key: string[], params: FetchParams) => {
    return useQuery({
      queryKey: key,
      queryFn: () => fetchData(params),
    });
  };

  const useCustomMutation = (params: Omit<FetchParams, 'param'>) => {
    return useMutation({
      mutationFn: (mutationParam: Record<string, unknown> | null) => fetchData({ ...params, param: mutationParam }),
    });
  };

  return {
    fetchData, //단순 API 호출
    useCustomQuery, //사용자 정보 렌더링
    useCustomMutation, //사용자 정보 수정
  };
};

export default useNetworks;
