<template>
   <article>
     <v-swipe  :list="lunbos"></v-swipe>
     <v-nav></v-nav>
   </article>
</template>
<script>
  //  import swope from './swipe.vue';
    import swope from '../common/swide.vue'
   import navs from './nav.vue';
   export default{
      data() {
          return {
              lunbos: []
          };
      },

    methods: {
        getLunbo() {
            let url = 'http://139.199.192.48:8888/api/getlunbo';
            this.$http.get(url).then(rep => {
                let bod=rep.body;
                if(bod.status == 0) {
                    this.lunbos =bod.message.map(item=>{
                       item.src = item.img;
                       return item
                    })
                }
            });
        }
    },
    //书写生命周期函数自动刷新
      created() {
        this.getLunbo();
      },
      components: {
       'v-nav': navs,
       'v-swipe': swope,
     }
}
</script>
<style>
    
</style>