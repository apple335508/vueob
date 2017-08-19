import cookin from './cookie.js';
import Vue from 'vue';
import { Toast } from 'mint-ui';
export default{
  //get请求方式
   get(url,success){
    let cooks=cookin.get(url);
    if(cooks){
        success(cooks)
    }else{
      Vue.http.get(url).then(rep=>{
          let body=rep.body;
          if(body.status==0){
            cookin.set(url,body);
            success(body)
          }else{
            Toast('输入正确的用户名和密码');
          }
      })
    }
   }

   //get 请求中我们可以使用jquery中的extend的方法来实现深拷贝 图片加载过程中会加载缓存机制
  //  也可以使用JSON.stringfy转会为对象
}