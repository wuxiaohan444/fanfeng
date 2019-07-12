<template>
    <div id="employ">
        <div class="employ_main">
            <div class="employ_main_item">
                <div class="merchant_icon">
                    <img src="../../assets/images/bg2.jpg" alt="">
                </div>
                <div class="merchant_info">
                    <div class="merchant_name">豆花鱼川菜馆</div>
                    <div class="employ_time">2019-06-22	11:20</div>
                    <div class="goods_name">鲜虾鱼丸什锦石锅大盆菜</div>
                </div>
                <div class="integral">-12000积分</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "employ"
    }
</script>

<style scoped lang="less">
    .employ_main{
        .employ_main_item{
            height: 200px;
            padding:30px;
            box-sizing: border-box;
            display: flex;
            .merchant_icon{
                flex: 2;
                img{
                    width:75px;
                    height:75px;
                    background:rgba(255,255,255,1);
                    border:1px solid rgba(204, 204, 204, 1);
                    border-radius:4px;
                }
            }
            .merchant_info{
                flex: 7;
                box-shadow:0 1px 0 0 rgba(204, 204, 204, 0.35);
                .merchant_name{
                    font-size:30px;
                    font-weight: 500;
                }
                .employ_time{
                    font-size:24px;
                    font-weight:400;
                    color:rgba(153,153,153,1);
                    line-height: 50px;
                }
                .goods_name{
                    font-size:28px;
                    font-weight:400;
                }
            }
            .integral{
                flex: 3;
                font-size:28px;
                line-height: 140px;
                text-align: right;
                box-shadow:0 1px 0 0 rgba(204, 204, 204, 0.35);
            }
        }
    }
</style>