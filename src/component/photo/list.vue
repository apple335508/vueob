<template>
<section class="photo">
      <ul class="mui-table-view">
       <li class="mui-table-view-cell">全部</li>
	    <li class="mui-table-view-cell"  v-for="item in list" :key="item.id">  
            <router-link :to="'/photo/list/' +item.id">{{item.title}}</router-link ></li> 
	</ul>    
    <div class="mui-card"  v-for='ite in pholis'  :key="ite.id"> 
         <div class="mui-card-header mui-card-media">
     <router-link :to="'/photo/datails/'+ite.id">
             <img v-lazy="ite.img_url"/>
     </router-link>
         </div>
				<div class="mui-card-content">
					 <div class="mui-card-content-inner">
					 	<p>{{ite.title}}</p>
					 <p style="color: #333;">{{ ite.zhaiyao}}</p>
					</div>
			</div>
	</div>
</section>
</template>
<script>
//引入配置的入口
import config from '../../js/config.js';

//获取当前的导航栏
export default{
    data(){
      return {
          list:[],
          pholis:[],
      };
    },
 //获取点击的,这边用到watch 来监听点击的ID
 watch: {
    // 只要页面一变化，那么就根据新的id渲染图片列表
    $route() {
       this.getpohos(this.$route.params.id);
    }
  },
    methods:{
        //获取导航栏
        getnavs(){
            let url=config.photonav;
           this.$http.get(url).then(rep=>{
              let bod=rep.body;
              bod.status==0&&(this.list = bod.message);
            })
        },  
        //获取图片页面
        getpohos(id){
            let url=config.photolis+id;
            this.$http.get(url).then(rep=>{
               let bod=rep.body; 
               if(bod.status==0){
             this.pholis = bod.message.map(function(photo, i) {
                   photo.img_url = config.imgDomain + photo.img_url;
                      return photo;
                   });   
               }
             
            })
        }
    },
    // 获取背景style
//    getStyle(item) {
//       return 'height:40vw; background-image:url("' + item.img_url + '")';
//     },
   created() {
        this.getnavs();
        this.getpohos(this.$route.params.id)
     },
};
</script>
<style lang="less">
    .photo{
         .mui-table-view{
               overflow: hidden
         }
        .mui-table-view li{
            float:left
        }
        .mui-card img{
            width:100%;  
            height:100%
        }
    }
</style>