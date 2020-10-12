<style lang="scss" scoped>
    .container{
        width: 100%;
        height: 100%;
        .setHeader{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 44px;
            background: #ffffff;
            .setHeaderImg{
                position: absolute;
                left: 15px;
                width: 18.39px;
                height: 18.39px;
            }
            .setSpan{
                font-size: 18px;
                color: #333333;
            }
        }
        .setContent{
            width: 100%;
            margin-top: 18.5px;
            background: #ffffff;
            font-size: 15px;
            color: #333333;
            .login-pass{
                width: 100%;
                height: 44px; 
                .login-passBox{ 
                    border-bottom: 0.5PX solid #E8E8E8;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-left: 15px;
                    height: 44px;
                    // .login-pass-span{

                    // }
                    .login-pass-img{
                        margin-right: 15px;
                        width: 6.52px;
                        height: 12.02px;
                        color: #999999;
                    }
                }
            }
            .printer{
                width: 100%;
                height: 44px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .printerSpan{
                    margin-left: 15px;
                }
                .printerImg{
                    margin-right: 15px;
                    width: 6.52px;
                    height: 12.02px;
                    color: #999999;
                }
            }
            
        }

        .quit{
            width: 100%;
            height: 44px;
            display: flex;
            justify-content:space-between ;
            align-items: center;
            margin-top: 15px; 
            background: #ffffff;
            border-bottom: 0.5PX solid #e8e8e8;
            .quitSpan{
                font-size: 15px;
                color: #DE2C22;
                margin-left: 15px;   
            }
            .quitImg{
                margin-right: 15px;
                width: 6.52px;
                height: 12.02px;
                color: #999999;
            }
        }
    }
</style>

<template>
    <div class="container">
        <div class="setHeader">
            <img src="../../assets/image/goback/icon_nav_back_48x48.png" class="setHeaderImg" @click="goback">
            <span class="setSpan">设置</span>
        </div>
        <div class="setContent">
            <div class="login-pass">
                 <div class="login-passBox">
                    <span class="login-pass-span">登录密码</span>
                    <img src="../../assets/image/goback/icon／箭头.png" class="login-pass-img" @click="$router.push({path:'SetPassword'})"> 
                 </div>  
            </div>

            
            <div class="printer">
                <span class="printerSpan">打印机</span>
                <img src="../../assets/image/goback/icon／箭头.png" class="printerImg">
            </div>
            
        </div>

        <div class="quit">
            <span class="quitSpan">退出登录</span>
            <img src="../../assets/image/goback/icon／箭头.png" class="quitImg">
        </div>
    </div>
</template>

<script>
export default {
    name:'Sets',
    methods:{
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>



