<template>
<section class="shplis">
    <ul class="mui-table-view mui-grid-view">
        <li class="mui-table-view-cell mui-media mui-col-xs-6"  v-for="item in sumete"  :key="item.id"> 
        <router-link  :to="{name:'goodsD', params:{id: item.id }}"> 
                <img class="mui-media-object" :src="item.img_url">
                <div class="mui-media-body">{{item.title}}</div>    
                <p>
                   <span class="now_pr">${{item.market_price}}</span> <del  class="old_pri">${{item.sell_price}}</del>
                </p>  
               <div>热卖中  <span>剩{{item.stock_quantity}}件</span></div> 
               </router-link>
         </li>
    </ul>
    <button   ref="shopmore" @click="shoplit" type="button"  class="mui-btn mui-btn-success mui-btn-block">加载更多</button>
    </section>
</template>
<script>
import config from '../../js/config.js'
export default({
    data(){
        return{
            sumete:[],
            pageindex:1,
        }
    },
    methods:{
        shoplit(){
            let url=`${config.shoplist}?pageindex=${this.pageindex}`;
            this.$http.get(url).then(rep=>{
                let bod=rep.body;
                if(bod.status==0&&bod.message.length>0){
                    this.sumete.push(...bod.message);
                        this.pageindex++
                  }else if(bod.message.length==0){
                    this.$refs.shopmore.disabled=true;
                  }
            })
            
        },
    },
     created() {
         this.shoplit();
     },
     
})
</script>
<style lang="less">
    .shplis{
       .mui-grid-view {
           p .now_pr{
               font-size:20px;
               color:red   
            }
          p .old_pri{

          }
       }
    }
</style>