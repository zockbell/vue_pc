<template>
    <div class="readWrapper">
        <div class="adver-img">
            <img :src="banner_url" :onerror="defaultImg" alt="央视主持人课文朗读">
        </div>

        <div class="content">
            <Tabs value="name2">
                <TabPane label="简介" name="name1">
                    <div class="abstract">
                    　　<p>“中小学语文示范诵读库”是中央广播电视总台和教育部合作的一项公益项目，该项目已被列入《国家语言文字事业“十三五”发展规划》。</p>
                        <p>该项目发挥了中央广播电视总台播音员主持人的专业优势，再加上顶尖的音频制作团队，
                        在创作上精益求精、在声音品质和呈现方式上努力创新，使每件作品达到最佳传播效果。
                        该项目使中央广电总台的播音主持实力和教育部教材的权威性相结合，试图更好地诠释中华传统文化，
                        让社会主义核心价值观融入祖国少年儿童的基因里、血脉中。</p>
                    </div>
                </TabPane>
                <TabPane label="音频" name="name2">
                    <div class="audio">
                        <!-- 搜索条 -->

                        <!-- 音频 -->
                        <Card :bordered="false" v-for="(item , index) in pageList" :key="index">
                            <p slot="title">{{item.title}} <i class="iconfont icon-bofang" @click="mp3Play(item.path)"></i></p>
                            <p>册次：{{item.register}}</p>
                            <p>朗读：{{item.recite}}</p>
                        </Card>
                        
                        <!-- 分页 -->
                        <Page 
                            :total="lists"
                            show-elevator
                            :page-size="pageContents"
                            @on-change="pagination"
                            show-total
                        />
                    </div>
                </TabPane>
            </Tabs>

            <audio 
                ref="mp3" 
                :src="mp3Url"
                controls="controls" 
                style="display:none;"
            >
                <source  type="audio/mpeg">
                  Your browser does not support the audio tag.
            </audio>
        </div>
    </div>
</template>

<script>
import { Read } from '@/api/http';
import { Tabs, TabPane, Card, Page } from 'iview';
import Vue from 'vue';
Vue.component('Tabs', Tabs);
Vue.component('TabPane', TabPane);
Vue.component('Card', Card);
Vue.component('Page', Page);

export default {
  data() {
      return {
        playing: false,
        banner_url: '',     // banner地址
        mp3Url: '',         // 音频地址
        audioData: [],      // 总内容
        lists: 1,           // 总条数
        pageList: [],       // 当前页码显示的内容数
        currentPage: 1,     // 当前页码
        totalPages: 1,      // 总页码
        pageContents: 5,    // 每页显示的条数
        defaultImg: 'this.src="' + require('@/assets/images/gray_2.png') + '"',
      };
  },
  created() {
    Read({
        appkey: window.platform_key,
        userID: localStorage.getItem('user_id'),
    })
    .then((res) => {
        this.banner_url = res.banner_url;
        this.audioData = res.content;
        this.lists = res.content.length;
        // 数据加载完默认显示第一页内容
        this.pagination(1);
    })
    .catch((err) => {
        window.console.log(err);
    });
  },
  methods: {
    // 分页
    pagination(page) {
        // window.console.log('当前值：' + page, this.currentPage - 1);
        // 数据一次性加载，后台并未做分布，前端页码遍历
        this.currentPage = page;
        this.totalPages = Math.ceil(this.lists / this.pageContents);
        const pageShow = (this.currentPage - 1) * this.pageContents;
        this.pageList = this.audioData.slice(pageShow, (pageShow + this.pageContents));
    },
    // 页码改变的回调
    change(page) {
        window.console.log('当前值：' + page);
    },
    mp3Play(path) {
        this.mp3Url = path;
        const pro =  this.$refs.mp3.play();
        pro.then((res) => {
            window.console.log(res);
        }).catch((err) => {
            window.console.log(err);
            this.$refs.mp3.play();
        });
        window.console.log(this.$refs.mp3);

        // const audio = new Audio();
        // audio.src = path;
        // audio.play();
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/read"
</style>