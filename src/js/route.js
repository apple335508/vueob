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
import shopdetal from '../component/shops/details.vue';
//引入商品购物车的路由
import shopcar from '../component/shopcat/list.vue';
//购物车的订单页面
import shoporde from '../component/shopcat/order.vue';
//引入登录模块
import logins from '../component/user/login.vue'
//导出路由的实例
export default new VueRouter({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:index, name:'index'},
        {path: '/news/list', component: cnmews},
        {path:'/news/details/:id',component:detalis},
        
        //图片展示区域
        {path:'/photo/list/:id',component:photolist },
        {path:'/photo/datails/:id',component:pohodetal},
        //商品信息展示区域
        {path:'/shops/list',component:shoplist, name:'goodL'},
        {path:'/shops/details/:id',component:shopdetal, name: 'goodsD'},
        //购物车页面
        {path:'/shopcat/list',component:shopcar, name:'goodsby'},
        //配置购物车的订单页面
        {path:'/shopcat/order',component:shoporde, name:'goodorde'},
        //配置登录模块
        {path:'/user/login',component:logins, name:'goodlogin'},
    ]
    
})