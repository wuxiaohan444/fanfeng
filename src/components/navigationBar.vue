<template>
    <div id="navigationBar">
        <div class="navigationBar-foot">
            <router-link to="/">
                <img :src="img1" alt="">
                <p :class="pathIndex===1?'active':''">首页</p>
            </router-link>
            <router-link to="/cheer">
                <img :src="img2" alt="">
                <p :class="pathIndex===2?'active':''">一键加油</p>
            </router-link>
            <router-link to="/shopping">
                <img :src="img3" alt="">
                <p :class="pathIndex===3?'active':''">积分商城</p>
            </router-link>
            <router-link to="/cart">
                <img :src="img4" alt="">
                <p :class="pathIndex===4?'active':''">购物车</p>
            </router-link>
            <router-link to="/my">
                <img :src="img5" alt="">
                <p :class="pathIndex===5?'active':''">我的</p>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "navigationBar",
        data() {
            return {
                path: '',
                img1: require('../assets/images/index2.png'),
                img2: require("../assets/images/cheer2.png"),
                img3: require("../assets/images/integral2.png"),
                img4:require("../assets/images/cart2.png"),
                img5:require("../assets/images/my2.png"),
                pathIndex: ''
            };
        },
        created() {
            this.path = this.$route.path;
            switch (this.path) {
                case '/':
                    this.img1 = require('../assets/images/index1.png');
                    this.pathIndex = 1;
                    break;
                case '/cheer':
                    this.img2 = require('../assets/images/cheer1.png');
                    this.pathIndex = 2;
                    break;
                case '/drone':
                    this.img3 = require('../assets/images/integral1.png');
                    this.pathIndex = 3;
                    break;
                case '/shopping':
                    this.img3 = require('../assets/images/integral1.png');
                    this.pathIndex = 3;
                    break;
                case '/cart':
                    this.img4 = require('../assets/images/cart1.png');
                    this.pathIndex = 4;
                    break;
                case '/my':
                    this.img5 = require('../assets/images/my1.png');
                    this.pathIndex = 5;
            }
        }
    }
</script>

<style scoped lang="less">
    .navigationBar-foot {
        height: 100px;
        width: 100%;
        position: fixed;
        bottom: 0;
        box-shadow:0px -2px 0px 0px rgba(153,153,153,0.3);
        display: flex;
        align-items: center;
        background: white;
        a {
            flex: 1;
            text-align: center;
            color: #6A6A6A;
            height: 90px;
            img {
                width: 50px;
            }
            p {
                font-size: 20px;
            }
            .active {
                color: #5B7AED;
            }
        }
    }
</style>