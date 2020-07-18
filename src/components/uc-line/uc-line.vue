<template>
    <div>
        <div  v-for="(item,index) of hotword" :key="index"
        @click="toResult(item)"
        >
            <div class="listwrap">
                <p>{{item.word}}{{item.isNew?'【新】':''}}</p>
<!--                <b class="new" v-text=""></b>-->
                <p>名词变化:{{item.soaring}}</p>
                <p>搜索次数:{{item.times}}</p>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "uc-line",
        props:{
            hotword:{
                type:Array,
                required:true
            }
        },
        methods:{
            toResult(item){
                this.$router.push({name:"/searchresult",params:{keyword:item.word}})
            }
        }
    }
</script>

<style scoped>
    .listwrap{
        width: 100%;
        text-align: center;
        margin: 0.3rem 0;
    }
</style>