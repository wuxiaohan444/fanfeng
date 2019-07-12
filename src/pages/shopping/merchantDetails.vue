<template>
    <div id="merchantDetails">
        <div class="merchant_head" ref="merchantHead">
            <div>
                <img src="../../assets/images/bg2.jpg" alt="">
            </div>
        </div>
        <div class="merchant_name" ref="merchantName">豆花鱼川菜馆</div>
        <div class="merchant_title" ref="merchantTitle">
            <div :class="titleIndex===0?'active':''" @click="chooseTitle(0)">点单</div>
            <div :class="titleIndex===1?'active':''" @click="chooseTitle(1)">商家</div>
        </div>
        <!--商品信息-->
        <div class="goods_info" v-if="titleIndex===0">
            <div class="info_left">
                <div :class="floorIndex===index?'active':''" v-for="(item,index) in floorList" :key="index"
                     @click="skip(index)"><span>{{item}}</span></div>
                <div class="stealth_height"></div>
                <div class="stealth_height"></div>
            </div>
            <div class="info_right" @scroll="orderScroll" ref="Box">
                <div class="info_right_item" v-for="(item,index) in goodsList" :key="index" :id="index"
                     :ref="item.floor">
                    <div class="info_right_item_goods" v-for="(goods,index) in item.goodsList" :key="index">
                        <div class="goods_img">
                            <img :src="goods.img" alt="">
                        </div>
                        <div class="goods_detail">
                            <h5>{{goods.name}}</h5>
                            <p>{{goods.material}}</p>
                            <div class="goods_ino_handle">
                                <h5 class="goods_ino_handle_left"><span>{{goods.price}}</span>积分</h5>
                                <div class="goods_ino_handle_right">
                                    <img src="../../assets/images/minus.png" alt="">
                                    <div>1</div>
                                    <img src="../../assets/images/plus.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="stealth_height"></div>
            </div>
        </div>
        <!--商家信息-->
        <div class="merchant_info" v-if="titleIndex===1">
            <div class="merchant_hit">商家信息</div>
            <div class="wh_merchant_img">
                <div class="scroll_ul" :style="{width:ulWidth+'px'}">
                    <img src="../../assets/images/bg2.jpg" alt="">
                    <img src="../../assets/images/bg2.jpg" alt="">
                    <img src="../../assets/images/bg2.jpg" alt="">
                    <img src="../../assets/images/bg2.jpg" alt="">
                </div>
            </div>
            <div class="merchant_info_main">
                <div class="merchant_info_main_item">
                    <div>商家名称</div>
                    <div>豆花鱼川菜馆</div>
                </div>
                <div class="merchant_info_main_item">
                    <div>商家品类</div>
                    <div>餐饮</div>
                </div>
                <div class="merchant_info_main_item">
                    <div>商家地址</div>
                    <div>上海市徐汇区宜山路439号</div>
                </div>
                <div class="merchant_info_main_item">
                    <div>商家电话</div>
                    <a href="tel:0147-88469258">18202113758</a>
                </div>
                <div class="merchant_info_main_item">
                    <div>营业时间</div>
                    <div>09:00-22:00</div>
                </div>
            </div>
        </div>
        <!--付款信息-->
        <div class="buy_info" v-if="titleIndex===0">
            <div class="integral"><span>12000</span>积分</div>
            <div class="handle">
                <div>加入购物车</div>
                <div>结算</div>
            </div>
        </div>
        <!--购物车-->
        <div class="buy_cart" v-if="titleIndex===0" @click="skipCart">
            <img src="../../assets/images/cart3.png" alt="">
            <div class="number">1</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "merchantDetails",
        data() {
            return {
                titleIndex: 0,
                floorList: '',//左边列表
                floorIndex: 0,
                goodsList: '',//右边商品
                ulWidth: '',
                heightArr: []
            }
        },
        created() {
            this.getGoodsInfo();
            this.getMerchantInfo();
        },
        mounted() {
            for (let i = 0; i < this.goodsList.length; i++) {
                this.heightArr.push(this.$refs[this.goodsList[i].floor][0].offsetTop - (this.$refs.merchantHead.offsetHeight + this.$refs.merchantName.offsetHeight + this.$refs.merchantTitle.offsetHeight))
            }
        },
        methods: {
            chooseTitle(index) {
                this.titleIndex = index;
            },
            getGoodsInfo() {
                this.goodsList = [
                    {
                        floor: '特点豪华套餐',
                        goodsList: [
                            {
                                name: '鲜虾鱼丸什锦石锅',
                                material: '鲜虾、鱼丸、玉米、花椰菜',
                                img: require('../../assets/images/bg2.jpg'),
                                price: '12000'
                            }, {
                                name: '鲜虾鱼丸什锦石锅',
                                material: '鲜虾、鱼丸、玉米、花椰菜',
                                img: require('../../assets/images/bg2.jpg'),
                                price: '12000'
                            }, {
                                name: '鲜虾鱼丸什锦石锅',
                                material: '鲜虾、鱼丸、玉米、花椰菜',
                                img: require('../../assets/images/bg2.jpg'),
                                price: '12000'
                            }
                        ]
                    }, {
                        floor: '川香水煮',
                        goodsList: [
                            {
                                name: '十秒黑鱼片',
                                material: '鲜虾、鱼丸、玉米、花椰菜',
                                img: require('../../assets/images/bg2.jpg'),
                                price: '12000'
                            },
                            {
                                name: '十秒黑鱼片',
                                material: '鲜虾、鱼丸、玉米、花椰菜',
                                img: require('../../assets/images/bg2.jpg'),
                                price: '12000'
                            }, {
                                name: '十秒黑鱼片',
                                material: '鲜虾、鱼丸、玉米、花椰菜',
                                img: require('../../assets/images/bg2.jpg'),
                                price: '12000'
                            },
                            {
                                name: '十秒黑鱼片',
                                material: '鲜虾、鱼丸、玉米、花椰菜',
                                img: require('../../assets/images/bg2.jpg'),
                                price: '12000'
                            }
                        ]
                    }, {
                        floor: '精品干锅',
                        goodsList: [
                            {
                                name: '鲍鱼汁捞饭',
                                material: '鲜虾、鱼丸、玉米、花椰菜',
                                img: require('../../assets/images/bg2.jpg'),
                                price: '12000'
                            },
                            {
                                name: '鲍鱼汁捞饭',
                                material: '鲜虾、鱼丸、玉米、花椰菜',
                                img: require('../../assets/images/bg2.jpg'),
                                price: '12000'
                            }
                        ]
                    }, {
                        floor: '精致小炒',
                        goodsList: [
                            {
                                name: '象拔蚌',
                                material: '鲜虾、鱼丸、玉米、花椰菜',
                                img: require('../../assets/images/bg2.jpg'),
                                price: '12000'
                            },
                            {
                                name: '象拔蚌',
                                material: '鲜虾、鱼丸、玉米、花椰菜',
                                img: require('../../assets/images/bg2.jpg'),
                                price: '12000'
                            },
                            {
                                name: '象拔蚌',
                                material: '鲜虾、鱼丸、玉米、花椰菜',
                                img: require('../../assets/images/bg2.jpg'),
                                price: '12000'
                            },
                            {
                                name: '象拔蚌',
                                material: '鲜虾、鱼丸、玉米、花椰菜',
                                img: require('../../assets/images/bg2.jpg'),
                                price: '12000'
                            }
                        ]
                    }, {
                        floor: '煲仔菜',
                        goodsList: [
                            {
                                name: '荔蒲芋头',
                                material: '鲜虾、鱼丸、玉米、花椰菜',
                                img: require('../../assets/images/bg2.jpg'),
                                price: '12000'
                            },
                            {
                                name: '荔蒲芋头',
                                material: '鲜虾、鱼丸、玉米、花椰菜',
                                img: require('../../assets/images/bg2.jpg'),
                                price: '12000'
                            },
                            {
                                name: '荔蒲芋头',
                                material: '鲜虾、鱼丸、玉米、花椰菜',
                                img: require('../../assets/images/bg2.jpg'),
                                price: '12000'
                            },
                            {
                                name: '荔蒲芋头',
                                material: '鲜虾、鱼丸、玉米、花椰菜',
                                img: require('../../assets/images/bg2.jpg'),
                                price: '12000'
                            }
                        ]
                    }
                ];
                this.floorList = this.goodsList.map((num) => num.floor);

            },
            getMerchantInfo() {
                this.ulWidth = 102 * 4
            },
            skip(index) {
                this.floorIndex = index;
                document.getElementById(index).scrollIntoView();
            },
            orderScroll() {
                let a = this.$refs.Box.scrollHeight;
                let b = this.$refs.Box.clientHeight;
                let c = this.$refs.Box.scrollTop;
                for (let i = 0; i < this.heightArr.length; i++) {
                    if (c >= this.heightArr[i]) {
                        this.floorIndex = i;
                    }
                }
                if (c + b === a) {
                    this.floorIndex = this.floorList.length - 1;
                }
            },
            skipCart(){
                this.$router.push({
                    path:'/cart'
                })
            }
        }
    }
</script>

<style scoped lang="less">
    #merchantDetails {
        height: 100%;
    }
    .merchant_head {
        height: 132px;
        background: #3C4DAF;
        text-align: center;
        position: relative;
        div {
            width: 140px;
            height: 140px;
            background: rgba(255, 255, 255, 1);
            border-radius: 8px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%) translateY(30px);
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                width: 105px;
                height: 111px;
            }
        }
    }

    .merchant_name {
        padding-top: 30px;
        text-align: center;
        font-size: 36px;
        font-weight: bold;
    }

    .merchant_title {
        padding: 0 30px;
        height: 88px;
        display: flex;
        box-shadow: 0 1px 0 0 rgba(204, 204, 204, 0.35);
        > div {
            flex: 1;
            text-align: center;
            font-size: 30px;
            color: #999999;
            line-height: 88px;
        }
        > div.active {
            color: #333333;
            position: relative;
        }
        > div.active:after {
            content: '';
            position: absolute;
            width: 38px;
            height: 6px;
            background: rgba(91, 122, 237, 1);
            left: 50%;
            transform: translateX(-50%);
            bottom: 0;
        }
    }

    /*商品信息*/
    .goods_info {
        height: calc(~'100% - 300px');
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        .info_left {
            width: 220px;
            background: #F8F8FA;
            height: 100%;
            overflow: scroll;
            > div {
                width: 100%;
                height: 120px;
                font-size: 30px;
                position: relative;
                text-align: center;
                span {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translateX(-50%) translateY(-50%);
                    width: 120px;
                }
            }
            > div.active {
                background: white;
            }
            > div.active:after {
                content: '';
                position: absolute;
                width: 6px;
                height: 120px;
                background: rgba(76, 120, 253, 1);
                left: 0;
                top: 0;
            }
        }
        .info_right {
            flex: 4;
            margin-left: 20px;
            height: 100%;
            overflow: scroll;
            .info_right_item {
                .info_right_item_goods {
                    width: 100%;
                    height: 190px;
                    display: flex;
                    align-items: center;
                    .goods_img {
                        flex: 1;
                        img {
                            width: 150px;
                            height: 150px;
                            border-radius: 8px;
                        }
                    }
                    .goods_detail {
                        flex: 3;
                        margin-left: 20px;
                        height: 100%;
                        padding: 30px 0;
                        box-sizing: border-box;
                        box-shadow: 0 1px 0 0 rgba(204, 204, 204, 0.35);
                        h5 {
                            font-size: 32px;
                            font-weight: bold;
                        }
                        p {
                            font-size: 26px;
                            color: rgba(153, 153, 153, 1);
                            line-height: 50px;
                        }
                        .goods_ino_handle {
                            display: flex;
                            justify-content: space-between;
                            padding-right: 20px;
                            h5 {
                                color: rgba(255, 72, 74, 1);
                                font-weight: 100;
                                font-size: 26px;
                                span {
                                    font-size: 32px;
                                    font-weight: bold;
                                }
                            }
                            .goods_ino_handle_right {
                                display: flex;
                                div {
                                    width: 50px;
                                    text-align: center;
                                    font-size: 28px;
                                    line-height: 50px;
                                }
                                img {
                                    width: 50px;
                                    height: 50px;
                                }
                            }
                        }
                    }
                }

            }

        }
        .stealth_height {
            height: 100px;
        }
    }

    /*商家信息*/
    .merchant_info {
        background: #F8F8FA;
        border-top: 20px solid #F8F8FA;
        height: calc(~'100% - 320px');
        .merchant_hit {
            font-size: 30px;
            font-weight: bold;
            padding-left: 30px;
            line-height: 88px;
            background: white;
        }
        .wh_merchant_img {
            height: 102px;
            width: 100%;
            overflow: scroll;
            background: white;
            padding-left: 15px;
            box-sizing: border-box;
            .scroll_ul {
                height: 92px;
                img {
                    width: 92px;
                    height: 92px;
                    border-radius: 2px;
                    margin-right: 10px;
                }
            }
        }
        .merchant_info_main {
            padding: 0 30px;
            box-sizing: border-box;
            margin-top: 20px;
            background: white;
            width: 100%;
            .merchant_info_main_item {
                height: 88px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                box-shadow: 0 1px 0 0 rgba(204, 204, 204, 0.35);
                > div:nth-child(1) {
                    font-size: 30px;
                }
                > div:nth-child(2) {
                    font-size: 28px;
                    color: rgba(153, 153, 153, 1);
                }
                a {
                    font-size: 28px;
                    color: rgba(153, 153, 153, 1);
                }
            }
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
    .buy_cart{
        width:80px;
        height:80px;
        background:rgba(255,255,255,1);
        box-shadow:0 2px 5px 0 rgba(91,122,237,0.2);
        border-radius:50%;
        position: fixed;
        left: 70px;
        bottom: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width:80px;
            height:70px;
        }
        .number{
            position: absolute;
            height:30px;
            width: 30px;
            background:rgba(255,72,74,1);
            border-radius:50%;
            right: 7px;
            top: 10px;
            font-size: 20px;
            color: white;
            text-align: center;

        }
    }
</style>