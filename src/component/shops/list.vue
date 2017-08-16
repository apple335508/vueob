<template>
<section class="shplis">
    <ul class="mui-table-view mui-grid-view">
        <li class="mui-table-view-cell mui-media mui-col-xs-6"  v-for="item in sumete"  :key="item.id">  
                <img class="mui-media-object" :src="item.img_url">
                <div class="mui-media-body">{{item.title}}</div>    
                <p>
                   <span class="now_pr">${{item.market_price}}</span> <del  class="old_pri">${{item.sell_price}}</del>
                </p>  
               <div>热卖中  <span>剩{{item.stock_quantity}}件</span></div> 
         </li>
    </ul>
   <ul class="mui-pager">
			<li>
						<a href="#">
							上一页
						</a>
	     	</li>
			<li >
              <router-link  :to="'/shops/list/'+ pageindex">
							下一页
                   </router-link>
			</li>
	</ul>
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
                bod.status==0&&(this.sumete=bod.message)
            })
            this.pageindex++
        },
    },
     created() {
         this.shoplit();
     }
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