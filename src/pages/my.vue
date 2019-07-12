<template>
    <div id="my">
        <div class="my_head">
            <div class="my_head_box">
                <div class="box_top">
                    <img src="" alt="">
                    <span>18945678021</span>
                </div>
                <div class="box_bottom">
                    <div>
                        <p>总积分</p>
                        <div>36400</div>
                    </div>
                    <div>
                        <p>剩余积分</p>
                        <div>36400</div>
                    </div>
                    <div>
                        <p>账户余额</p>
                        <div>36400</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="my_main">
            <router-link class="my_main_item" to="/order">
                <div class="item_left">
                    <img src="../assets/images/list5.png" alt="">
                    <span>订单管理</span>
                </div>
                <img src="../assets/images/next.png" alt="">
            </router-link>
            <router-link class="my_main_item" to="/recharge">
                <div class="item_left">
                    <img src="../assets/images/list4.jpg" alt="">
                    <span>充值管理</span>
                </div>
                <img src="../assets/images/next.png" alt="">
            </router-link>
            <router-link class="my_main_item" to="/employ">
                <div class="item_left">
                    <img src="../assets/images/list1.jpg" alt="">
                    <span>积分使用记录</span>
                </div>
                <img src="../assets/images/next.png" alt="">
            </router-link>
            <div class="my_main_item">
                <div class="item_left">
                    <img src="../assets/images/list3.jpg" alt="">
                    <span>联系客服</span>
                </div>
                <img src="../assets/images/next.png" alt="">
            </div>
            <div class="my_main_item">
                <div class="item_left">
                    <img src="../assets/images/list2.jpg" alt="">
                    <span>我要反馈</span>
                </div>
                <img src="../assets/images/next.png" alt="">
            </div>
        </div>
        <navigationBar></navigationBar>
    </div>
</template>

<script>
    import navigationBar from "../components/navigationBar"

    export default {
        name: "my",
        components: {
            navigationBar
        }
    }
</script>

<style scoped lang="less">
    #my {
        background: #F8F8FA;
        min-height: 100%;
    }

    .my_head {
        height: 140px;
        background: #5B7AED;
        position: relative;
        .my_head_box {
            width: 690px;
            height: 350px;
            background: white;
            border-radius: 20px;
            position: absolute;
            top: 42px;
            left: 50%;
            transform: translateX(-50%);
            padding: 40px;
            box-sizing: border-box;
            .box_top {
                display: flex;
                align-items: center;
                font-size: 30px;
                color: rgba(51, 51, 51, 1);
                img {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                }
            }
            .box_bottom {
                margin-top: 40px;
                display: flex;
                height: 100px;
                > div {
                    flex: 1;
                    text-align: center;
                    p {
                        font-size: 28px;
                        color: rgba(153, 153, 153, 1);
                    }
                    div {
                        font-size: 36px;
                        font-weight: bold;
                        color: rgba(51, 51, 51, 1);
                        line-height: 70px;
                    }
                }
                > div:nth-child(1), > div:nth-child(2) {
                    box-shadow: 2px 0 0 0 rgba(121, 121, 122, 0.17);
                }
            }
        }
    }

    .my_main {
        margin-top: 350px;
        background: white;
        padding: 0 30px;
        box-sizing: border-box;
        .my_main_item {
            display: flex;
            height: 88px;
            align-items: center;
            justify-content: space-between;
            box-shadow:0px 2px 0px 0px rgba(153,153,153,0.3);
            .item_left {
                display: flex;
                align-items: center;
                font-size: 30px;
                img {
                    width: 50px;
                    margin-right: 10px;
                }
            }
            >img{
                width: 60px;
            }
        }
        .my_main_item:last-child{
            box-shadow:0 0 0 0 rgba(153,153,153,0.3);
        }
    }
</style>