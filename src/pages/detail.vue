<template>
    <div>

<!--        <div v-show="this.$router._id">-->
            <div class="title">
                <uc-title :title="datas.title"></uc-title>
            </div>
            <loading v-show="!datas"></loading>
            <div class="main-content clear">
                <img class="cover" :src="'http://statics.zhuishushenqi.com'+datas.cover" alt="">
                <div class="name">
                    <p id="book-name">书名:{{datas.title}}</p>
                    <p id="author">作者:{{datas.author}}</p>
                    <div id="tags" >
                        标签:
                        <router-link to="" v-for="(item,index) of datas.tags" :key="index">{{item}} </router-link>
                    </div>
                    <p id="word-count">总字数:{{datas.wordCount}}</p>
                    <p id="total-follower">关注人数:{{datas.totalFollower}}</p>
                    <p v-text="datas.isSerial?'未完结':'已完结'"></p>
                    <p id="rate" v-if="datas">评分:{{datas.rating['score']}}({{datas.rating.tip}})</p>
                </div>
                <div id="longIntro">简介:{{datas.longIntro}}</div>
                <div id="lastChapter">最近更新:{{datas.lastChapter}}</div>
            </div>
            <div id="recommended">
                <uc-cell
                        v-for="(item, index) of recommended.books"
                        :key="index"
                        :datas="item"
                        :title="item.title"
                        :author="item.author"
                        :majorCate="item.majorCate"
                        :minorCate="item.minorCate"
                        :follower="item.latelyFollower"
                        :ratio="item.retentionRatio"
                        :otherReadRatio="item.otherReadRatio"
                        :sintro="item.shortIntro"
                        :imgs="item.cover"
                />
            </div>
        </div>

<!--    </div>-->
</template>

<script>
    import UcTitle from "../components/uc-title/uc-title"
    import UcCell from "../components/uc-cell/uc-cell"
    import Loading from "../components/loading/loading"
    export default {
        // inject:['reload'],//同页面跳转刷新
        name: "detail",
        components:{
            UcTitle,UcCell,Loading
        },
        data(){
          return {
                datas:'',
                recommended:"",
                // id:"5285121d65004cdd3b030f05",
                data:this.$route.params._id
          }
        },
        mounted() {
            axios.all([
                    axios({url:"api/book/"+this.$route.params._id,}),
                    axios({url:"api/book/"+this.$route.params._id+"/recommend"})
                ]).then(axios.spread((datas,recommended)=>{
                    this.datas=datas.data;
                    this.recommended=recommended.data;
            }))

        },
        methods:{
                toDetail(item){
                    console.log(item._id)
                    // this.$router.push({name:"/detail",params:{_id:item._id}})
                }
        },
        watch:{
            "$route":function(to,from){
                this.routerParms.list=to.query.list
                this.reload()
            }
        }
    }
</script>

<style scoped>
    .title{
        height: 1rem;
        text-align: center;
        background-color: white;
    }
    .cover{
        float: left;
        height: 3rem;
    }
    .name{
        float: left;
    }
    #longIntro{
        float: left;
    }
    #lastChapter{
        float: left;
    }
    .main-content{
        border-bottom: 1px dashed #ccc;
    }
</style>