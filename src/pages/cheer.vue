<template>
    <div class="cheer">
        <div class="title">黄岩范丰加油站</div>
        <div class="list">加油机编号</div>
        <div class="list_item">
            <input type="text" placeholder="请输入加油机编号">
        </div>
        <div class="list">油品号</div>
        <div class="list_item">
            <label for=""></label><select name="" id="">
            <option value="">请选择油品号</option>
            <option value="">92号</option>
            <option value="">95号</option>
            <option value="">97号</option>
            <option value="">柴油</option>
        </select>
        </div>
        <div class="list">金额</div>
        <div class="list_item">
            <input type="text" placeholder="请输入加油金额" v-model="money">
        </div>

        <div class="choose_money">
            <div :class="moneyIndex===0?'active':''" @click="chooseMoney(100,0)">100元</div>
            <div :class="moneyIndex===1?'active':''" @click="chooseMoney(200,1)">200元</div>
            <div :class="moneyIndex===2?'active':''" @click="chooseMoney(300,2)">300元</div>
            <div :class="moneyIndex===3?'active':''" @click="chooseMoney(500,3)">500元</div>
        </div>

        <div class="payType">
            <div class="pay_item" @click="chooseType(0)">
                <div>
                    <img src="../assets/images/balance.png" alt="">
                    <span>余额支付</span>
                </div>
                <img :src="payType===0?require('../assets/images/selected.png'):require('../assets/images/unselected.png')"
                     alt="">
            </div>
            <div class="pay_item" @click="chooseType(1)">
                <div>
                    <img src="../assets/images/wxpay.png" alt="">
                    <span>微信支付</span>
                </div>
                <img :src="payType===1?require('../assets/images/selected.png'):require('../assets/images/unselected.png')"
                     alt="">
            </div>
        </div>

        <div class="pay" @click="pay">立即支付</div>
        <navigationBar></navigationBar>
    </div>
</template>

<script>
    import navigationBar from "../components/navigationBar"

    export default {
        name: "cheer",
        components: {
            navigationBar
        },
        data() {
            return {
                payType: 0,
                money: '',
                moneyIndex: ''
            }
        },
        methods: {
            chooseType(type) {
                this.payType = type;
            },
            chooseMoney(money, index) {
                this.money = money;
                this.moneyIndex = index;
            },
            pay() {
                this.$axios({
                    method: 'get',
                    url: '/customer/device/deviceCount',
                    params: {

                    }
                }).then((res) => {
                    if (res.data.code === 0) {

                    } else {
                        alert(res.data.data);
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .title {
        height: 70px;
        background: rgba(248, 248, 250, 1);
        font-size: 30px;
        color: #4C78FD;
        line-height: 70px;
        padding-left: 30px;
    }

    .list {
        height: 70px;
        background: rgba(255, 255, 255, 1);
        font-size: 26px;
        line-height: 70px;
        padding-left: 60px;
    }

    .list_item {
        padding: 0 60px;
        input, select {
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
        > div.active {
            background: #5b7aed;
            color: white;
        }
        > div:nth-child(1), > div:nth-child(2) {
            margin-top: 30px;
        }
        > div:nth-child(2n) {
            margin-left: 20px;
        }
    }

    .payType {
        padding: 0 60px;
        .pay_item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 88px;
            > div {
                display: flex;
                font-size: 30px;
                align-items: center;
                img {
                    width: 56px;
                    height: 56px;
                    margin-right: 20px;
                }
            }
            > img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }
        }
    }

    .pay {
        width: 630px;
        height: 88px;
        background: rgba(91, 122, 237, 1);
        border-radius: 44px;
        font-size: 36px;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        line-height: 88px;
        margin: 100px auto;
    }
</style>