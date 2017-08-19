<template>
	   <div class="mui-content">
			<form id='login-form' class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='account' type="text" class="mui-input-clear mui-input" v-model=" us_name" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" v-model="us_pass" placeholder="请输入密码">
				</div>
			</form>
	 	<div class="mui-content-padded">
				<button id='login' class="mui-btn mui-btn-block mui-btn-primary"  @click="machet">登录</button>
				<div class="link-area">
                <a id='reg'>注册账号</a> <span class="spliter">|</span> <a id='forgetPassword'>忘记密码</a>
				</div>
			</div>
		<div class="mui-content-padded oauth-area">

			</div> 
		</div> 
</template>
<script>
 import { Toast } from 'mint-ui';
// import cookin from './cookie.js';
 export default{
     data(){
        return{
          us_name:'',
          us_pass:''
        }
     },
     methods:{
         machet(){
             if(this.us_name=="张三"&&this.us_pass=='1234'){
                 document.cookie="SESSIONID="+Date.now();
                //  this.$router.push({name:'goodorde'})
                this.$router.push(this.$route.query.nextpage)
             }else{
                       Toast('重新输入用户名和密码');
             }
         }
     }

 }
</script>
<style>
    	.area {
				margin: 20px auto 0px auto;
			}
			
			.mui-input-group {
				margin-top: 10px;
			}
			
			.mui-input-group:first-child {
				margin-top: 20px;
			}
			
			.mui-input-group label {
				width: 22%;
			}
			
			.mui-input-row label~input,
			.mui-input-row label~select,
			.mui-input-row label~textarea {
				width: 78%;
			}
			
			.mui-checkbox input[type=checkbox],
			.mui-radio input[type=radio] {
				top: 6px;
			}
			
			.mui-content-padded {
				margin-top: 25px;
			}
			
			.mui-btn {
				padding: 10px;
			}
			
			.link-area {
				display: block;
				margin-top: 25px;
				text-align: center;
			}
			
			.spliter {
				color: #bbb;
				padding: 0px 8px;
			}
			
			.oauth-area {
				position: absolute;
				bottom: 20px;
				left: 0px;
				text-align: center;
				width: 100%;
				padding: 0px;
				margin: 0px;
			}
</style>