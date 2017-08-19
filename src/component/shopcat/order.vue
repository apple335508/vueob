<template>
   <article>
     <v-title  :title="title"></v-title>
   </article>
</template>
<script>
  //  import swope from './swipe.vue';
  import Ctitle from '../common/title.vue';
   export default{
      data() {
          return {
             title:'订单详情'
          };
      },
      components: {
       'v-title': Ctitle,
     }
}
</script>
<style>
    
</style>