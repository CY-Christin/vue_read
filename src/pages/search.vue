<template>
    <div>
        <uc-title :title="'搜索'" :back="0"></uc-title>
        <div class="uc-input">
            <input type="text"
                   placeholder="请输入查询内容"
                   v-model.lazy="word"
            >
            <input type="button" value="提交" @click="toResult">
        </div>
        <div class="searchHot">
            <h2 style="text-align: center">搜索热词</h2>
            <uc-line :hotword="hotword"></uc-line>
        </div>
        ]

    </div>
</template>

<script>
    // import UcInput from "../components/uc-input/uc-input"
    import UcTitle from "../components/uc-title/uc-title"
    import UcLine from "../components/uc-line/uc-line"
    import SearchResult from "./search-result"
    export default {
        name: "BookStore",
        components:{
            UcLine,UcTitle,SearchResult
        },
        data(){
            return{
                hotword:[],
                word:"",
                result:[],
                show:0
            }
        },
        mounted() {
            axios({
                url:"/api/book/search-hotwords"
            }).then(
                res=>{
                    if(res.data.ok=true)
                        this.hotword=res.data.searchHotWords
                    // console.log(res)
                }
            )
        },
        methods:{
            toResult(){
                this.$router.push({name:"/searchresult",params:{keyword:this.word}})
            }
        }
    }
</script>

<style scoped>
    .uc-input{height:0.65rem;margin: 1rem 0.5rem 0.5rem}
    .uc-input input[type=text]{ padding-left:0.5rem;width:70%;height:100%; font-size:0.4rem;text-align: left;float: left;border:1px solid #e5e7e8;}
    .uc-input input[type=button]{width: 15%;height: 100%;border: 1px solid black;float: right}
    /*.after{display: none}*/
    .before{display: none}
</style>