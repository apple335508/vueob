const domain = 'http://139.199.192.48:8888';
export default {
    imgDomain: 'http://ofv795nmp.bkt.clouddn.com/',
    domain: domain,
    //配置路由的的参数
    newsList: domain + '/api/getnewslist',
    newsDetails: domain + '/api/getnew/',
    submitput:domain+'/api/postcomment/',
    getsumlt:domain+'/api/getcomments/',
    //获取图片列表的选项栏
    photolis:domain+'/api/getimages/',
    photonav:domain+'/api/getimgcategory',
    photodail:domain+'/api/getimageInfo/',
    photos:domain+'/api/getthumimages/',

    //商品列表的选项栏
    shoplist:domain+'/api/getgoods',
    shioinfote:domain+'/api/goods/getinfo/',
    shopbuys:domain+'/api/goods/getdesc/',
    //商品购物车的详情页
    shopinfos:domain+'/api/goods/getshopcarlist/',

    
};