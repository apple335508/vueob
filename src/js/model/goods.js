export default{
    state:{
        count:156
    },
    //相当于conpuent的属性
    getters:{
      getcount(state){
        return state.count;
      }
    },
    mutations:{
        addcount(state){
           state.count++;
        },
        setcount(state,val){
            state.count=val;
        }
    }

}

