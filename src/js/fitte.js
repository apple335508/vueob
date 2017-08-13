import Vue from 'vue';
Vue.filter('formatD',function(val, format){
    let yReg = /YYYY/i;
    let mReg = /MM/i;
    let dReg = /DD/i;
    //创建对应的日期
    let date=new Date(val);
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();

    return format.replace(yReg,y).replace(mReg,m).replace(dReg, d);
})