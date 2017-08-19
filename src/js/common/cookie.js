let content={};
export default{
    //设置cook的值
    set(key,value){
       content[key]={
           data:value,
           time:Data.now()
       };
    },
      //获取cook的值
    get(key){
        let sument=content[key];
        if(!sument||Data.now()-content.time>0){
            this.remove(key)
        }else{
            return sument.data
        }
    },
    //删除id的值
    remove(key){
        delete content[key]
    }
}
