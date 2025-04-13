export interface FetchGetAdminInfoResponse {
  data: {
    userId: string;
    email: string;
    name: string;
    authority: string;
  };
  message: string;
}
