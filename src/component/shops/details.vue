<template>
  <article class="goods-detail">
    <v-title :title="title"></v-title>
    <!-- 轮播图 -->
     <v-swipe :list="lunbos"></v-swipe>  
  	<!-- 商品购买 -->
    <div class="mui-card">
      <!-- 名称 -->
      <div class="mui-card-header">{{shopmess.title}}</div>
      <!-- 价格 -->
      <div class="mui-card-content mui-card-content-inner">
        <div class="price"> <s>市场价:￥{{shopmess.market_price}}</s> <span>销售价: </span> <em>￥{{shopmess.sell_price}}</em> </div>
        <div> <span>购买数量：</span>
          <!--数字输入框 -->
        <v-upde :intal="total" @change="updal"> </v-upde>

      </div>
      </div>
      <!-- 按钮 -->
        <div class="mui-card-footer">
          <button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">结算</button>
          <div></div>
          <button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined"  @click="addShop">加入购物车</button>
        </div>
    </div>
		<!-- 评论与介绍 -->
	<div class="mui-card">
		    <mt-navbar  v-model="seltnal">
			  <mt-tab-item id="comtne">商品评论</mt-tab-item>
			  <mt-tab-item id="info">图文介绍</mt-tab-item>
	    	</mt-navbar>
		
	   	<mt-tab-container v-model="seltnal">
			   <mt-tab-container-item id="comtne">
			    	<v-comit  :id='id'></v-comit>
			   </mt-tab-container-item>
			   <mt-tab-container-item id="info">
			   <v-total  :id='id'></v-total>
			   </mt-tab-container-item>
	   	</mt-tab-container>   
		</div>

  </article>
</template>

<script>
  import config from '../../js/config.js';
  import storgs from '../../js/model/local.js'
  import Ctitle from '../common/title.vue';
  import swipe from '../common/swide.vue';
  import Ccomnt from '../common/comit.vue';
  import sumet from './song/inve.vue';
  import updata from '../common/number.vue';
  export default {
    data() {
      return {
        title: '商品购买',
        lunbos: [], 
        shopmess:[],//购买上平栏的信息
        id:this.$route.params.id,
        seltnal:'',
        total:storgs.get(this.$route.params.id)
      }
    },
    methods:{
        //商品购买的轮播图
        getlunbo(){
            let url=config.photos+this.id;
            // console.log(url)
            this.$http.get(url).then(rep=>{
                let bod=rep.body;
                if(bod.status==0){
                    this.lunbos=bod.message.map(rems=>{
                        rems.src=config.imgDomain+rems.src;
                        return rems;
                    })
                }
            })
        },
        //购买商品栏
        shopbuy(){
            let url=config.shioinfote+this.id;
            this.$http.get(url).then(rep=>{
                let bod=rep.body;
                bod.status==0&&(this.shopmess=bod.message[0])   
            })
        },
        //更新当前值变化
       updal(v) {
        this.total = v;
      },
      //加入购物车
      addShop() {
          storgs.set(this.id,this.total);
        document.querySelector('.mui-badge').innerHTML = storgs.get();
      }

    },
    created() {
      this.getlunbo();
      this.shopbuy();
   
    },
    components: {
      'v-title': Ctitle,
      'v-swipe': swipe,
      'v-comit':Ccomnt,
      'v-total':sumet,
      'v-upde':updata,
    }
  };
</script>

<style lang="less">
  .goods-detail {
    .mui-card-content {
      .price {
        color: rgb(51, 51, 51);
        margin-bottom: 4px;
        span {
          margin-left: 6px;
        }
        em {
          font-size: 18px;
          color: red;
        }
      }
    }
    .mui-card-footer {
      div {
        width: 100%;
      }
      .mui-btn {
        padding: 8px 0;
        font-size: 16px;
      }
    }
    .mint-tab-item {
    	&.is-selected {
    		margin-bottom: 0;
    		border-bottom: 3px solid #2ce094;
    		color: #2ce094;
    	}
    }
    .mint-tab-item-label {
    	font-size: 18px;
    	color: #2ce094;
    }
  }
</style>