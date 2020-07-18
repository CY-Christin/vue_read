<template>
    <div class="uc-cell">
        <div  :data="datas" @click="toDetail(datas)">
            <p id="otherReadRatio" v-if="otherReadRatio">有{{otherReadRatio}}%的人也喜欢这本书</p>
            <img  :src="'http://statics.zhuishushenqi.com'+datas.cover" alt="">
                <p id="title">书名：{{ title }}</p>
                <p id="majorCate minorCate">分类：{{minorCate}} {{majorCate}}</p>
                <p id="author">作者：{{author}}</p>
                <p id="follower">关注：{{follower}}</p>
                <p id="ratio" v-if="ratio">留存率：{{ratio}}</p>
                <p id="sintro">简介：{{sintro}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "uc-cell",
    methods: {
        toDetail(item) {
            this.$router.push({name:"/detail",params:{_id:item._id}})
        },
    },
    props: {
        datas: {
            type: Object,
            required: false,
        },
        title: {
            type: String,
            required: true,
        },
        minorCate: {
            type: String,
            required: true,
        },
        majorCate:{
            type: String,
            required: false,
        },
        author: {
            type: String,
            required: true,
        },
        follower: {
            type: Number,
            required: true,
        },
        ratio: {
            type: String | Number,
            required: false,
        },
        sintro: {
            type: String,
            required: true,
        },
        otherReadRatio:{
            type: String | Number,
            required: false,
        }
    },
    computed:{
        imged(){
            let url =this.datas.cover.split("/")[2]
            return  decodeURIComponent(url)
        }
    }
};
</script>

<style scoped>
.uc-cell {
    position: relative;
    color: #494d4d;
    width: 6.4rem;
    margin: 0 auto;
    clear: both;
    padding: 0.2rem ;
    border-bottom: 1px dashed #ccc;
}
.uc-cell:active {
    background: #ccc;
}
.uc-cell h2 {
    max-height: 0.9rem;
    font-size: 0.33rem;
    overflow: hidden;
}
.uc-cell p {
    max-height: 2rem;
    /*margin-top: 0.05rem;*/
    overflow: auto;
    line-height: 16px;
}
.uc-cell > a {
    position: absolute;
    right: 1rem;
    top: 50%;
    width: 20px;
    height: 20px;
    color: #fff;
    font-weight: bold;
    margin-top: -5px;
    border-radius: 50%;
    background-color: #494d4d;
    text-align: center;
}
.uc-cell p{
    /*height: 0.2rem;*/
    color: black;
}
.uc-cell img{
    width: 1rem;
    float: left;
}
    .uc-cell #sintro{
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

</style>
