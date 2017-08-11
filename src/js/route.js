// import Vue from 'vue';
import  VueRoute from 'vue-router'

//引出配置好的路由
import indexs from '../component/index/index.vue';
//导出路由的实例
export default new VueRoute({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:indexs}
    ]
})