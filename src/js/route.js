//配置路由组件
import  VueRouter from 'vue-router'
//引出配置好的路由
import index from '../component/index/index.vue';
import cnmews from '../component/news/list.vue';
import detalis from '../component/news/details.vue'
//导出路由的实例
export default new VueRouter({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:index},
        { path: '/news/list', component: cnmews},
        {path:'/news/details/:id',component:detalis}
    ]
})