<template>
    <div id="machineList">
        <div class="machine_main">
            <div class="main_item">
                <img src="../../assets/images/address.png" alt="">
                <div>
                    <h5>大道24号1号机器</h5>
                    <p>上海市青浦区新前镇院大道24号</p>
                </div>
                <span>150m</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "machineList"
    }
</script>

<style scoped lang="less">
    .machine_main {
       .main_item{
           height:150px;
           background:rgba(255,255,255,1);
           box-shadow:0 2px 0 0 rgba(228,228,228,1);
           display: flex;
           align-items: center;
           justify-content: space-between;
           padding: 0 30px;
           img{
               width: 40px;
               height: 53px;
           }
           div{
               flex: 3;
               margin-left: 20px;
               h5{
                   font-size:32px;
                   font-weight:bold;
                   height: 60px;
               }
               p{
                   font-size: 28px;
                   color: #999999;
               }
           }
           span{
               font-size: 29px;
           }
       }
    }
</style>