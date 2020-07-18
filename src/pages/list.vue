<template>
    <div>
        <div class="title">
            <uc-title :back="0" :title="title"></uc-title>
        </div>
        <loading v-show="!cell"></loading>
        <div v-for="(item, index) of cell" @click="toDetail(item)">
            <uc-cell
                :key="index"
                :datas="item"
                :title="item.title"
                :author="item.author"
                :minorCate="item.minorCate"
                :follower="item.latelyFollower"
                :ratio="item.retentionRatio"
                :sintro="item.shortIntro"
                :imgs="item.cover"

            />
        </div>

    </div>
</template>

<script>
//排行榜
import UcTitle from "../components/uc-title/uc-title";
import UcCell from "../components/uc-cell/uc-cell";
import Loading from "../components/loading/loading"
export default {
    name: "list",
    components: {
        UcTitle,
        UcCell,
        Loading
    },
    data() {
        return {
            cell: [],
            title: "",
        };
    },
    mounted() {
        axios({
            url:"/api/ranking/5a6844aafc84c2b8efaa6b6e"
            // url: "./data.json",
        }).then((res) => {
            // console.log('list',res)
            if (res.data.ok === true) {
                this.cell = res.data.ranking.books;
                // console.log(this.cell)
                this.title=res.data.ranking.title;
            }
        });
    },
    methods:{
        toDetail(item){
            // this.$router.push(`/error`)
            this.$router.push({name:"/detail",params:{_id:item._id}})
            // console.log(item._id)
        },
    }
};
</script>

<style scoped>
    .title{
        height: 1rem;
    }
</style>
