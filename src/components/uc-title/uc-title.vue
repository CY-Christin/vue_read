<template>
    <div class="title">
        <div v-if="back" class="back" @click="$router.go(-1)"></div>
        <h1>{{title}}</h1>
    </div>

</template>

<script>
    export default {
        props:{
            title:{
                type:String,
                default:"Loading..."
            },
            back:{
                type:Number,
                default:1,
                required:false
            }
         },
    }
</script>

<style scoped>
    .title{
        padding: 0.2rem 0 0 0.3rem;
        position: fixed;
        top: 0;
        left: 0;
        border-bottom: 1px solid #999;
        width: 100%;
        background-color: white;
    }
    .back{
        width: 0.4rem;
        height: 0.4rem;
        margin-top: 0.1rem;
        /*background-color: black;*/
        background: url(./assests/back.svg) no-repeat;
        float: left;
    }
</style>