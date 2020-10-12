<style lang="scss" scoped>
    .icon_Box{
        width: 100vw;
        height: 100vh;
        position: relative;
        .icon{
            width: 100vw;
            height: 100vh;
        }
        .language_Box{
            position: absolute;
            top: 69.5px;
            right: 18px;
            height: 35px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            .language_Box_left{
                width: 27px;
                height: 27px;
            }
            .language_Box_middle{
                color: #ffffff;
                font-size: 16px;
                margin-left: 12px;
            }  
            .language_Box_right_icon{
                width: 9.5px;;
                height:16.5px;
                margin-left: 18px;
            }
        }
        
    }

    .popup_Box{
         width: 280px;
        // height: 100vh;
        border-radius: 8px;
        .popup_Box_top{
            width: 280px;
            // height: 24px;
            margin-top: 11.5px;
            font-size: 17px;
            color: #353535;
            display: flex;
            justify-content: center;
        }
        .popup_Box_bottom{
            margin-top: 5px;
            .popup_Box_bottom_language{
                display: flex;
                margin: 0 24px;
                height: 44px;
                font-size: 15px;
                align-items: center;
            }
        }
        .bottom_anniu{
            border-top: 0.5PX solid #E5E5E5;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            height: 44px;
            .bottom_anniu_button{
                font-size: 16px;
                width: 100%;
                text-align: center;
                line-height: 44px;
                // color: #FF000000;
            }
            .bottom_anniu_shuxian{
                background: #E5E5E5;
                width: 0.5PX;
                height: 44px;
            }
        } 
    }

    //登录
    .loginBox{
        position: absolute;
        bottom: 92.5px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 122.5px;
        width: 130px;
        height: 43px;
        background: #3773F6;
        .loginBox_logon{
            font-size: 18px;
            color: #ffffff;
        }
    }


    .bottom_parities{
        position: absolute;
        bottom: 20.5px;
        width: 100vw;
        height: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        font-size: 16px;
    }
    .popup_buttom{
        width: 100vw;
        border-radius: 8px 8px 0 0;
        .popup_buttom_top{
            width: 100vw;
            height: 44px; 
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            color: #333333;
        }
        .popup_buttom_foot{
            border-top: 1.5PX solid #eeeeee;
            margin-bottom: 30px;
            .popup_buttom_foot_box{
                display: flex;
                flex-direction:column;
                margin: 0 15px;
                margin-top: 12.5px;
                .popup_buttom_foot_box_one{
                    height: 50px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    .Nationality_Icon{
                        // display: flex;
                        // align-items: center;
                        .Nationality_Icon_img01{
                            width: 30px;
                            height: 30px;
                        }
                        .Nationality_Icon_img02{
                            width: 30px;
                            height: 30px;
                            margin-left: 10.5px;
                        }

                    }
                    .moneyBox{
                        display: flex;
                        flex-direction:column;
                        .moneyBox_top{
                            color: #666666;
                            // font-size: 11px;  
                            .moneyBox_top_you{
                                margin-left: 4.5px;
                                width: 5.72px;
                                height: 9.51px;
                            }
                            .moneyBox_top_right{
                                margin-left: 4.5px;
                            }
                        }
                        .moneyBox_bottom{
                            color: #333333;
                            font-size: 14px;
                            margin-top: 5px;
                        }
                       
                    }
                }
            }
        }
    }
</style>

<template>
    <div>
        <div class="icon_Box">
            <img class="icon" src="https://huileague.oss-cn-hongkong.aliyuncs.com/image/20191224/d68a8fbc4fe1bd87b400396da7b7726a.jpeg">
            
            

            <div class="language_Box" @click="showPopup">
                <img class="language_Box_left" src="../../../assets/image/language/zhongwen.png">
                <span class="language_Box_middle">中文</span>
                <img class="language_Box_right_icon" src="../../../assets/image/language/icon／箭头.png" > 
             </div>

                
            
            
            <router-link to="/login" class="loginBox"><span class="loginBox_logon">登录</span></router-link>

            <div class="bottom_parities" @click="showPopups">今日汇率</div>

        </div>




        <van-popup v-model="show" class="popup_Box">
            <span class="popup_Box_top">选择语言</span>
            <div class="popup_Box_bottom">
                <div class="popup_Box_bottom_language">
                   <span>khmer</span>
                </div>
                <div class="popup_Box_bottom_language">
                    <span>中文</span>
                </div>
                <div class="popup_Box_bottom_language">
                    <span>English</span>
                </div>
            </div>
            <div class="bottom_anniu">
                <span class="bottom_anniu_button">取消</span>
                <span class="bottom_anniu_shuxian"></span>
                <span class="bottom_anniu_button">确认</span>
            </div> 
        </van-popup>

         <van-popup v-model="shows" position="bottom" class="popup_buttom">
            <span class="popup_buttom_top">实时汇率</span>
            <div class="popup_buttom_foot">
                <div class="popup_buttom_foot_box">
                    <div class="popup_buttom_foot_box_one">
                        <div class="Nationality_Icon">
                            <img src="../../../assets/image/language/yingwen.png" class="Nationality_Icon_img01">
                            <img src="../../../assets/image/language/zhongwen.png" class="Nationality_Icon_img02">
                        </div>
                        <div class="moneyBox">
                            <div class="moneyBox_top">
                                <span class="moneyBox_top_greenback">美元</span>
                                <span class="moneyBox_top_you">></span>
                                <span class="moneyBox_top_right">人民币</span>
                            </div>
                            <div class="moneyBox_bottom">7.320000</div>
                        </div>
                        <div class="moneyBox">
                            <div class="moneyBox_top">
                                <span class="moneyBox_top_greenback">人民币</span>
                                <span class="moneyBox_top_you">></span>
                                <span class="moneyBox_top_right">美元</span>
                            </div>
                            <div class="moneyBox_bottom">7.320000</div>
                        </div>
                    </div>

                    <div class="popup_buttom_foot_box_one">
                        <div class="Nationality_Icon">
                            <img src="../../../assets/image/language/yingwen.png" class="Nationality_Icon_img01">
                            <img src="../../../assets/image/language/zhongwen.png" class="Nationality_Icon_img02">
                        </div>
                        <div class="moneyBox">
                            <div class="moneyBox_top">
                                <span class="moneyBox_top_greenback">美元</span>
                                <span class="moneyBox_top_you">></span>
                                <span class="moneyBox_top_right">人民币</span>
                            </div>
                            <div class="moneyBox_bottom">7.320000</div>
                        </div>
                        <div class="moneyBox">
                            <div class="moneyBox_top">
                                <span class="moneyBox_top_greenback">美元</span>
                                <span class="moneyBox_top_you">></span>
                                <span class="moneyBox_top_right">人民币</span>
                            </div>
                            <div class="moneyBox_bottom">7.320000</div>
                        </div>
                    </div>

                    <div class="popup_buttom_foot_box_one">
                        <div class="Nationality_Icon">
                            <img src="../../../assets/image/language/yingwen.png" class="Nationality_Icon_img01">
                            <img src="../../../assets/image/language/zhongwen.png" class="Nationality_Icon_img02">
                        </div>
                        <div class="moneyBox">
                            <div class="moneyBox_top">
                                <span class="moneyBox_top_greenback">美元</span>
                                <span class="moneyBox_top_you">></span>
                                <span class="moneyBox_top_right">人民币</span>
                            </div>
                            <div class="moneyBox_bottom">7.320000</div>
                        </div>
                        <div class="moneyBox">
                            <div class="moneyBox_top">
                                <span class="moneyBox_top_greenback">美元</span>
                                <span class="moneyBox_top_you">></span>
                                <span class="moneyBox_top_right">人民币</span>
                            </div>
                            <div class="moneyBox_bottom">7.320000</div>
                        </div>
                    </div>

                </div>
            </div>
         </van-popup>

    </div>
</template>

<script>
    export default {
        name:'HomePage',
        data() {
            return {
                show: false,
                shows:false
            }
        },
        methods: {
            showPopup() {
                this.show = true
            },
            showPopups() {
                this.shows = true
            }
        }
    }
</script>