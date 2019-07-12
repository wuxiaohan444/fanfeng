<template>
    <div id="cart">
        <div class="cart_main">
            <div class="goods_main_item">
                <div class="merchant_name">
                    <img src="../assets/images/shopping.png" alt="" class="shop_icon">
                    <span>豆花鱼川菜馆</span>
                    <img src="../assets/images/next.png" alt="" class="next">
                </div>
                <div class="merchant_item">
                    <div class="goods_choose">
                        <img src="../assets/images/unselected.png" alt="">
                    </div>
                    <div class="goods_img">
                        <img src="../assets/images/bg1.jpg" alt="">
                    </div>
                    <div class="goods_info">
                        <h5 class="goods_info_name">鲜虾鱼丸什锦石锅</h5>
                        <p>鲜虾、鱼丸、玉米、花椰菜</p>
                        <div class="goods_ino_handle">
                            <h5 class="goods_ino_handle_left"><span>12000</span>积分</h5>
                            <div class="goods_ino_handle_right">
                                <img src="../assets/images/minus.png" alt="">
                                <div>1</div>
                                <img src="../assets/images/plus.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="merchant_item">
                    <div class="goods_choose">
                        <img src="../assets/images/unselected.png" alt="">
                    </div>
                    <div class="goods_img">
                        <img src="../assets/images/bg1.jpg" alt="">
                    </div>
                    <div class="goods_info">
                        <h5 class="goods_info_name">鲜虾鱼丸什锦石锅</h5>
                        <p>鲜虾、鱼丸、玉米、花椰菜</p>
                        <div class="goods_ino_handle">
                            <h5 class="goods_ino_handle_left"><span>12000</span>积分</h5>
                            <div class="goods_ino_handle_right">
                                <img src="../assets/images/minus.png" alt="">
                                <div>1</div>
                                <img src="../assets/images/plus.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="goods_main_item">
                <div class="merchant_name">
                    <img src="../assets/images/shopping.png" alt="" class="shop_icon">
                    <span>豆花鱼川菜馆</span>
                    <img src="../assets/images/next.png" alt="" class="next">
                </div>
                <div class="merchant_item">
                    <div class="goods_choose">
                        <img src="../assets/images/unselected.png" alt="">
                    </div>
                    <div class="goods_img">
                        <img src="../assets/images/bg1.jpg" alt="">
                    </div>
                    <div class="goods_info">
                        <h5 class="goods_info_name">鲜虾鱼丸什锦石锅</h5>
                        <p>鲜虾、鱼丸、玉米、花椰菜</p>
                        <div class="goods_ino_handle">
                            <h5 class="goods_ino_handle_left"><span>12000</span>积分</h5>
                            <div class="goods_ino_handle_right">
                                <img src="../assets/images/minus.png" alt="">
                                <div>1</div>
                                <img src="../assets/images/plus.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="merchant_item">
                    <div class="goods_choose">
                        <img src="../assets/images/unselected.png" alt="">
                    </div>
                    <div class="goods_img">
                        <img src="../assets/images/bg1.jpg" alt="">
                    </div>
                    <div class="goods_info">
                        <h5 class="goods_info_name">鲜虾鱼丸什锦石锅</h5>
                        <p>鲜虾、鱼丸、玉米、花椰菜</p>
                        <div class="goods_ino_handle">
                            <h5 class="goods_ino_handle_left"><span>12000</span>积分</h5>
                            <div class="goods_ino_handle_right">
                                <img src="../assets/images/minus.png" alt="">
                                <div>1</div>
                                <img src="../assets/images/plus.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="handle">
            <div class="handle_left">
                <div class="left_item">
                    <img src="../assets/images/unselected.png" alt="">
                    <p>全选</p>
                </div>
                <div class="left_item" @click="edit">
                    <img src="../assets/images/edit.png" alt="">
                    <p>编辑</p>
                </div>
            </div>
            <div class="handle_right" v-if="editStatus===0">
                <h5>合计:</h5>
                <p><span>12000</span>积分</p>
                <div class="btn">结算</div>
            </div>
            <div class="handle_edit" v-if="editStatus===1">
                <div class="del">删除</div>
                <div class="complete" @click="complete">完成</div>
            </div>
        </div>
        <navigationBar></navigationBar>
    </div>
</template>

<script>
    import navigationBar from "../components/navigationBar"

    export default {
        name: "cart",
        components: {
            navigationBar
        },
        data() {
            return {
                editStatus: 0
            }
        },
        methods: {
            edit() {
                this.editStatus = 1;
            },
            complete() {
                this.editStatus = 0;
            }
        }
    }
</script>

<style scoped lang="less">
    #cart {
        background: #F8F8FA;
        min-height: 100%;
    }

    .cart_main {
        .goods_main_item {
            padding: 0 30px;
            margin-bottom: 20px;
            background: white;
            .merchant_name {
                display: flex;
                height: 88px;
                align-items: center;
                .shop_icon {
                    width: 50px;
                }
                span {
                    font-size: 32px;
                    font-weight: bold;
                    color: rgba(102, 102, 102, 1);
                    padding-left: 10px;
                }
                .next {
                    width: 50px;
                }
            }
            .merchant_item {
                height: 189px;
                display: flex;
                .goods_choose {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    img {
                        width: 40px;
                        height: 40px;
                    }
                }
                .goods_img {
                    flex: 4;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    img {
                        width: 150px;
                        height: 150px;
                        border-radius: 8px;
                    }
                }
                .goods_info {
                    flex: 9;
                    padding: 29px 0;
                    box-sizing: border-box;
                    box-shadow: 0 2px 0 0 rgba(204, 204, 204, 0.35);
                    .goods_info_name {
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
            .merchant_item:last-child .goods_info {
                box-shadow: none;
            }
        }
    }

    /*操作*/
    .handle {
        height: 88px;
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 100px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px -1px 0px 0px rgba(153, 153, 153, 0.3);
        padding: 0 30px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        .handle_left {
            display: flex;
            width: 140px;
            justify-content: space-between;
            align-items: center;
            .left_item {
                height: 80px;
                font-size: 24px;
                color: rgba(102, 102, 102, 1);
                text-align: center;
                img {
                    width: 40px;
                    height: 40px;
                }
            }
        }
        .handle_right {
            display: flex;
            align-items: center;
            font-size: 30px;
            p {
                padding: 0 20px;
                color: #FF484A;
                font-size: 24px;
                span {
                    font-size: 30px;
                }
            }
            .btn {
                width: 160px;
                height: 70px;
                background: rgba(76, 120, 253, 1);
                border-radius: 35px;
                color: white;
                text-align: center;
                line-height: 70px;
            }
        }
        .handle_edit {
            display: flex;
            align-items: center;
            > div {
                width: 160px;
                height: 70px;
                border-radius: 35px;
                font-size: 30px;
                text-align: center;
                line-height: 70px;
                margin-left: 20px;
            }
            .del {
                border: 2px solid #FF484A;
                color: #FF484A;
            }
            .complete {
                border: 2px solid #FDAC4C;
                color: #FDAC4C;
            }
        }
    }
</style>