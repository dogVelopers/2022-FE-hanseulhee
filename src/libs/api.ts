import axios, { AxiosRequestConfig } from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.airtable.com/v0/app5AO0SumKR9cNKp',
});

// axios interceptor (요청할 때)
function requestInterceptor(config: AxiosRequestConfig) {
  return {
    ...config,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
  };
}

instance.interceptors.request.use(requestInterceptor);
