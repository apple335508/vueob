import storage from '../common/stroge';
//声明当前的键值的变量
const storagekey="goodstatal";
//获取当前商品的总量
let goodstatal=storage.get(storagekey)||{};
export default{
    state:{},
    getters:{
      get(state){

      },
      getTotalList(){
        return Object.values(state)
      },
      getDalist(){
        return Object.keys(state)
      },
    },
    mutations:{
        set(state,obj){
            state[obj.id]=obj.total;
            storage.set(storagekey,state)
        },
        remove(state,obj){
            delete state[obj.id];
            storage.set(storagekey,state)
        }
    }
}

import storage from '../common/stroge';
//声明当前的键值的变量
const storagekey="goodstatal";
//获取当前商品的总量
let goodstatal=storage.get(storagekey)||{};
// console.log(goodstatal)
export default{
    // 设置购物车的商品数据
    set(id,total){
        // console.log(id)
        goodstatal[id]=total;
        // console.log(storagekey,goodstatal)
        storage.set(storagekey,goodstatal)
    },
    //删除商品的ID
    remove(id){
        delete goodstatal[id];
        storage.set(storagekey,goodstatal)
    },
    //购物车的获取数据
    get(id){
        if(id){   
            return goodstatal[id]||0
        }else{
            //不存在id时,其长度为0 获取商品的总长度
            let tatls=this.getTotalList();
            //获取的值可能为字符串,这边要做隐式处理
            return tatls.length&&tatls.reduce((v1,v2)=>(+v1)+(+v2))
        }
    },
    //将对象转为数组
    getTotalList(){
      return Object.values(goodstatal)
    },
    getDalist(){
      return Object.keys(goodstatal)
    },
}