<template>
    <div id="index">
        <!--地址-->
        <div class="address">
            <img src="../assets/images/address.png" alt="">
            <span>{{address}}</span>
        </div>
        <!--轮播-->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in slideList" :key="index">
                    <img :src="item.url" alt="">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
        <div class="headline">一键加油</div>
        <div class="gasoline">
            <div class="gasoline_item">
                <span>92</span>油
            </div>
            <div class="gasoline_item">
                <span>95</span>油
            </div>
            <div class="gasoline_item">
                <span>97</span>油
            </div>
            <div class="gasoline_item">
                <span>柴油</span>
            </div>
        </div>
        <!--积分自助兑换-->
        <div class="ad">
            <img src="" alt="">
        </div>
        <!--积分商城分类-->
        <div class="big_box">
            <div class="headline">积分商城分类</div>
            <div class="shopping-class">
                <div class="shopping-class_item" v-for="(item,index) in classList" :key="index">
                    <p>{{item.name}}</p>
                    <img :src="item.img" alt="">
                </div>
            </div>
            <div class="headline">附近商户</div>
        </div>
        <div class="tenant_main">
            <div class="tenant_main_item">
                <div class="item_left">
                    <img src="" alt="">
                </div>
                <div class="item_right">
                    <h5>佳丽美容店</h5>
                    <div class="tenant_class">
                        <div>
                            <div class="normal">营</div>
                            <span>美容、美发、护肤</span>
                        </div>
                        <span>914m</span>
                    </div>
                    <div class="site">
                        <img src="../assets/images/address.png" alt="">
                        <span>上海市青浦区新前镇院大道24号</span>
                    </div>
                </div>

            </div>
            <div class="tenant_main_item">
                <div class="item_left">
                    <img src="" alt="">
                </div>
                <div class="item_right">
                    <h5>佳丽美容店</h5>
                    <div class="tenant_class">
                        <div>
                            <div class="normal">营</div>
                            <span>美容、美发、护肤</span>
                        </div>
                        <span>914m</span>
                    </div>
                    <div class="site">
                        <img src="../assets/images/address.png" alt="">
                        <span>上海市青浦区新前镇院大道24号</span>
                    </div>
                </div>

            </div>
        </div>
        <navigationBar></navigationBar>
    </div>
</template>

<script>
    import Swiper from "swiper"
    import {MP} from "../assets/map/map";
    import navigationBar from "../components/navigationBar"

    export default {
        name: "index",
        data() {
            return {
                slideList: [
                    {url: require('../assets/images/bg1.jpg')},
                    {url: require('../assets/images/bg2.jpg')},
                ],
                classList: [
                    {
                        img: require("../assets/images/catering.png"),
                        name: '餐饮'
                    }, {
                        img: require("../assets/images/hardware.png"),
                        name: '五金'
                    }, {
                        img: require("../assets/images/car.png"),
                        name: '汽车美容'
                    }, {
                        img: require("../assets/images/fresh.png"),
                        name: '生鲜超市'
                    }, {
                        img: require("../assets/images/fruit.png"),
                        name: '水果'
                    }, {
                        img: require("../assets/images/bread.png"),
                        name: '面包房'
                    }, {
                        img: require("../assets/images/machine.png"),
                        name: '售货机'
                    }, {
                        img: require("../assets/images/gym.png"),
                        name: '健身房'
                    }
                ],
                address: '',
                lat: '',//纬度
                lng: '',//经度
            }
        },
        components: {
            navigationBar
        },
        mounted() {
            this.initSwiper();
            this.createMap();
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
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }
                })
            },
            createMap() {
                if (!sessionStorage.getItem("map")) {
                    MP("4IU3oIAMpZhfWZsMu7xzqBBAf6vMHcoa").then(BMap => {
                        // 创建Map实例
                        let geolocation = new BMap.Geolocation();
                        let that = this;
                        geolocation.getCurrentPosition(function (r) {
                            if (this.getStatus() === BMAP_STATUS_SUCCESS) {
                                //以指定的经度与纬度创建一个坐标点
                                let pt = new BMap.Point(r.point.lng, r.point.lat);
                                //创建一个地理位置解析器
                                let geoc = new BMap.Geocoder();
                                geoc.getLocation(pt, function (rs) {//解析格式：城市，区县，街道
                                    that.address = rs.address;
                                    that.lat = rs.point.lat;
                                    that.lng = rs.point.lng;
                                    sessionStorage.setItem("map", rs.address);
                                    sessionStorage.setItem("lat", that.lat);
                                    sessionStorage.setItem("lng", that.lng);
                                });
                            }
                            else {
                                $(ev.currentTarget).text('定位失败');
                            }
                        }, {enableHighAccuracy: true})//指示浏览器获取高精度的位置，默认false
                    })
                } else {
                    this.address = sessionStorage.getItem("map");
                    this.lat = sessionStorage.getItem("lat");
                    this.lng = sessionStorage.getItem("lng");
                }
            },
            // 查看附件商家
            getNearby() {
                this.$axios({
                    method: 'get',
                    url: '/inspector/index/nearby',
                    params: {
                        latitude: this.lat,
                        longitude: this.lng,
                        login_address: this.address
                    }
                }).then((res) => {
                    if (res.data.code === 0) {

                    } else {
                        alert(res.data.data);
                    }
                })
            }
        },
        destroyed() {
            this.createMap = null
        }
    }
</script>

<style scoped lang="less">
    @import "../../node_modules/swiper/dist/css/swiper.css";

    #index {
        padding-bottom: 100px;
        min-height: 100%;
        background: white;
    }

    .address {
        font-size: 28px;
        height: 88px;
        display: flex;
        align-items: center;
        padding: 0 30px;
        img {
            width: 36px;
            margin-right: 10px;
        }
    }

    .swiper-container {
        width: 100%;
        height: 300px;
        img {
            width: 100%;
            height: 300px;
        }
    }

    .headline {
        height: 100px;
        font-size: 30px;
        font-weight: bold;
        line-height: 100px;
        padding: 0 30px;
        box-sizing: border-box;
    }

    /*一键加油*/
    .gasoline {
        display: flex;
        height: 120px;
        padding: 0 20px;
        box-sizing: border-box;
        .gasoline_item {
            background: #5B7AED;
            background-image: url("../assets/images/oil.png");
            background-size: 88px 39px;
            background-position: right bottom;
            background-repeat: no-repeat;
            flex: 1;
            margin: 0 10px;
            border-radius: 6px;
            font-size: 30px;
            color: white;
            text-align: center;
            line-height: 120px;
            span {
                font-size: 48px;
                font-weight: bold;
            }
        }
    }

    /*积分自助兑换*/
    .ad {
        width: 100%;
        height: 180px;
        margin-top: 30px;
        img {
            width: 100%;
            height: 100%;
        }
    }

    /*积分商城分类*/
    .big_box {
        width: 100%;
        height: 653px;
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.99), rgba(248, 248, 250, 0.99), rgba(255, 255, 255, 0.99));
        .shopping-class {
            padding: 0 16px;
            box-sizing: border-box;
            display: flex;
            flex-flow: row wrap;
            align-content: flex-start;
            .shopping-class_item {
                background: white;
                height: 210px;
                width: 162px;
                border-radius: 10px;
                text-align: center;
                padding: 20px 0;
                box-sizing: border-box;
                margin-left: 14px;
                margin-bottom: 14px;
                p {
                    font-size: 28px;
                }
                img {
                    margin-top: 10px;
                    width: 114px;
                }
            }
        }
    }


</style>