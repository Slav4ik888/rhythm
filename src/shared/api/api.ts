import axios from 'axios';


export const api = axios.create({
  baseURL         : '/api',
  timeout         : 1000 * 30,
  // withCredentials : true // Если с куки
});

// const onSuccess = (response) => response;
// const onFail = (err) => {
//   if (err.response.status === 401) {
//     log(`Обработал ошибку 401`);
//     return {data: null};
//   }
//   return err;
// };

// api.interceptors.response.use(onSuccess, onFail);