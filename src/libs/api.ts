import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';

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

// interceptor (받아올 때)
// 성공 시
function responsefulfilledInterceptor(res: AxiosResponse) {
  if (res.status >= 200 && 300 > res.status) {
    return res.data;
  }
  return Promise.reject(res.data);
}

// 실패 시
function responseRejectedInterceptor(error: AxiosError) {
  return error;
}

instance.interceptors.response.use(responsefulfilledInterceptor, responseRejectedInterceptor);

// function get<타입>(){
//   return instance.get("")
// }
