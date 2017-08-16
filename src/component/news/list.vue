<template>
  <section class="list">
    <v-title  :title="title"></v-title>
    <ul class="mui-table-view">
        <li v-for="item in list" :key="item.id" class="mui-table-view-cell mui-media">
            <router-link :to="'/news/details/'+item.id">
                <img :src="item.img_url" class="mui-media-object mui-pull-left">
                <div class="mui-media-body">
                    <p class="mui-ellipsis">{{ item.title }}</p>
                    <div class="list_item">
                        <p>创建时间：{{ item.add_time|formatD('YYYY-MM-DD')}}</p>
                        <p>点击量：{{ item.click }}</p>
                    </div>
                </div>
            </router-link>
        </li>
    </ul>
  </section>
</template>
<script>
import config from '../../js/config.js';
 import ctitl from '../common/title.vue';
export default {
    data() {
        return {
            title:'新闻资讯',
            list: []  
        };
    },
    methods: {
        getNews() {
            let url = config.newsList;
            this.$http.get(url).then(rep => {
                rep.body.status == 0 && (this.list = rep.body.message);
            });
        }
    },
    created() {
        this.getNews();
    },
    
  components:{
        'v-title':ctitl
        }
};
</script>
<style lang="less">
    .list {
        &_item p{
            display: inline-block;
        }
    }
</style>
