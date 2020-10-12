<style lang="scss" scoped>
    .container{
        width: 100%;
        height: 100%;
        position: relative;
        .header{
            width: 100%;
            height: 44px;
            display: flex;
            align-items: center;
            .header_img{
                width: 24px;
                height: 24px;
                margin-left: 15px;
            }
        }
        .main{
            width: 100%;
            .main_one_top{
                display: flex;
                flex-direction:column ;
                justify-content: center;
                align-items: center;
                font-size: 16px;
                .main_one_top_img{
                    margin-top: 20px;
                    width: 60px;
                    height: 60px;
                }  
                .main_one_top_span_one{
                    color: #333333;
                    margin-top: 8px;  
                }
                .main_one_top_span_two{
                    color: #999999;
                    margin-top: 15px;    
                }  
            }
            .main_one_bottom{
                width: 100%;
                margin-top: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                flex-wrap:wrap;
                .main_one_bottom_span{
                    font-size: 16px;
                    color: #999999;
                }
                .main_one_bottom_two{
                   height: 40px;
                   background: #F5F6FA;
                   color: #333333;
                   font-size: 30px;
                }
            }
        }
        .footer{
            position: absolute;
            bottom: 84.5px;
            display: flex;
            justify-content: center;
            width: 100%;
            height: 50px;
            .footer_accomplish{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 150px;
                height: 40px;
                border: 0.5PX solid #00A900;
                color: #00A900;
                font-size: 18px;
            }
        }
    }
</style>

<template>
    <div class="container">

        <div class="header">
            <img 
                :src="rollback.icon" 
                @click="$router.push({path:'/Home'})"
                class="header_img" 
            >
        </div>
        <div class="main">
            <div class="main_one_top">
                <img :src="succIcon.icon" class="main_one_top_img">
                <span class="main_one_top_span_one">{{paySucc}}</span>
                <span class="main_one_top_span_two">{{subhead}}</span>
            </div>
            <div class="main_one_bottom">
                <span class="main_one_bottom_span">{{currency}}</span>
                <span class="main_one_bottom_two">{{count}}</span>
            </div>
        </div>
        <div class="footer">
            <span class="footer_accomplish" @click="$router.push({path:'/Home'})">完成</span>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            rollback:{icon:require('../../assets/image/home/icon_close_black_48x48.png')},
            succIcon:{icon:require('../../assets/image/home/图标／状态成功圆形120x120.png')},
            paySucc:'收款成功',
            subhead:'副标题',
            currency:'CNY',
            count: ''
        }
    },
    mounted(){
        console.log(this)
        this.count = this.$route.query.mony
        this.subhead = this.$route.query.name
    }
}
</script>



