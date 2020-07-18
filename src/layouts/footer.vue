<template>
  <div class="foot-btn" >
    <ul >
      <router-link to="/search" tag="li" active-class="home-active" class="search"><a href="javascript:;"></a></router-link>
      <router-link to="/hottop" tag="li" active-class="write-active" class="list"><a href="javascript:;"></a></router-link>
      <router-link to="/sort" tag="li" active-class="my-active" class="sort"><a href="javascript:;"></a></router-link>
      <!-- <li class="my"><a href="mydoc_m.html"></a></li> -->
    </ul>
  </div>
</template>

<script>
  export default {
    props:{},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .foot-btn{width:100%;height:0.8rem; background:#fff; position:fixed; left:0; bottom:0; border-top:1px solid #9e9a95;}
  .foot-btn ul{width:100%;height: 100%; display: flex; justify-content: space-around;align-items: center}
  .foot-btn ul li{ float:left;}
  .foot-btn ul li a{ display:block; width:100%;height:100%;}
  .foot-btn ul .search{width:0.65rem;height:0.65rem; background:url(../assets/img/search.svg) no-repeat 0 0; background-size:100%;}
  .foot-btn ul .list{width:0.65rem;height:0.65rem; background:url(../assets/img/list.svg) no-repeat 0 0; background-size:100%; }
  .foot-btn ul .sort{width:0.65rem;height:0.65rem; background:url(../assets/img/sort.svg) no-repeat 0 0;background-size:100%;}
  /*.foot-btn ul .search{width:0.44rem;height:0.59rem; background:url(../assets/img/search.svg) no-repeat 0 0; background-size:100%; margin-top:0.1rem;}*/
  /*.foot-btn ul .list{width:0.82rem;height:0.59rem; background:url(../assets/img/list.svg) no-repeat 0 0; background-size:100%; margin-left:1.18rem;}*/
  /*.foot-btn ul .sort{width:0.39rem;height:0.63rem; background:url(../assets/img/sort.svg) no-repeat 0 0;background-size:100%; margin-left:1.18rem; margin-top:0.07rem;}*/
  /* .foot-btn ul .home-active{width:0.44rem;height:0.59rem; background:url(../assets/img/home-active.png) no-repeat 0 0; background-size:100%; margin-top:0.1rem;} */
  /* .foot-btn ul .write-active{width:0.82rem;height:0.81rem; background:url(../assets/img/write-active.png) no-repeat 0 0; background-size:100%; margin-left:1.18rem;} */
  /* .foot-btn ul .my-active{width:0.39rem;height:0.63rem; background:url(../assets/img/my-active.png) no-repeat 0 0;background-size:100%; margin-left:1.18rem; margin-top:0.07rem;} */
  
</style>
