<template>
  <article class="shopcart-list">
   <v-title :title="title"></v-title>
    <!-- 商品列表 -->
    <div class="goods"  v-for='item in shopcar'  :key='item.id'>
      <mt-switch class="switch" v-model="item.selected"></mt-switch> 
      <img class="img" :src="item.src">
      <div class="inforight">
        <h4 class="mui-ellipsis-2">{{item.title}}</h4>
        <div class="bottom">
          <ul>
            <li>￥{{item.sell_price}}</li>
            <li>
             <v-numer :intal=" getdata(item.id)"  @change="update(item.id,$event)"></v-numer>
            </li>
            <li>
              <a href="javascript:void(0)"  @click="remove(item.id)">删除</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 总价 -->
    <div class="total">
      <div class="total_val">
        <ul>
          <li>总计（不含运费）</li>
          <li>已勾选商品  {{ subtal }} 件,总价:￥{{pricetal }}元</li>
        </ul>
      </div>
      <div class="total_btn">
        <mt-button type="primary"  @click="payprice">付 款</mt-button>
      </div>
    </div>

  </article>
</template>

<script>
   import { Toast } from 'mint-ui';
  import config from '../../js/config.js';
  import storgs from '../../js/model/local.js';
  import Ctitle from '../common/title.vue';
  import numer from '../common/number.vue'
  export default{
      data(){
          return{
              shopcar:[],
              title:'购物车'
          }
      },
      computed:{
          subtal(){
           let sumer= this.shopcar.map((item,i)=>{
             return  item.selected?storgs.getTotalList()[i]:0;
                //   console.log(storgs.getTotalList()[i])
               });
             return sumer.length&&sumer.reduce((v1,v2)=>(+v1)+(+v2))
          },
           pricetal(){
           let pricetol= this.shopcar.map((item,i)=>{
             return  item.selected?storgs.getTotalList()[i]*(item.sell_price):0;
               });
             return pricetol.length&&pricetol.reduce((v1,v2)=>(+v1)+(+v2))
          }
      },
      methods:{
          getshopcar(){
              let id=storgs.getDalist();
              if(!id.length){return}
             let url=config.shopinfos+id;
             this.$http.get(url).then(rep=>{
                 let bod=rep.body;
                 if(bod.status==0){
                    this.shopcar=bod.message.map((item)=>{
                        item.selected=true;
                        item.src=config.imgDomain+item.thumb_path;
                      return item;
                    })
                 }    
             })
          },
          //点击删除当前的商品
          remove(id){
           this.shopcar= this.shopcar.filter(item=>id!==item.id)
            storgs.remove(id)
          },
          //更新页面的数据
          getdata(id){
            return storgs.get(id)
           },
           //监听事件
          update(id,total){
            // console.log(id,total)
             this.shopcar[0].selected=!this.shopcar[0].selected;
              this.shopcar[0].selected=!this.shopcar[0].selected;
              storgs.set(id,total);

            document.querySelector('.mui-badge').innerHTML= storgs.get()
           },
           //点击付款页面 判断是否被选中
           payprice(){ 
             let goodsli= this.shopcar.some(item=> item.selected &&storgs.get(item.id)); 
            //  console.log(goodsli)     
            if(!goodsli){
              Toast('至少选择一件商品');
            }else if(/SESSIONID=\w+/.test(document.cookie)){
              this.$router.push('/shopcat/order');
             
            }else {
              this.$router.push({name:'goodlogin',query:{nextpage:'/shopcat/order'}}) 
            }
                 
           }
      },
      created(){
          this.getshopcar()
      },
       components:{
          'v-title': Ctitle,
          'v-numer':numer
      }
  }
</script>

<style lang="less">
  .shopcart-list {
    .goods {
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      height: 102px;
      display: flex;
      padding: 5px;
      .switch {
        flex: 0 0 52px;
      }
      .img {
        margin-left: 5px;
        height: 75px;
        width: 75px;
        flex: 0 0 85px;
      }
      .inforight {
        margin-left: 5px;
        flex: 1;
      }
      .inforight ul {
        padding-left: 0px;
      }
      .inforight li {
        list-style: none;
        display: inline-block;
      }
      .inforight h4 {
        color: #0094ff;
        font-size: 14px;
      }
      .bottom li:first-child {
        color: red;
        margin-right: 5px;
      }
      .bottom li:last-child {
        margin-left: 5px;
      }
    }
    .total {
      height: 84px;
      background-color: rgba(0, 0, 0, 0.1);
      display: flex;
      padding: 5px 14px;
      ul {
		    padding-left: 0px;
		    margin: 14px 0;
		    li {
		      list-style: none;
		      font-size: 14px;
		    }
		  }
		  &_val {
		  	flex: 1;
		  }
		  &_btn {
		  	flex: 0 0 60px;
	      margin: 18px 0 0 0;
		  }
    }
  }
</style>