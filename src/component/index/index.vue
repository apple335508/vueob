<template>
   <article>
     <v-swipe></v-swipe>
     <v-nav></v-nav>
   </article>
</template>
<script>
   import swope from './swipe.vue';
   import navs from './nav.vue';
   export default{
     components: {
       'v-nav': navs,
    'v-swipe': swope,
  
  }
}
</script>
<style>
    
</style>