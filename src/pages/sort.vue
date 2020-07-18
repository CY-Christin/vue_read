<template>
    <div>
        <div class="title">
            <uc-title :back="0" :title="'分类'"/>
        </div>
        <loading v-show="!data"></loading>
        <div class="content">
            <div v-for="(item,index) in data" >
                <h3 v-if="item[1]" class="littletitle">{{named(index)}}</h3>
                <div v-for="(i,n) in item" class="part" :key="item.n" @click="toSortDetail(i)">
                    <img :src="'http://statics.zhuishushenqi.com'+i.bookCover[0]" alt="">
                    <p>{{i.name}}</p>
                    <p>共{{i.bookCount}}本</p>
                    <p>本月共{{i.monthlyCount}}本</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //分类
    import UcTitle from "../components/uc-title/uc-title"
    import Loading from "../components/loading/loading"
    export default {
        name: "sort",
        components:{UcTitle,Loading},
        data(){
            return{
                data:"",
            }
        },
        mounted() {
            axios({
                url:"/api/cats/lv2/statistics"
            }).then(
                res=>{
                    if(res.ok=true){
                        this.data=res.data
                        // console.log(this.data)
                    }
                }
            )
        },
        methods:{
            toSortDetail(i){
                this.$router.push({name:"/sortdetail",params:{key:i.name}})
                // console.log(i.name)
            },
            named(index) {
                switch (index) {
                    case "male":
                        return "男";
                    case "female":
                        return "女";
                    case "picture":
                        return "漫画";
                    case "press":
                        return "出版";
                }
            }
        },
        computed:{

        }
    }
</script>

<style scoped>
    .title{
        height: 1rem;
    }
    .part{
        width: 30%;
        float: left;
        margin: 0.3rem 0.1rem;
        height: 3rem;

    }
.part img{
    width: 100%;
    float: left;
    height: 80%;
}
    .littletitle{
        /*display: inline;*/
        /*width: 0.2rem;*/
        /*height: 0.3rem;*/
        float: left;
        width: 100%;
        /*border:1px solid #333 ;*/
        /*float: left;*/
        /*margin: 0rem 0 0 0.2rem;*/
        margin-top: 0.3rem;
        padding-left: 0.2rem ;
    }
</style>