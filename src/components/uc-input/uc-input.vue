<template>
    <div class="uc-input">
        <input type="text" :value="value"
        placeholder="请输入查询内容"
        >
        <input type="button" value="提交" @click="submit">
    </div>
</template>

<script>
    export default {
        name: "uc-input",
        props:{
            value:{
                type:String,
                default:''
            },
            type:{
                type:String,
                default: 'text'
            }
        },
        methods:{
            submit(){
                console.log("111")
            }
        }
    }
</script>

<style scoped>

    .uc-input{height:0.65rem;margin: 0.5rem}
    .uc-input input[type=text]{ padding-left:0.5rem;width:70%;height:100%; font-size:0.4rem;text-align: left;float: left;border:1px solid #e5e7e8;}
    .uc-input input[type=button]{width: 15%;height: 100%;border: 1px solid black;float: right}
</style>