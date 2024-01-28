import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import token from '@/lib/token';
import axios, { AxiosResponse, InternalAxiosRequestConfig, AxiosError } from 'axios';

const host = 'https://api.realworld.io/api';

const apiClient = axios.create({
  baseURL: host,
});

const logOnDev = (
  message: string,
  log?: AxiosResponse | InternalAxiosRequestConfig | AxiosError
) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(message, log);
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
apiClient.interceptors.request.use((request: { headers?: any; method?: any; url?: any }) => {
  const jwtToken: string | null = token.getToken(ACCESS_TOKEN_KEY);
  const { method, url } = request;

  if (jwtToken) {
    request.headers['Authorization'] = `Token ${jwtToken}`;
  }

  logOnDev(`🚀 [${method?.toUpperCase()}] ${url} | Request`, request);

  return request;
});

apiClient.interceptors.response.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (response: { config?: any; status?: any }) => {
    const { method, url } = response.config;
    const { status } = response;

    logOnDev(`✨ [${method?.toUpperCase()}] ${url} | Response ${status}`, response);

    return response;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (error: { response?: any; config?: any; message?: any }) => {
    const { message } = error;
    const { status, data } = error.response;
    const { method, url } = error.config;

    logOnDev(
      `🚨 [${method?.toUpperCase()}] ${url} | Error ${status} ${data?.message || ''} | ${message}`,
      error
    );

    return Promise.reject(error);
  }
);

// eslint-disable-next-line import/no-unused-modules
export default apiClient;
