<template>
    <div id="order">
        <div class="goods_main_item">
            <div class="merchant_name">
                <img src="../../assets/images/shopping.png" alt="" class="shop_icon">
                <span>豆花鱼川菜馆</span>
            </div>
            <div class="merchant_item">
                <div class="goods_img">
                    <img src="../../assets/images/bg1.jpg" alt="">
                </div>
                <div class="goods_info">
                    <div class="info_top"><span class="goods_info_name">鲜虾鱼丸什锦石锅</span> <span class="status">待核销</span></div>
                    <p>2019-02-10 10:20</p>
                    <div class="integral"><span>12000</span>积分</div>
                </div>
            </div>
            <div class="merchant_item">
                <div class="goods_img">
                    <img src="../../assets/images/bg1.jpg" alt="">
                </div>
                <div class="goods_info">
                    <div class="info_top"><span class="goods_info_name">鲜虾鱼丸什锦石锅</span> <span class="status">待核销</span></div>
                    <p>2019-02-10 10:20</p>
                    <div class="integral"><span>12000</span>积分</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "order"
    }
</script>

<style scoped lang="less">
    #order{
        min-height: 100%;
        background: #F8F8FA;
    }
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
                flex: 3;
                display: flex;
                align-items: center;
                img {
                    width: 150px;
                    height: 150px;
                    border-radius: 8px;
                }
            }
            .goods_info {
                flex: 8;
                padding: 29px 0;
                box-sizing: border-box;
                box-shadow: 0 2px 0 0 rgba(204, 204, 204, 0.35);
                .info_top{
                    display: flex;
                    justify-content: space-between;
                    .goods_info_name {
                        font-size: 32px;
                        font-weight: bold;
                    }
                    .status{
                        color: #5B7AED;
                        font-size: 28px;
                    }
                }

                p {
                    font-size: 26px;
                    color: rgba(153, 153, 153, 1);
                    line-height: 50px;
                }
                .integral {
                    font-size: 26px;
                    span {
                        font-size: 30px;
                        font-weight: 700;
                    }
                }
            }
        }
        .merchant_item:last-child .goods_info {
            box-shadow: none;
        }
    }
</style>