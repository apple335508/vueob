import vueRoute from 'vue-router';
import vueResource  from 'vue-resource';
import Vue from 'vue';
import mintUi from 'mint-ui';
import  'mint-ui/lib/style.css';
import  'mui/dist/css/mui.css';
import 'mui/examples/hello-mui/css/icons-extra.css';

import Vuex from 'vuex'

//使用导入的文件
Vue.use(vueRoute);
Vue.use(vueResource);
Vue.use(mintUi);
Vue.use(Vuex)
//导入过滤器
import  './fitte.js'

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//引入自己的根目录文件
import app from '../component/App.vue';
//引入自己配置好的路由
import router from './route.js';
//导入vuex的相关逐渐
import goods from './model/goods.js'

//将入口与视图关联
new Vue({
    el:'#app',
    render:c=>c(app),
    router:router,
    store:new Vuex.Store(goods)
})
