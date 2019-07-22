import Vue from 'vue';
import Router from 'vue-router';
import index from '@/pages/index'
import my from '@/pages/my'
import order from '@/pages/my/order'
import recharge from '@/pages/my/recharge'
import employ from '@/pages/my/employ'
import cheer from "@/pages/cheer"
import shopping from "@/pages/shopping"
import machineList from "@/pages/shopping/machineList"
import drone from "@/pages/drone"
import merchantDetails from "@/pages/shopping/merchantDetails"
import goodsDetails from "@/pages/shopping/goodsDetails"
import cart from "@/pages/cart"


Vue.use(Router);
export default new Router({
    base: '/',
    // mode: 'history',
    routes:[
        {
            path:'/',
            name:'index',
            component:index
        },{
            path:'/my',
            name:'my',
            component:my
        },{
            path:'/cheer',
            name:'cheer',
            component:cheer
        },{
            path:'/shopping',
            name:'shopping',
            component:shopping
        },{
            path:'/cart',
            name:'cart',
            component:cart
        },{
            path:'/merchantDetails',
            name:'merchantDetails',
            component:merchantDetails
        },{
            path:'/order',
            name:'order',
            component:order
        },{
            path:'/recharge',
            name:'recharge',
            component:recharge
        },{
            path:'/employ',
            name:'employ',
            component:employ
        },{
            path:'/drone',
            name:'drone',
            component:drone
        },{
            path:'/machineList',
            name:'machineList',
            component:machineList
        },{
            path:'/goodsDetails',
            name:'goodsDetails',
            component:goodsDetails
        }
    ]
})