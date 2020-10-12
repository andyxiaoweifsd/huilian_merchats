<style lang="scss" scoped>
    .container{
        width: 100%;
        .payheader{
            width: 100%;
            height: 44px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative; 
            .payheaderImg{
                color: #2C2925;
                width: 18.39px;
                height: 18.39px;
                position: absolute;
                left: 15px;
            }
            .payheaderSpan{
                font-size: 18px;
                color: #333333;
            }
        }
        .succeedBox{
            margin-top: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            .succeedBoxImg{
                width: 60px;
                height: 60px;
            }
            .succeedBoxSpan_one{
                margin-top: 6px;
                color: #333333;  
            }
            .succeedBoxSpan_two{
                margin-top: 6px;
                color: #999999;
            }
        }
        .payContent{
            margin-top: 15px;
            width: 100%;
            border-top: 0.5PX solid #e8e8e8;
            border-bottom: 0.5PX solid #e8e8e8;
            .payContentUl{
                margin: 0 15px;
                .payContentLi{
                    width: 100%;
                    height: 44px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 0.5PX solid #e8e8e8;
                    .payContentLi :nth-child(6){
                        border-bottom:0;
                    }
                    .payContent_One{
                        color: #999999;
                        font-size: 16px;
                    }
                    .payContent_two{
                        color: #333333;
                        font-size: 15px;
                    }
                }
            }
        }
        .buttonBox{
            width: 100%;
            height: 100%;
            margin-top: 44px;
            display: flex;
            justify-content: center;
            align-items: center;
            .btn{
                width: 100%;
                margin: 0 15px;
                height: 44px;
                border-radius:8px ;
                border: 1px solid #3773F6;
                color: #3773F6;
                font-size: 17px;
                background:#ffffff;
            }
        }
        .bottomBox{
            width: 100%;
            height: 44px;
            margin-top: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            .bottomBoxSpan{
                color: #DE2C22;
                font-size: 17px;
            }
        }

        .popup_Box {
            width: 280px;
            display: flex;
            flex-direction: column;
            border-radius: 8px;
            .popupSpan{
                height: 55px;
                color: #353535;
                font-size: 17px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .popup_Box_bottom{
                border-top: 0.5PX solid #E5E5E5;
                height: 45px;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                font-size: 16px;
                .popup_Box_bottom_spanOne{
                    color: #999999;
                }
                .popup_Box_bottom_x{
                    background: #E5E5E5;
                    width: 0.5PX;
                    height: 45px;
                }
                .popup_Box_bottom_spanTwo{
                    color: #3773F6;
                }
            }
        }

    }
</style>

<template>
    <div class="container">
        <div class="payheader">
            <img :src="upImg" class="payheaderImg" @click="gogack">
            <span class="payheaderSpan">详情</span>
        </div> 
        
        <div class="succeedBox">
            <img :src="icon" class="succeedBoxImg">
            <span class="succeedBoxSpan_one">{{paySucc}}</span>
            <span class="succeedBoxSpan_two">{{subhead}}</span>
        </div>

        <div class="payContent">
            <ul class="payContentUl">
                <li class="payContentLi" v-for="(item,key) in paymentList" :key="key">
                    <span class="payContent_One">{{item.title}}</span>
                    <span class="payContent_two">{{item.way}}</span>
                </li>
            </ul>
        </div>

        <div class="buttonBox">
            <button type="submit" class="btn">打印小票</button>
        </div>

        <div class="bottomBox" @click="showPopup">
            <span class="bottomBoxSpan">退款</span>
        </div>
        <van-popup v-model="show" class="popup_Box">
            <span class="popupSpan">确定退款?</span>
            <div class="popup_Box_bottom">
                <span class="popup_Box_bottom_spanOne">取消</span>
                <span class="popup_Box_bottom_x"></span>
                <span class="popup_Box_bottom_spanTwo">确认</span>
            </div>
        </van-popup>

    </div>
</template>

<script>
    export default {
        name:'PaymentDetails',
        data(){
            return{
                upImg:require('../assets/image/goback/icon_nav_back_48x48.png'),
                icon: '',
                paySucc:'收款成功',
                subhead:'副标题',
                show: false,
                paymentList:[
                    {
                        title:'付款人',
                        way:'***ack'
                    },
                    {
                        title:'付款方式',
                        way:'汇联'
                    },
                    {
                        title:'账单',
                        way:'消费'
                    },
                    {
                        title:'金额',
                        way:'$70'
                    },
                    {
                        title:'订单时间',
                        way:'2018-08-29 12:00:05'
                    },
                    {
                        title:'订单号',
                        way:'E12345678'
                    }
                ]
            }
        },
         methods:{
            gogack(){
                this.$router.go(-1)
            },
            showPopup() {
                this.show = true;
            }
        },
        mounted(){
            console.log(this)
            let item = this.$route.query
            this.icon = item.icon
            this.subhead = this.paymentMethod
            this.paymentList[0].way = item.name
            this.paymentList[1].way = item.paymentMethod
            this.paymentList[3].way = item.money
            this.paymentList[4].way = item.time






            
            // let item = this.$route.query
            // this.icon = item.icon
            // this.subhead = item.paymentMethod
            // this.paymentList[0].way = item.name
            // this.paymentList[1].way = item.paymentMethod
            // this.paymentList[3].way = item.money
            // this.paymentList[4].way = item.time
        }
    }
</script>


