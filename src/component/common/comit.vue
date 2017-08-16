<template>
<section>
   <div class="mui-card">
				<div class="mui-card-header">评论列表</div>
				<div class="mui-card-content">     
				      	<textarea  v-model="coment" id="textarea" rows="5" placeholder="欢迎吐槽"></textarea>     
              <button  @click="submiter" type="button" class="mui-btn mui-btn-success mui-btn-block">发表</button>
				</div>
 	</div>
  

   <div class="mui-card">
            <div class="mui-card-header">
             评论列表
            </div>
            <div class="mui-card-content">
                <ul class="mui-table-view">
                    <li v-for='(item ,i) in list'  :key="i" class="mui-table-view-cell">
                        <div>
                            <span>{{ i + 1 }}楼</span>
                            <span>用户:{{item.user_name}} </span>
                            <span>发表时间：{{item. add_time|formatD('YYYY-MM-DD')}}</span>
                        </div>
                         <p>{{item.content }}</p>
                    </li>
                </ul>
                <button   ref="loadmorebtn"  @click="getsholis" type="button" class="mui-btn mui-btn-success mui-btn-block">加载更多</button>
            </div>
        </div> 
    </section>
</template>
<script>
import  config  from '../../js/config.js'
import { Toast } from 'mint-ui';
export default{
    data(){
        return{
                coment:'',
              pageindex:1,
                list:[],
              }
          },
    props:['id'],
    methods:{
        //发表评论
     submiter(){
         let url=config.submitput+this.id;
        //  console.log(url)
         let data={content:this.coment};
        this.$http.post(url,data,{emulateJSON: true}).then(rep=>{
             let bod=rep.body;
               if(bod.status==0){
                     Toast({
                    message: '操作成功',
                    iconClass: 'icon icon-success'
                  });
                   this.list.unshift({
                       user_name:"自己",
                       add_time: Date.now(),
                       content:this.coment
                   })
                   this.content = '';
               }
         })
        },
        //评论列表
        getsholis(){
            let url=`${config.getsumlt+this.id}?pageindex=${this.pageindex}`;
            this.$http.get(url).then(rep=>{
                    let bod=rep.body;
                    if(bod.status==0&&bod.message.length>0){
                    this.list.push(...bod.message);
                    this.pageindex++
                    }else{
                        this.$refs.loadmorebtn.disabled=true;
                    }
                    // console.log(this.$refs.loadMoreBtn)
              })
            }
      },
     created() {
       this.getsholis();
      }
  }
</script>
<style lang="less">
    .mui-card{
        .mui-table-view p{
             background:green;
        }
    }
</style>