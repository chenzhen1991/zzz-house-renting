import request from "@/utils/request";
import api from "./index";

export function login(data) {
  return request({
    url: api.Login,
    method: "post",
    // hideloading: true
    // params: {
    //   id
    // }
    data
  });
}

export function home() {
  return request({
    url: api.Home,
    method: "get"
  });
}
