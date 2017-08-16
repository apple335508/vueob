<template>
<div class="mui-card">
				<div class="mui-card-header">{{info.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner" v-html="info.content">
					</div>
				</div>
	</div>
</template>
<script>
  import config from '../../../js/config.js';
  export default{
      data(){
          return {
              info:[]
          }
      },
      props:['id'],
      methods:{
          getinfos(){
              let url=config.shopbuys+this.id;
              this.$http.get(url).then(rep=>{
                  let bod=rep.body;
                  bod.status==0&&(this.info=bod.message[0]);
              })
          }
      },
       created(){
           this.getinfos()
       }
  }
</script>