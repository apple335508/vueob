<template>
    <section  class="news">
   <v-title  :title="title"></v-title>
    <div class="mui-card">
				<div class="mui-card-header">{{news.title}}</div>
                <div class="mui-card-footer">
                <span>创建时间:{{news.add_time|formatD('YYYY-MM-DD')}}</span>
                 <span>浏览量：{{news.click }}</span>
                </div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner" v-html="news.content">	
					</div>
				</div>		
	</div>
   <v-commit :id="id"></v-commit>
    </section>   
</template>
<script>
    import config from '../../js/config.js';
    import ctitl from '../common/title.vue';
    import comit from '../common/comit.vue';
    export default{
        data(){
            return{
                news:{},
                title:'新闻详情',
                id:this.$route.params.id
            }
        },
        methods:{
            getinfor(){
                // console.log(this.$route.params.id)
                let  url= config.newsDetails+this.$route.params.id;
              this.$http.get(url).then(rep => {
                rep.body.status == 0 && (this.news = rep.body.message[0]);
             });
            }
        },
        //自动更新数据函数
        created(){
            this.getinfor();
        },
        //添加组件
     
       components:{
        'v-title':ctitl,
        'v-commit':comit
        }
    }
</script>
<style lang="less">
    
</style>