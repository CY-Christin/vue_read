<template>
        <div class="blocks">
<!--            <p :id="info" :data="data">{{info}}</p>-->
            <div
            v-for="(item,index) of data"
            :key="item._id"
            @click="toTopDetail(item)"
            >
                <p><img :src="'http://statics.zhuishushenqi.com'+item.cover" alt=""> {{item.title}}</p>
            </div>
        </div>

</template>

<script>

    export default {
        name: "block",
        props:{
            data: {
                type: Array,
                required: false,
            },
        },
        methods:{
            toTopDetail(item){
                this.$router.push({name:"/topdetail",params:{id:item._id}})
                // console.log(item._id)
            }
        }

    }
</script>

<style scoped>
.blocks p{
    display: block;
    width: 100%;
    padding: 0.2rem 0.4rem;
    background-color: #9e9a95;
    margin: 0.2rem 0;
    vertical-align: middle;
}
.blocks img{
    height: 0.3rem;
}
</style>