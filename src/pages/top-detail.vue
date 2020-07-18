<template>
    <div>
        <div class="title">
            <uc-title
                    :title="data.title"
            />
        </div>
        <div class="main">
            <div class="top">
                <div class="uptime">
                    最后更新时间:{{data.updated}}
                </div>
                <div class="total">
                    共计:{{data.total}}
                </div>
            </div>
            <div class="content">
                <uc-cell
                    v-for="(item, index) of data.books"
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
                    :to="{name:'/detail',params:{_id:item._id}}"
                />
            </div>
        </div>
    </div>

</template>

<script>
    import UcTitle from "../components/uc-title/uc-title"
    import UcCell from "../components/uc-cell/uc-cell"
    export default {
        name: "top-detail",
        components:{UcTitle,UcCell},
        data(){
            return{
                id:this.$route.params.id,
                data:""
            }
        },
        mounted() {
            axios({
                url:"/api/ranking/"+this.id
            }).then(
                res=>{
                    if(res.data.ok=true){
                        this.data=res.data.ranking
                    }
                }
            )
        }
    }
</script>

<style scoped>
.title{
    height: 1rem;
}
</style>