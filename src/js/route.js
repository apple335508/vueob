//配置路由组件
import  VueRouter from 'vue-router'
//引出配置好的路由
import index from '../component/index/index.vue';
import cnmews from '../component/news/list.vue';
import detalis from '../component/news/details.vue';
//引出图文详情的页面

import photolist from '../component/photo/list.vue';
import pohodetal from '../component/photo/datails.vue';

//引入商品的路由
import shoplist from '../component/shops/list.vue';
// import shopdetal from '../component/shops/details.vue'
//导出路由的实例
export default new VueRouter({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:index},
        { path: '/news/list', component: cnmews},
        {path:'/news/details/:id',component:detalis},
        
        //图片展示区域
        {path:'/photo/list/:id',component:photolist },
        {path:'/photo/datails/:id',component:pohodetal},
        //商品信息展示区域
        {path:'/shops/list/:id',component:shoplist},
        // {path:'/shops/details/:id',component:shopdetal}
    ]
    
})