<template>
    <section class="  list mint-header">
       <div @click="rollba" class="mint-header-button is-left">
   
    <button class="mint-button mint-button--default mint-button--normal">
       <span class="mint-button-icon"><i class="mintui mintui-back"></i></span>
       <label class="mint-button-text">返回</label>
   </button>
    </div>
     <h1 class="mint-header-title">{{title}}</h1> 
     <div class="mint-header-button is-right"></div>
  
    </section>
</template>
<script>
    export default{
     props:['title'],
      methods:{
      rollba(){
          this.$router.go(-1)
      }
      }
    }
</script>
<style lang="less">
    .list{
        background-color: #ccc;
    border-bottom: 1px solid #888;
    }
</style>