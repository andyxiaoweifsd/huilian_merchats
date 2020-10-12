<style lang="scss" scoped>
.container{
    width: 100%;
    .sumHead{
        width: 100%;
        height: 44px;
        background: #ffffff;
        display: flex;
        align-items: center;
        .sumHeadImg{
            margin-left: 15px;
            width: 18.39px;
            height: 18.39px;
        }
        .sumHeadSpan{
            margin: 0 auto;
            font-size: 18px;
            color: #333;
        }
    }
    .mainBox{
        width: 100%;
        height: 100%;
        display: felx;
        justify-content: center;
        background: #ffffff;
        border-top:0.5PX solid #e8e8e8 ;
        border-bottom:0.5PX solid #e8e8e8 ;
        margin-top: 20px;
        .main{
            margin: 0 15px;
            .mainLi{
                height: 44px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                align-items: center;
                color: #333333;
                border-bottom: 0.5PX solid #E8E8E8;
                .mainLiLeft{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .mainLiLeftImg{
                        width: 25px;
                        height: 25px;
                    }
                    .mainLiLeftSpan{
                        margin-left: 15px;
                        font-size: 15px;
                    }
                } 
                .mainLiRight{
                    display: flex;
                    align-items: center;
                    .mainLiRightSpan{
                        font-size: 16px;;
                    }
                    .mainLiRightImg{
                        width: 6.52px;
                        height: 12.02px;
                        margin-left: 6.5px;
                    }
                }  
            }
        }
    }
}
</style>

<template>
    <div class="container">
        <div class="sumHead">
            <img src="../../assets/image/goback/icon_nav_back_48x48.png" class="sumHeadImg" @click="goback">
            <span class="sumHeadSpan">今日汇总</span>
        </div>

        <div class="mainBox">
            <ul class="main">
                <li v-for="(item,key) in sumList" :key="key" class="mainLi">
                    <div class="mainLiLeft">
                        <img :src="item.icon" class="mainLiLeftImg">
                        <span class="mainLiLeftSpan">{{item.letter}}</span>
                    </div>
                    <div class="mainLiRight">
                        <span class="mainLiRightSpan">{{item.money}}</span>
                        <img :src="item.rightArrow" class="mainLiRightImg">
                    </div>
                </li>
            </ul>
        </div> 
    </div>
</template>

<script>
export default {
    data(){
        return{
            sumList:[
                
                {
                    icon:require('../../assets/image/home/huimoney.png'),
                    letter:'美元',
                    money:'$10,0000',
                    rightArrow:require('../../assets/image/home/icon／箭头.png')
                },
                {
                        icon:require('../../assets/image/home/huimoney.png'),
                        letter:'瑞尔',
                        money:'R10,0000',
                        rightArrow:require('../../assets/image/home/icon／箭头.png')
                },
                {
                        icon:require('../../assets/image/home/huimoney.png'),
                        letter:'人命币',
                        money:'￥10,0000',
                        rightArrow:require('../../assets/image/home/icon／箭头.png')
                },
                {
                        icon:require('../../assets/image/home/huimoney.png'),
                        letter:'USDT',
                        money:'1,00000',
                        rightArrow:require('../../assets/image/home/icon／箭头.png')
                }
            ]
        }
    },
    methods:{
       goback(){
           this.$router.go(-1)
       }
    }
}
</script>



