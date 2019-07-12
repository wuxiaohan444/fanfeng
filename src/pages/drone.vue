<template>
    <div id="drone">
        <div class="drone_head" @click="skip">
            <img src="../assets/images/address.png" alt="" class="address">
            <div class="content">
                <h5>大道24号1号机器</h5>
                <p>上海市青浦区新前镇院大道24号</p>
            </div>
            <img src="../assets/images/next.png" alt="" class="right">
        </div>
        <div class="goods_class">
            <div :class="titleIndex===index?'active':''" v-for="(item,index) in titleArr" :key="index"
                 @click="chooseTitle(index)">{{item}}
            </div>
        </div>
        <div class="goods_main">
            <div class="goods_item">
                <img src="../assets/images/bg2.jpg" alt="">
                <h5>椰子水</h5>
                <p><span>800</span>积分</p>
            </div>
            <div class="goods_item">
                <img src="../assets/images/bg2.jpg" alt="">
                <h5>椰子水</h5>
                <p><span>800</span>积分</p>
            </div>
            <div class="goods_item">
                <img src="../assets/images/bg2.jpg" alt="">
                <h5>椰子水</h5>
                <p><span>800</span>积分</p>
            </div>
            <div class="goods_item">
                <img src="../assets/images/bg2.jpg" alt="">
                <h5>椰子水</h5>
                <p><span>800</span>积分</p>
            </div>
            <div class="goods_item">
                <img src="../assets/images/bg2.jpg" alt="">
                <h5>椰子水</h5>
                <p><span>800</span>积分</p>
            </div>
            <div class="goods_item">
                <img src="../assets/images/bg2.jpg" alt="">
                <h5>椰子水</h5>
                <p><span>800</span>积分</p>
            </div>
            <div class="goods_item">
                <img src="../assets/images/bg2.jpg" alt="">
                <h5>椰子水</h5>
                <p><span>800</span>积分</p>
            </div>
            <div class="goods_item">
                <img src="../assets/images/bg2.jpg" alt="">
                <h5>椰子水</h5>
                <p><span>800</span>积分</p>
            </div>
            <div class="goods_item">
                <img src="../assets/images/bg2.jpg" alt="">
                <h5>椰子水</h5>
                <p><span>800</span>积分</p>
            </div>
            <div class="goods_item">
                <img src="../assets/images/bg2.jpg" alt="">
                <h5>椰子水</h5>
                <p><span>800</span>积分</p>
            </div>
        </div>
        <navigationBar></navigationBar>
    </div>
</template>

<script>
    import navigationBar from "../components/navigationBar"

    export default {
        name: "drone",
        components: {
            navigationBar
        },
        data() {
            return {
                titleIndex: 0,
                titleArr: ['全部', '饮料', '食品', '其他']
            }
        },
        methods: {
            chooseTitle(index) {
                this.titleIndex = index;
            },
            skip() {
                this.$router.push({
                    path:'/machineList'
                })
            }
        }
    }
</script>

<style scoped lang="less">
    #drone {
        height: 100%;
        background: #F8F8FA;
    }

    .drone_head {
        height: 150px;
        padding: 0 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: white;
        .address {
            width: 40px;
            height: 53px;
        }
        .content {
            flex: 3;
            margin-left: 20px;
            h5 {
                font-size: 32px;
                font-weight: bold;
                line-height: 60px;
            }
            p {
                font-size: 28px;
                color: rgba(153, 153, 153, 1);
                line-height: 50px;
            }
        }
        .right {
            width: 60px;
        }
    }

    .goods_class {
        height: 88px;
        display: flex;
        background: white;
        margin: 10px 0;
        > div {
            width: 160px;
            color: #999999;
            font-size: 30px;
            text-align: center;
            line-height: 88px;
        }
        > div.active {
            color: #333333;
            font-weight: bold;
            position: relative;
        }
        > div.active:after {
            position: absolute;
            content: '';
            width: 40px;
            height: 6px;
            background: rgba(76, 120, 253, 1);
            border-radius: 3px;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
        }
    }

    .goods_main {
        height: calc(~'100% - 378px');
        overflow: scroll;
        display: flex;
        flex-flow: row wrap;
        align-content: flex-start;
        .goods_item {
            width: 236px;
            height: 260px;
            background: rgba(255, 255, 255, 1);
            border-radius: 8px;
            margin-left: 10px;
            margin-bottom: 10px;
            text-align: center;
            padding: 20px 0;
            box-sizing: border-box;
            img {
                width: 130px;
                height: 130px;
            }
            h5 {
                font-size: 28px;
                line-height: 50px;
            }
            p {
                color: #4C78FD;
                font-size: 24px;
                span {
                    font-size: 28px;
                }
            }
        }
    }
</style>