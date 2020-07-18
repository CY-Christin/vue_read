<template>
    <div class="result" >
        <div class="title">
            <uc-title :title="'搜索结果'"></uc-title>
        </div>
        <div  v-for="(item, index) of datas" @click="toDetail(item)" :key="item._id">
            <img :src="'http://statics.zhuishushenqi.com'+item.cover" alt="">
            <p id="title">书名：{{ item.title }}</p>
            <p id="minorCate">分类：{{item.cat}}</p>
            <p id="author">作者：{{item.author}}</p>
            <p id="follower">最近关注：{{item.latelyFollower}}</p>
            <p>总字数:{{item.wordCount}}</p>
            <p id="sintro">简介：{{item.shortIntro}}</p>
        </div>
    </div>
</template>

<script>
    import UcTitle from "../components/uc-title/uc-title"
    export default {
        name: "search-result",
        data(){
            return{
                keyword:this.$route.params.keyword,
                datas:""
            }
        },
        props:{

        },
        mounted() {
                axios({
                    url:"api/book/fuzzy-search?query="+this.keyword
                }).then(
                    res=>{
                        if(res.data.ok=true){
                            this.datas=res.data.books
                            // console.log(this.result)

                        }
                    }
                )
                // this.word="https://api.zhuishushenqi.com/book/fuzzy-search?query="+this.word

        },
        methods:{
            toDetail(item){
                // this.$router.push(`/error`)
                this.$router.push({name:"/detail",params:{_id:item._id}})
                // console.log(item._id)
            },
        },
        components:{
            UcTitle
        }

    }
</script>

<style scoped>
    .title{
        height: 1rem;
        text-align: center;
    }
    .result {
        position: relative;
        color: #494d4d;
        width: 6.4rem;
        margin: 0 auto;
        clear: both;
        padding: 0.2rem ;
        border-bottom: 1px dashed #ccc;
    }
    .result:active {
        background: #ccc;
    }
    .result h2 {
        max-height: 0.9rem;
        font-size: 0.33rem;
        overflow: hidden;
    }
    .result p {
        max-height: 1.9rem;
        margin-top: 0.05rem;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .result > a {
        position: absolute;
        right: 1rem;
        top: 50%;
        width: 20px;
        height: 20px;
        color: #fff;
        font-weight: bold;
        margin-top: -5px;
        border-radius: 50%;
        background-color: #494d4d;
        text-align: center;
    }
    .result p{
        /*height: 0.2rem;*/
        color: black;
    }
    .result img{
        width: 1rem;
        float: left;
    }
</style>