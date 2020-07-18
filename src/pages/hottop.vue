<template>
    <div>
        <div class="title">
            <uc-title :back="0" :title="'排行榜'"></uc-title>
        </div>
        <loading v-show="!blocks"></loading>
        <p>男生榜</p>
            <block
                    :data="blocks.male"
            >
            </block>


        <p>女生榜</p>
        <block
                :data="blocks.female"
        ></block>
        <p>已出版</p>
        <block
                :data="blocks.epub"
        ></block>
    </div>
</template>

<script>
    //排行榜
    import UcTitle from "../components/uc-title/uc-title";
    import Block from "../components/block/block"
    import Loading from "../components/loading/loading"
    export default {
        name: "list",
        components: {
            UcTitle,
            Block,
            Loading
        },
        data() {
            return {
                blocks: {},
            };
        },
        mounted() {
            axios({
                url:"/api/ranking/gender"
                // url: "./list.json",
            }).then((res) => {
                if (res.data.ok = true) {
                    this.blocks=res.data
                }
            });
        },
        methods:{
            toDetail(id){
                console.log(id)
            }
        }
    };
</script>

<style scoped>
    .title{
        height: 1rem;
    }
</style>
