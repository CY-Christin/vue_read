import Vue from 'vue';
import VueRouter from 'vue-router';
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter);

import List from "../pages/list"
import Error from '../pages/error'
import Search from "../pages/search";
import HotTop from "../pages/hottop"
import Detail from "../pages/detail";
import SearchResult from "../pages/search-result"
import TopDetail from "../pages/top-detail"
import Sort from "../pages/sort"
import SortDetail from "../pages/sort-detail"
let routes=[
    {name: "/detail",path:'/detail/:_id',component: Detail},
    {path: "/hottop",component: HotTop},
    {path: "/search",component: Search},
    {path: "/list",component: List},
    {path:"/sort",component: Sort},
    {name:"/sortdetail",path:"/sortdetail/:key",component: SortDetail},
    {name: "/searchresult",path:'/searchresult/:keyword',component: SearchResult},
    {name:"/topdetail",path:"/topdetail/:id",component: TopDetail},
    {path: "/",component: Search},
    {path: "*",component: Error},

];

let router = new VueRouter({
    routes,
    mode:'hash'
});

export default router;