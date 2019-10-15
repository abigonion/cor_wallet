// 接口文档
import axios from './request'
//接口示例
export const findGoodsById = (data)=>{
 return axios.post('goods/findGoodsById',data).then(res=>res);
}