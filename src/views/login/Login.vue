<style lang="scss" scoped>
.wrap{
    width: 100%;
    .gobackBox{
        width: 100%;
        .gobackBoxGo{
            width: 100%;
            display: flex;
            align-items: center;
            height: 44px;
            .boxGo{
                width: 18.39px;
                height: 18.39px;
                margin-left: 20.5px;
                color: #2C2925;
            }
        }
        
    }

    .loginBox{
        width: 100%;
        margin-top: 30px;
        .loginBox_login{
            font-size: 24px;
            width: 100%;
            margin-left: 15px;
        }
        .userPwdBox{
            width: 100%;
            margin-top: 30px;
            font-size: 15px;
            color: #333333;
           .userPwdBox_one{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                border-bottom: 0.5PX solid #E8E8E8;
                height: 44px;
                padding: 0 15px;
                font-size: 15px;
                .usernameBox{
                    line-height:44.5px;   
                }
                .user_Input{
                    width: 200px;
                    border: 0;
                    outline: 0;
                    height: 40px;
                    text-align: right;
                    color: #333333;
                    background: #F5F6FA
                }
           }  
           .ueserPwdBox_two{
                border-bottom: 0.5PX solid #E8E8E8;
                height: 44.5px;
                font-size: 15px;
                padding: 0 15px;
                display: flex;
                align-items: center; 
                flex-direction: row;
                justify-content: space-between;   
                .pwdBox{
                    letter-spacing:12px; //文字间距
                    line-height:44.5px;
                }
                .pwd_Input{
                    width: 200px;
                    border: 0;
                    outline: 0;
                    height: 40px;
                    text-align: right;
                    color: #333333;
                    background: #F5F6FA
                }
            }  
        }

        .forget_password{
            margin-top: 21px;  
            padding-left: 19.5px;
            font-size: 15px;
            color: #3773F6;
        }  

        .buttom_box{
            margin-top: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            .btn{
                width: 100%;
                height: 44px;
                margin: 0 15px;
                font-size: 18px;
                color: #ffffff;
                background:#3773F6;
                border-radius: 8px;
                border: 0;
            }
        }
    }

    .bottom_xieyi {
        position: absolute;
        bottom: 25px;
        width: 100vw;
        display: flex; 
        justify-content: center;
        flex-direction:column;
        align-items: center;
        font-size: 14px;
        .bottom_xieyi_one{
            color: #999999;
        }
        .bottom_xieyi_two{
            color: #3773F6;
        }
    }

}   
</style>

<template>
    <div class="wrap">

        <div class="gobackBox">
            <div class="gobackBoxGo">
                <img src="../../assets/image/goback/icon_nav_back_48x48.png" class="boxGo" @click="goback" />
            </div>
        </div>

        <div class="loginBox">
            <span class="loginBox_login">登录</span>

            <div class="userPwdBox">
                <div class="userPwdBox_one">
                    <label for="userName" class="usernameBox">用户名</label>
                    <input type="text" name="userName" placeholder="填写" id="userName" class="user_Input" v-model="loginForm.username">
                </div>

                <div class="ueserPwdBox_two">
                    <label for="pwd" class="pwdBox">密码</label>
                    <input type="text" name="pwd" id="pwd" placeholder="填写" class="pwd_Input" v-model="loginForm.password">
                </div>
            </div>

            <div class="forget_password ">
                <a>忘记密码了？</a>
            </div>

            <div class="buttom_box">
                <!-- @click="login" -->
                <!-- <button type="submit" class="btn" @click="$router.push({path: '/Home'})">登录</button> -->
                <button type="submit" class="btn" @click="login">登录</button>
                
            </div>
        </div>

        <div class="bottom_xieyi">
            <span class="bottom_xieyi_one">登录代表你同意</span>
            <a class="bottom_xieyi_two">《用户服务协议》</a>
        </div>

    </div>
</template>

<script>
    import { mapMutations, mapState } from 'vuex';
    import axios from 'axios'
    export default {
        data(){
            return{
                loginForm: {
                    username: '',
                    password: ''
                }
            }
        },
        computed: {
            ...mapState({
                Authorization: state => state.Authorization
            })
        },
        watch: {
            Authorization: function(val, oldval) {
                if (val === '1') {
                    this.$router.push({ path: '/Home' })
                } else {
                    // 
                }
            }
        },
        methods:{
            goback(){
                this.$router.go(-1)
            },
            // TapLogin() {
            //     this.$router.push({path: '/Home'})
            // }            
            ...mapMutations(['changeLogin']),
            login () {
                const { username, password } = this.loginForm
                if (username === '' || password === '') {
                    this.$toast('账号或密码不能为空')
                } else {
                    if (username.length < 6) {
                        alert('账号不能少于 6 位数')
                        return
                    }
                    if (username.length > 16) {
                        alert('账号不能大于 16 位数')
                        return 
                    }
                    if (password.length < 6) {

                        return
                    }
                    if (password.length > 16) {

                        return
                    }
                    setTimeout(() => {
                        this.changeLogin('1')
                        console.log('this', this.$store)
                        setTimeout(() => {
                            console.log('this111', this, this.Authorization)
                        }, 500);
                    }, 1000);
                }
            }
        }

    }
</script>>


