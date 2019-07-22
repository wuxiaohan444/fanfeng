<template>
    <div id="goodsDetails">
        <!--商品图片-->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in slideList" :key="index">
                    <img :src="item.url" alt="">
                </div>
            </div>
        </div>
        <!--商品信息-->
        <div class="goods_info">
            <h5>抹茶味奶茶</h5>
            <p>销量548</p>
            <div><span>1000</span>积分</div>
        </div>
        <!--商品详情-->
        <div class="goods_details">
            <h5 class="title">商品详情</h5>
            <div v-html="content"></div>
        </div>
        <!--付款信息-->
        <div class="buy_info">
            <div class="integral"><span>12000</span>积分</div>
            <div class="handle">
                <div>加入购物车</div>
                <div>结算</div>
            </div>
        </div>
        <!--购物车-->
        <div class="buy_cart" @click="skipCart">
            <img src="../../assets/images/cart3.png" alt="">
            <div class="number">1</div>
        </div>
    </div>
</template>

<script>
    import Swiper from "swiper"

    export default {
        name: "goodsDetails",
        data() {
            return {
                slideList: [
                    {url: require('../../assets/images/bg1.jpg')},
                    {url: require('../../assets/images/bg2.jpg')},
                ],
                content:'<p>我是p标签</p>'
            }
        },
        mounted() {
            this.initSwiper();
        },
        methods: {
            initSwiper() {
                new Swiper('.swiper-container', {
                    loop: true,
                    observer: true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents: true,//修改swiper的父元素时，自动初始化swiper
                    autoplay: {
                        disableOnInteraction: false,   // 手动滑动后继续自动播放
                    },
                    speed: 500,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }
                })
            },
            skipCart() {

            }
        }
    }
</script>

<style scoped lang="less">
    .swiper-container {
        width: 100%;
        height: 590px;
        img {
            width: 100%;
            height: 590px;
        }
    }

    .goods_info {
        height: 190px;
        padding: 10px 30px;
        box-sizing: border-box;
        h5 {
            font-size: 30px;
        }
        p {
            color: #999999;
            font-size: 24px;
            line-height: 50px;
        }
        div {
            color: #4C78FD;
            font-size: 24px;
            span{
                font-size: 36px;
            }
        }
    }
    /*商品详情*/
    .goods_details{
        .title{
            line-height: 88px;
            font-size: 30px;
            padding-left: 30px;
        }
    }

    /*付款信息*/
    .buy_info {
        width: 690px;
        height: 98px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0 2px 5px 0 rgba(91, 122, 237, 0.2);
        border-radius: 49px;
        position: fixed;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: space-between;
        align-items: center;
        .integral {
            font-size: 26px;
            color: #FF484A;
            padding-left: 30px;
            span {
                font-size: 36px;
                font-weight: 700;
            }
        }
        .handle {
            display: flex;
            width: 400px;
            border-radius: 49px;
            overflow: hidden;
            > div {
                flex: 1;
                color: white;
                line-height: 98px;
                text-align: center;
                font-size: 30px;
            }
            > div:nth-child(1) {
                background: #FDAC4C;
            }
            > div:nth-child(2) {
                background: #5B7AED;
            }
        }
    }

    /*购物车*/
    .buy_cart {
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0 2px 5px 0 rgba(91, 122, 237, 0.2);
        border-radius: 50%;
        position: fixed;
        left: 70px;
        bottom: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 80px;
            height: 70px;
        }
        .number {
            position: absolute;
            height: 30px;
            width: 30px;
            background: rgba(255, 72, 74, 1);
            border-radius: 50%;
            right: 7px;
            top: 10px;
            font-size: 20px;
            color: white;
            text-align: center;

        }
    }
</style>