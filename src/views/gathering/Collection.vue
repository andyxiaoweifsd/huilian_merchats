<style lang="scss" scoped>
    .container{
        width: 100%;
        height: 100%;
        .header{
            width: 100%;
            height: 44px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #fff;
            .headerImg{
                width: 18.39px;
                height: 18.39px;
                position: absolute;
                left: 15px;
                color: #2C2925;
            }
            .headerSpan{
                color: #333333;
                font-size: 18px;
            }
        }
        .main{
            width: 100%;
            margin-top: 15px;
            .mainOne{
                width: 100%;
                background: #ffffff;
                .mainOneTop{
                    width: 100%;
                    height: 44px;
                    .mainOneTopBox{
                        height: 43.5px;
                        margin-left: 15px;
                        border-bottom: 0.5PX solid #e8e8e8;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .mainOneTopBox_left{
                            color: #333333;
                            font-size: 15px;
                        }
                        .mainOneTopBox_right{
                            margin-right: 15px;
                            .mainOneTopBox_right_span{
                                color: #333333;
                                font-size: 15px;
                            }
                            .mainOneTopBox_right_img{
                                width: 6.52px;
                                height: 12.02px;
                                margin-left: 8px;
                                color: #999999;
                            }
                        }
                    }
                }
                .mainOneBottom{
                    display: flex;
                    flex-direction: column;
                    // justify-content: center;
                    
                    .mainOneBottom_box{
                        display: flex;
                        align-items: center;
                        width: 100%;
                        height: 42.5px;
                        color: #333333;
                        font-size: 16px;
                        .mainOneBottom_top{
                            margin-left: 15px;
                        }
                    }
                    .mainOneBottom_bottom_box{
                        width: 100%;
                        height: 52.5px;
                        display: flex;
                        align-items: center;
                        .mainOneBottom_bottom{
                            margin-left: 15px;
                            display: flex;
                            align-items: center;
                            .mainOneBottom_bottom_span{
                                font-size: 25px;
                                color: #3873F6;
                            }
                            .mainOneBottom_bottom_money{
                                margin-left: 10px;
                                color: #333333;
                                font-size: 34px;
                                border: 0;
                                outline: 0;
                            }
                        }
                    }
                }
            }
            .mainTwo{
                width: 100%;
                margin-top: 15px;
                background: #ffffff;
                .payment_method{
                    width: 100%;
                    height: 44px;
                    color: #333333;
                    font-size: 15px;
                    display: flex;
                    align-items: center;
                    border-bottom: 0.5PX solid #e8e8e8;
                    .payment_method_span{
                        margin-left: 15px;
                    }
                }
                .mainTwoUl{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    .mainTwoLi :nth-child(3){
                        border-bottom: none;
                    }
                    .mainTwoLi{
                        width: 100%;
                        height: 44px;
                        .liMargin{
                            height: 44px;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            margin-left: 15px;
                            border-bottom: 0.5PX solid #e8e8e8;
                            .mainTwoLiLeft{
                                height: 44px;
                                display: flex;
                                align-items: center;
                                .mainTwoLiLeft_img{
                                    width: 25px;
                                    height: 25px;
                                }
                                .mainTwoLiLeft_span{
                                    margin-left: 9.5px;
                                    font-size:15px ;
                                    color: #333333;
                                }
                            }
                            .mainTwoLiRight{
                                margin-right: 15px;
                                height: 44px;
                                display: flex;
                                align-items: center; 
                                .mainTwoLiRight_span{
                                    color: #999999;
                                    font-size: 16px; 
                                }
                                .circleBoxImg{
                                    margin-left: 15px;
                                } 
                            }
                        }

                    }
                }
            }

        }
        .footer{
            width: 100%;
            position: fixed;
            bottom: 0;
            .footTop{
                width: 100%;
                height: 38px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                .footTopSpan{
                    color: #999999;
                    font-size: 13px;
                }
                .footTopImg{
                    width: 18PX;
                    height:18PX;
                    position: absolute;
                    right: 15px;
                }
            }
            .fooBottom{
                width: 100%;
                display: flex;
                .fooBottomBox{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    .fooBottomBox_left{
                        width: 78%;
                        .fooBottomBox_left_top{
                            display: flex;
                            flex-wrap:wrap;
                            justify-content: space-evenly;

                            .fooBottomBox_left_top_span{
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                margin-bottom: 3%;
                                width: 28%;
                                color: #333333;
                                background: #ffffff;
                                font-size: 25px;
                                height: 48px;
                            }
                            .fooBottomBox_left_top_span_0 {
                                width: 61%;
                            }
                        }
                        .fooBottomBox_left_bottom{
                            height: 44px;
                            display: flex;
                            justify-content: space-evenly;
                            align-items: center;
                            margin-bottom: 3%;
                            .fooBottomBox_left_bottom_span{
                                width: 61%;
                                height: 44px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                color: #333333;
                                font-size: 25px;
                                background: #ffffff;
                            }
                            .fooBottomBox_left_bottom_x{
                                width: 29%;
                                height: 44px;
                                background: #ffffff;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                .foot_x_span{
                                    width: 17px;
                                    height: 17px;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    background: #333333;
                                    color: #ffffff;
                                }
                            }
                        }
                    }
                    .fooBottomBox_right{
                        width: 22%;
                        font-size: 18px;
                        background: #1677FF;
                        color: #ffffff;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: 3%;
                        margin-right:3%;
                        border-radius: 4px;
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="container">
        <div class="header">
            <img src="../../assets/image/goback/icon_nav_back_48x48.png" class="headerImg" @click="goback">
            <span class="headerSpan">收款</span>
        </div>
        <div class="main">

            <div class="mainOne">
                <div class="mainOneTop">

                    <div class="mainOneTopBox">
                        
                        <span class="mainOneTopBox_left">币种</span>
                       
                        
                        <div class="mainOneTopBox_right">
                            <span class="mainOneTopBox_right_span">USD</span>
                            <img src="../../assets/image/goback/icon／箭头.png" class="mainOneTopBox_right_img">
                        </div>
                    </div>

                </div>
                <div class="mainOneBottom">
                    <div class="mainOneBottom_box">
                        <span class="mainOneBottom_top">金额</span>
                    </div>
                    
                    <div class="mainOneBottom_bottom_box">
                         <div class="mainOneBottom_bottom">
                            <span class="mainOneBottom_bottom_span">$</span>
                            <!-- <span class="mainOneBottom_bottom_money">{{count}}</span> -->
                            <input class="mainOneBottom_bottom_money" v-model="count">
                        </div>
                    </div>
                   
                </div>
            </div>

            <div class="mainTwo">
                <div class="payment_method">
                    <span class="payment_method_span">付款方式</span>
                </div>
                
                <ul class="mainTwoUl">
                    <li 
                        class="mainTwoLi" 
                        v-for="(item,key) in paymentList" :key="key"
                        @click="TapCell(item, key)"
                    >
                        <div class="liMargin">
                            <div class="mainTwoLiLeft">
                                <img :src="item.icon" class="mainTwoLiLeft_img">
                                <span class="mainTwoLiLeft_span">{{item.title}}</span>
                            </div>
                            <div class="mainTwoLiRight">
                                <span class="mainTwoLiRight_span">{{item.discounts}}</span>
                                <img :src="item.flag ? item.img : item.nextImg" class="circleBoxImg" >
                            </div>
                        </div>
                        
                    </li>
                </ul>
            </div>

        </div>
        <div class="footer" v-show="show">
            <div class="footTop">
                <span class="footTopSpan">填写金额</span>
                <img src="../../assets/image/home/icon_bottom.png" class="footTopImg" @click="packUp">
            </div>
            <div class="fooBottom">
                <div class="fooBottomBox">
                    <div class="fooBottomBox_left">
                        <div class="fooBottomBox_left_top">
                            <span
                                :class="item === 0 ? 'fooBottomBox_left_top_span fooBottomBox_left_top_span_0' : 'fooBottomBox_left_top_span'"
                                v-for="(item,key) in numberList" 
                                :key="key"
                                @click="TapNumber(item)"    
                            >
                                {{item}}
                            </span>
                        </div>
                        
                    </div>

                    <div class="fooBottomBox_right" 
                        @click="TapNext"
                    >
                        收款
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        data(){
            return{
                radio: '1',
                paymentList:[
                    {
                        icon:require('../../assets/image/home/huimoney.png'),
                        title:'汇联',
                        discounts:'免服务费',
                        img:require('../../assets/image/home/duihao.png'),
                        nextImg:require('../../assets/image/home/duihao-kong.png'),
                        flag: true
                    },
                    {
                        icon:require('../../assets/image/home/画板.png'),
                        title:'支付宝',
                        discounts:'随机立减',
                        img:require('../../assets/image/home/duihao.png'),
                        nextImg:require('../../assets/image/home/duihao-kong.png'),
                        flag: false
                    },
                    {
                        icon:require('../../assets/image/home/图标／Wing方形60x60.png'),
                        title:' Wing',
                        discounts:'优惠20%',
                        img:require('../../assets/image/home/duihao.png'),
                        nextImg:require('../../assets/image/home/duihao-kong.png'),
                        flag: false
                    }
                ],
                numberList:[1,2,3,4,5,6,7,8,9,0, 'X'],
                count: '',
                
                show:true
                
            }
            
        },
        methods:{
            TapCell(item, key) {
                let paymentList = this.paymentList
                paymentList.find(obj => {
                    obj.flag = false
                })
                paymentList[key].flag = true
                this.paymentList = paymentList
            },
            goback(){
                this.$router.go(-1)
            },
            TapNumber (item) {
                if (item === 'X') {
                    if (!this.count.length) return
                    this.count
                    let NewCount = this.count
                    this.count = NewCount.substring(NewCount.length - 1, 0)
                    return
                }
                this.count += item
                
            },
            packUp(){
               this.show = false
            },
            TapNext() {
                if(this.count.length === 0){
                    this.$toast('请先输入金额')
                    return
                }
                let paymentList = this.paymentList
                let obj = {}
                for (let i in paymentList) {
                    if (paymentList[i].flag) {
                        obj = paymentList[i]
                        break
                    }
                }
                this.$router.push({path:'/SuccessfulCollection',query: {mony: this.count, name: obj.title}})
            }
        }
    }
</script>
    
