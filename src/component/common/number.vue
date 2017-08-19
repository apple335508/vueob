<template>
 <div class="mui-numbox">
          	<button class="mui-btn mui-btn-numbox-minus" @click="suncact">-</button>
          	<input class="mui-input-numbox" type="number"  v-model="info">
          	<button class="mui-btn mui-btn-numbox-plus" @click="add" >+</button>
 </div>
</template>
<script>
  export default{
      data(){
          return{
              info:this.intal||0
          }
      },
       props:['intal'],
      methods:{
        //增加
            add(){
                this.info++ 
            },
            //减少
            suncact(){
                this.info&&this.info--
            },
      },
     
    
      //监听
    watch:{
          info(){
           this.$emit('change',this.info)
          }
      }

  }
</script>