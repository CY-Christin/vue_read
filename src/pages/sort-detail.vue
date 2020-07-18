<template>
    <div>
        <div class="title">
            <uc-title :title="this.key"/>
        </div>
        <div class="content">
            <div class="tab">
                <p>共计:{{total}}本</p>
            </div>
            <div class="list"  v-for="(item, index) of data" @click="toDetail(item)" :key="item._id">
                <img :src="'http://statics.zhuishushenqi.com'+item.cover" alt="">
                <p id="title">书名：{{ item.title }}</p>
                <p id="minorCate">分类：{{item.majorCate}}</p>
                <p id="author">作者：{{item.author}}</p>
                <p id="follower">最近关注：{{item.latelyFollower}}</p>
                <div id="tags">
                    标签:<p v-for="(i,n) in item.tags">{{i}} </p>
                </div>
                <p id="sintro">简介：{{item.shortIntro}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import UcCell from "../components/uc-cell/uc-cell"
    import UcTitle from "../components/uc-title/uc-title"
    export default {
        name: "sort-detail",
        components:{UcCell,UcTitle},
        data(){
          return{
              key:this.$route.params.key,
              data:"",
              tab:"",
              total:""
          }
        },
        mounted() {
            axios({
                url:"/api/book/by-categories",
                params:{major:this.key,start:0,limit:30}
            }).then(
                // res=>res.ok=true && (this.data=res.books)
                res=>{
                    // console.log(res)
                    this.data=res.data.books
                }
            )
            axios.all([
                axios({url:"/api/book/by-categories",
                    params:{major:this.key,start:0,limit:30}}),
                axios({url:"/api/cats/lv2"})
            ]).then(axios.spread((books,tab)=>{
                this.books=books.data.books
                this.tab=tab.data
                this.total=books.data.total
            }))
        },
        methods:{
            toDetail(item){
                this.$router.push({name:"/detail",params:{_id:item._id}})
            }
        }
    }
</script>

<style scoped>
.title{
    height: 1rem;
    text-align: center;
}
    .tab{
        height: 0.5rem;
        margin: 0.2rem;
    }
    .content img{
        width: 1rem;
        float: left;
    }
    .content .list{
        border-bottom: 1px dashed #333;
        margin: 0.2rem;
    }
    #tags p{
        display: inline;
    }
    #sintro{
    max-height: 1.9rem;
    margin-top: 0.05rem;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    }
</style>