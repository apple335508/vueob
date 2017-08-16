<template>
<section class="details">
<v-title  :title="title"></v-title>
  <div class="mui-card">
		<div class="mui-card-header">
        <h4>{{infos.title}}</h4> 
         <p>  
            <span>{{infos.add_time|formatD('YYYY-MM-DD')}}</span>
            <span>{{infos.click}}</span> 
        </p>   
        </div>
        <!--  缩列图的详情页  -->
		<div class="mui-card-content">
			<ul class="mui-table-view mui-grid-view">
		        <li class="mui-table-view-cell mui-media mui-col-xs-4" v-for="(its,index) in photols"  :key="its.src"  @click="$preview.open(index, photols)">	        
		                 <img class="preview-img"  :src="its.src"/>
                </li>
		    </ul>
		</div>	
   <div class="mui-card-footer" v-html="infos.content"></div> 
	</div>
</section>
</template>
<script>
    //引入配置好的api文件
    import config from '../../js/config.js';
    import tiyle from '../common/title.vue'
    export default({
        data(){
            return{
               infos:[],
                  title:'图片详情',
               photols:[]
            }
        },
        methods:{
            //获取详情页
                getdetals(){
                    let url=config.photodail+this.$route.params.id;
                    this.$http.get(url).then(rep=>{
                        let bod=rep.body;
                    bod.status==0&&(this.infos= bod.message[0]);
                    })
                },
            //获取缩列图
            getpho(){
                let url=config.photos+this.$route.params.id;
                this.$http.get(url).then(rep=>{
                    let bod=rep.body;
                    if(bod.status==0){
                        this.photols=bod.message.map(function(info,i){
                             info.src=config.imgDomain+info.src;
                             info.w=600,
                             info.h=400
                             return info
                        }) 
                    //  console.log(this.photols)
                    }
                })  
             } 
         },
         created(){
            this.getdetals()
            this.getpho();
         },
         components:{
            'v-title':tiyle
         }
    })
</script>
<style lang="less">
    .mui-card-header, .mui-card-footer{
               display: block
    }
    .mui-card-content img{
        width:100%
    }
</style>