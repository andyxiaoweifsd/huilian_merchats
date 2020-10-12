<style lang="scss" scoped>
    .container{
        width: 100%;
        height: 100%;
        .setPasswordHeader{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 44px;
            background: #ffffff;
            .setPasswordImg{
                position: absolute;
                left: 15px;
                width: 18.39px;
                height: 18.39px;   
            }
            .setPasswordSpan{
                font-size: 18px;
                color: #333333;
            }
        }
        .setPasswordBox{
            width: 100%;
            margin-top: 15px;
            font-size: 15px;
            color: #333333;
            background: #ffffff;
            .setPassword_one{
                width: 100%;
                height: 44px;
                .setPassword_one_one{
                    margin-left: 15px;
                    height: 44px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 0.5PX solid #e8e8e8;
                    .setPasswordSpan{
                        line-height: 44.5px;
                    }
                    .setPassword_input{
                        height: 40px;
                        border: 0;
                        outline: 0;
                        text-align: right;
                        margin-right: 15px;
                    }
                }
            }
        }
        .bottonBox{
            width: 100%;
            margin-top: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            .btn{
                width: 100%;
                height: 44px;
                margin: 0 15px;
                color: #ffffff;
                font-size: 18px;
                background: #3773F6;
                border-radius: 8px;
                border: 0;
            }
        }
        .forgetPwd{
            margin-top: 15px;
            height: 44px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #3773F6;
            font-size: 17px;
        }
        .successfully{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 36.5px;
            .successfullyBox{
                width: 120px;
                height: 120px;
                color: #ffffff;
                background: #000000;
                font-size: 14px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .successfullyImg{
                    width: 50px;
                    height: 50px;
                }
                .successfullySpan{
                    margin-top: 8px;
                }
            }
        }
    }
</style>

<template>
    <div class="container">
        <div class="setPasswordHeader">
            <img src="../../assets/image/goback/icon_nav_back_48x48.png" class="setPasswordImg" @click="goback">
            <span class="setPasswordSpan">设置密码</span>
        </div>
        <div class="setPasswordBox">

            <div class="setPassword_one">
                <div class="setPassword_one_one">
                    <span class="setPasswordSpan">当前密码</span>
                    <input type="text" name="pwd" placeholder="填写" class="setPassword_input">
                </div>
            </div>

            <div class="setPassword_one">
                <div class="setPassword_one_one">
                    <span class="setPasswordSpan">新密码</span>
                    <input type="text" name="pwd" placeholder="填写" class="setPassword_input">
                </div>
            </div>

            <div class="setPassword_one">
                <div class="setPassword_one_one">
                    <span class="setPasswordSpan">确认新密码</span>
                    <input type="text" name="pwd" placeholder="填写" class="setPassword_input">
                </div>
            </div>

        </div>

        <div class="bottonBox">
            <button type="sibmit" class="btn">提交</button>
        </div>

        <div class="forgetPwd">
            <span class="forgetPwdSpan">忘记当前密码 ,  请联系主管</span>
        </div>

        <div class="successfully">
            <div class="successfullyBox">
                <img src="../../assets/image/画板.png" class="successfullyImg">
                <span class="successfullySpan">设置成功</span>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name:'SetPassword',
    methods:{
        goback(){
            this.$router.go(-1)
        }
    }    
       
}
</script>