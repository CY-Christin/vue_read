<template>
    <div>
<!--        <Title/>-->
        <router-view  :key="$route.fullPath"></router-view>
<!--        <detail></detail>-->
        <div class="footer">
            <Footer v-show="$root.bFoot"/>
        </div>

<!--        <img src="https://v1.jinrishici.com/all.png"> 每日诗词-->
    </div>

</template>

<script>
    import Title from "./layouts/uc-title"
    import List from "./pages/list"
    import HotTop from "./pages/hottop"
    import Footer from "./layouts/footer"
    import Search from "./pages/search"
    import Detail from "./pages/detail";
    import SearchResult from "./pages/search-result"
    import TopDetail from "./pages/top-detail"
    import SortDetail from "./pages/sort-detail"
    export default {
        name:"App",
        components:{
            Title,HotTop,Footer,List,Search,Detail,SearchResult,TopDetail,SortDetail
        },
        watch:{
            $route:{
                handler(to){
                    let path =to.path;
                    if(/search|hottop|sort|\//.test(path)){
                        this.$root.bFoot=true
                    }if(/searchresult|topdetail|sortdetail|detail|error/.test(path)){
                        this.$root.bFoot=false
                    }
                },
                immediate:true
            }
        },
        //页面重新加载
        provide(){
            return{
                reload:this.reload
            }
        },
        data(){
            return{
                isRouterAlive:true
            }
        },
        methods:{
            reload(){
                this.isRouterAlive=false
                this.$nextTick(function () {
                    this.isRouterAlive=true
                })
            }
        }
    }
</script>
<style>
.footer{
    height: 0.8rem;
}
</style>