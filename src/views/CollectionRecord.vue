<style lang="scss" scoped>
    .container{
        width: 100%;
        height: 100%;
        .collectionRecordBox{
            width: 100%;
            height: 44px;
            background: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #333333;
            font-size: 18px;
            border-bottom: 0.75PX solid #F5F5F5;
            position: relative;
            .collectionRecordBoxImg{
                width: 18.39px;
                height: 18.39px;
                color: #2C2925;
                position: absolute;
                left: 15px;
            }
        }
        .collectionRecordContent{
            margin-top: 20px;
            width: 100%;
            background: #ffffff;
            .collectionRecordContentUl{
                margin: 0 15px;
                .collectionRecordContentLi{
                    width: 100%;
                    height: 65.5px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .collectionRecordContentLi_left{
                        display: flex;
                        align-items: center;
                        color: #333333;
                        font-size: 15px;
                        .collectionRecordContentLi_img{
                            width: 43px;
                            height: 43px;
                        }
                        .collectionRecordContent_box{
                            display: flex;
                            flex-direction: column;
                            margin-left: 10px;
                            .collectionRecordContent_box_spanTwo{
                                margin-top: 0.5px;
                                color: #B8B8B8;
                                font-size: 13px;
                            }
                        }
                    }
                    .collectionRecordContentLi_right{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        .collectionRecordContentLi_right_span_one{
                            color: #333333;
                            font-size: 15px;
                        }
                        .collectionRecordContentLi_right_span_two{
                            color: #B8B8B8;
                            font-size: 13px;
                            margin-top: 0.5px;
                            margin-left: 8px;
                        }

                    }
                }
            }

        }
    }
</style>

<template>
    <div class="container">
        <div class="collectionRecordBox">
            <img src="../assets/image/goback/icon_nav_back_48x48.png" class="collectionRecordBoxImg" @click="goback">
            <span class="collectionContent">收款记录</span>
        </div>
        <div class="collectionRecordContent">
            <ul class="collectionRecordContentUl">
                <li class="collectionRecordContentLi" 
                    v-for="(item,key) in recList" :key="key" 
                    @click="TapNext(item)"
                >
                    <div class="collectionRecordContentLi_left">
                        <img :src="item.icon" class="collectionRecordContentLi_img">
                        <div class="collectionRecordContent_box">
                            <span>{{item.name}}</span>
                            <span 
                                class="collectionRecordContent_box_spanTwo"
                            >
                                {{item.paymentMethod}}
                            </span>
                        </div>
                    </div>
                    <div class="collectionRecordContentLi_right">
                        <span class="collectionRecordContentLi_right_span_one">{{item.money}}</span>
                        <span class="collectionRecordContentLi_right_span_two">{{item.time}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'CollectionRecord',
    data(){
        return{
            count: '',
            recList:[
                {
                    icon:require('../assets/image/home/画板@2x.png'),
                    name:'***娜',
                    paymentMethod:'支付宝',
                    money:'$1000',
                    time:'09:30'
                },
                {
                    icon:require('../assets/image/home/huimoney@2x.png'),
                    name:'***89',
                    paymentMethod:'汇联',
                    money:'$90',
                    time:'08:30'
                }
            ]
        }
        
    },
    methods:{
        goback(){
            this.$router.go(-1)
        },
        TapNext(item){
            let recList = this.recList
            this.$router.push({path:'/PaymentDetails',query:item})
        }
       
    }
}
</script>



