<template>
<main>
      <v-header></v-header>
      <router-view></router-view>
      <v-footer></v-footer>
</main>
</template>
<script>
   import chehard from './home/header.vue';
   import chfoot from './home/foot.vue';
   export default{
       components:{
       'v-header': chehard,
       'v-footer':  chfoot
       }
   } 
</script>
<style>
</style>