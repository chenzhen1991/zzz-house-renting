import { ImageUrl } from "@/config";
/*给后端返回的数据相对地址加一个前缀，是页面使用的绝对地址*/
const addUrl = url => {
  return ImageUrl + url;
};

export { addUrl };
