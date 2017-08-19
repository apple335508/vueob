<template>
    <footer  class="foot">
        <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
			<router-link :to="{name:'index'}">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
			<router-link :to="{name:'goodL'}">
				<span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
				<span class="mui-tab-label">商品购买</span>
			</router-link>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<router-link :to="{name:'goodL'}">
				<span class="mui-icon mui-icon-extra mui-icon-extra-express"><span class="mui-badge">{{total}}</span></span>
				<span class="mui-tab-label">购物车</span>
				</router-link>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">个人中心</span>
			</a>
		</nav>
    </footer>
</template>
<script>
// 
    import forms from '../../js/model/local.js';
	export default{
		data(){
			return{
				total:forms.get()
			} 
		}
	}
</script>
<style lang="less">
    .foot{
	  margin-top:40px;
	}
</style>