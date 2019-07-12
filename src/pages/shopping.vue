<template>
    <div id="shopping">
        <div class="wh_class_title">
            <div class="wh_ul" :style="{width:widthValue+'px'}">
                <div :class="titleIndex===item.id?'active':''" v-for="(item,index) in titleArr" :key="index"
                     @click="chooseClass(item.id)">{{item.name}}
                </div>
            </div>
        </div>
        <div class="tenant_main">
            <div class="tenant_main_item" @click="skipDetails">
                <img src="" alt="">
                <div class="item_right">
                    <h5>佳丽美容店</h5>
                    <div class="hot">热门推荐</div>
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
                <img src="" alt="">
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
    import navigationBar from "../components/navigationBar"

    export default {
        name: "shopping",
        components: {
            navigationBar
        },
        data() {
            return {
                widthValue: '',
                titleArr: [
                    {
                        name: '餐饮',
                        id: 0
                    }, {
                        name: '五金',
                        id: 1
                    }, {
                        name: '水果',
                        id: 2
                    }, {
                        name: '生鲜超市',
                        id: 3
                    }, {
                        name: '面包房',
                        id: 4
                    }
                ],
                titleIndex: 0
            }
        },
        mounted() {
            this.getWidth();
        },
        methods: {
            getWidth() {
                let length = this.titleArr.length;
                this.widthValue = length * 80;
            },
            chooseClass(id) {
                this.titleIndex = id;
            },
            skipDetails(){
                this.$router.push({
                    path:'/merchantDetails'
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .wh_class_title {
        height: 44px;
        width: 100%;
        line-height: 44px;
        text-align: center;
        color: #999999;
        overflow: scroll;
        margin-bottom: 20px;
        .wh_ul {
            height: 44px;
            > div {
                width: 80px;
                float: left;
                font-size: 14px;
                position: relative;
            }
            > div.active {
                font-weight: bold;
                color: #333333;
            }
            > div.active:after {
                content: '';
                position: absolute;
                background: #5B7AED;
                width: 30px;
                height: 4px;
                border-radius: 8px;
                left: 50%;
                transform: translateX(-50%);
                bottom: 0;
            }
        }

    }
</style>