import axios from "axios";
import store from "@/store";
import { Toast } from "vant";
//根据不同环境引入不同api地址
import { baseApi } from "@/config";
// 创建一个axios实例
const service = axios.create({
  baseURL: baseApi,
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
});

// request拦截器 request interceptor
service.interceptors.request.use(
  config => {
    // 不传递默认开启loading
    if (!config.hideloading) {
      // loading
      Toast.loading({
        forbidClick: true
      });
    }
    if (store.getters.token) {
      config.headers["X_Token"] = "";
    }
    return config;
  },
  error => {
    // 请求出错的时候干什么
    console.log(error);
    return Promise.reject(error);
  }
);

// respose 拦截器
service.interceptors.response.use(
  response => {
    Toast.clear();
    const res = response.data;
    if (res.status && res.status !== 200) {
      if (res.status === 401) {
        store.dispatch("FedLogOut").then(() => {
          location.reload();
        });
      }
      return Promise.reject(res || "error");
    } else {
      return Promise.resolve(res);
    }
  },
  error => {
    Toast.clear();
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);
export default service;
