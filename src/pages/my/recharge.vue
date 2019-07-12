<template>
    <div id="recharge">
        <div class="list">油品号</div>
        <div class="list_item">
            <input type="text" placeholder="请输入充值金额">
        </div>
        <div class="choose_money">
            <div>100元</div>
            <div>200元</div>
            <div>300元</div>
            <div>500元</div>
        </div>
        <div class="btn">立即支付</div>
    </div>
</template>

<script>
    export default {
        name: "recharge"
    }
</script>

<style scoped lang="less">
    .list {
        height: 70px;
        background: rgba(255, 255, 255, 1);
        font-size: 26px;
        line-height: 70px;
        padding-left: 60px;
    }

    .list_item {
        padding: 0 60px;
        input {
            width: 100%;
            height: 80px;
            border: 2px solid rgba(204, 204, 204, 1);
            border-radius: 12px;
            text-indent: 2em;
            color: #999999;
        }
    }

    .choose_money {
        padding: 0 60px;
        height: 220px;
        > div {
            width: 300px;
            height: 70px;
            border: 2px solid rgba(204, 204, 204, 1);
            border-radius: 35px;
            color: #999999;
            font-size: 28px;
            text-align: center;
            line-height: 70px;
            float: left;
            margin-top: 20px;
        }
        > div:nth-child(1), > div:nth-child(2) {
            margin-top: 30px;
        }
        > div:nth-child(2n) {
            margin-left: 20px;
        }
    }

    .btn {
        font-size: 36px;
        text-align: center;
        width:630px;
        height:88px;
        background:rgba(91,122,237,1);
        border-radius:44px;
        line-height: 88px;
        color: white;
        margin: 100px auto;
    }
</style>