<template>
    <div id="app">
        <tips></tips>
        <loading></loading>
        <router-view></router-view>
    </div>
</template>

<script>
    import tips from './components/tips'
    import loading from './components/loading'

    export default {
        name: 'app',
        components: {tips, loading}
    }
</script>

<style lang="less">
    *{
        padding: 0;
        margin: 0;
    }
    body,html{
        height: 100%;
    }
    #app {
        color: #333;
        background: white;
        height: 100%;
    }

    a {
        text-decoration: none;
        color: #333333;
    }
    input,select{
        border: none;
        outline: none;
    }

    .tenant_main_item{
        display: flex;
        height: 200px;
        padding: 0 30px;
        position: relative;
        >img{
            width:170px;
            height:126px;
            background:rgba(255,255,255,1);
            border:1px solid rgba(204, 204, 204, 1);
            border-radius:8px;
        }
        .item_right{
            margin-left: 30px;
            flex: 2;
            h5{
                font-size: 32px;
            }
            .hot{
                width:100px;
                height:30px;
                background:rgba(91,122,237,1);
                border-radius:14px 2px 14px 2px;
                font-size:20px;
                color:rgba(255,255,255,1);
                text-align: center;
                line-height: 30px;
                position: absolute;
                right: 30px;
                top: 5px;
            }
            .tenant_class{
                display: flex;
                height: 60px;
                align-items: center;
                justify-content:space-between;
                >div{
                    display: flex;
                    align-items: center;
                    .normal{
                        width:30px;
                        height:30px;
                        background: #FF484A;
                        font-size: 20px;
                        color: white;
                        text-align: center;
                    }
                    span{
                        font-size:28px;
                        font-weight:400;
                        color: #666666;
                        padding-left: 10px;
                    }
                }
                >span{
                    font-size:26px;
                    color:#999999;
                }
            }
            .site{
                display: flex;
                font-size:26px;
                color:#999999;
                height: 50px;
                align-items: center;
                img{
                    width:27px;
                    height:35px;
                }
            }
        }
    }
</style>