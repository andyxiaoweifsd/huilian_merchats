<style lang="scss" scoped>
    .homeConetentBox{
        width: 100%;
        position: absolute;
        top: 184px;
        z-index: 99;
        // background: #F5F6FA;
        .homeConetent_one{
            margin: 0px 15px;
            background: #ffffff;
            border-radius: 8px; 
            .homeConetent_cont{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 0 15px;
                height: 44px;
                font-size: 15px;
                color: #333333;
                // border-bottom: 0.5PX solid #E8E8E8;
                .homeConetent_cont_a{
                    color: #333333;
                }
            }
        }
        .homeConetent_two{
            margin: 20px 15px 0px 15px;
            background: #ffffff;
            border-radius: 8px; 
            .homeConetent_cont_two{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 0 15px;
                height: 44px;
                font-size: 15px;
                color: #333333;
                // border-bottom: 0.5PX solid #E8E8E8;
            }
        }
        .contentSet{ 
            margin:30px 15px 0px 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            .btn{
                width: 100%;
                height: 44px;
                border: 1px solid #3773F6;
                background: #ffffff;
                color: #3773F6;
                font-size:17px;
                border-radius: 8px;
                // border: 0;
            }
        }
        .contentWenziBox{
            margin: 30px 0 20px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #DBDBDB;
            font-size: 13px;
        }
    }
</style>

<template>
    <div class="homeConetentBox">
            <div class="homeConetent_one">
                <div class="homeConetent_cont">
                    <span>今日汇总</span>
                    <div class="homeConetent_cont_a" @click="$router.push({path:'/Summarizing'})">
                        全部
                    </div>
                    
                </div>
                <ul class="homeConetent_top" :style="styleCss">
                    <li v-for="(item,key) in LiList" :key="key" :style="liCss" @click="TapRecord(item)">
                        <div class="homeConetent_top_left" :style="homeConetent_top_leftCss">
                            <img :src="item.icon" :style="imgCss">
                            <span :style="spanCss">{{item.letter}}</span>
                        </div>
                        <div class="homeConetent_top_right" :style="homeConetent_top_right">
                            <span>{{item.money}}</span>
                            <a><img :src="item.rightArrow" :style="rightArrowCss"></a>
                        </div>
                    </li>
                </ul>
            </div>
            
            <div class="homeConetent_two">
                <div class="homeConetent_cont_two">
                    <span>收款记录</span>
                    <span @click="$router.push({path:'/CollectionRecord'})">全部</span>
                </div>
                <ul class="homeConetent_top" :style="styleCss">
                    <li v-for="(item,key) in LiListTwo" :key="key" :style="liCss" @click="TapRecords(item)">
                        <div class="homeConetent_top_left" :style="homeConetent_top_leftCss">
                            <img :src="item.icon" :style="imgCss">
                            <span :style="spanCss">{{item.letter}}</span>
                        </div>
                        <div class="homeConetent_top_right" :style="homeConetent_top_right">
                            <span>{{item.money}}</span>
                            <a><img :src="item.rightArrow" :style="rightArrowCss"></a>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="contentSet" @click="$router.push({path:'Sets'})">
                <button class="btn" type="submit">设置</button>
            </div>

            <div class="contentWenziBox">
                <span class="contentWenzi">HUILEAGUE(CAMBODIA)</span>
            </div>
            
    </div>
</template>

<script>
export default {
    name:'HomeContent',
    data(){
        return{
            styleCss:{
                "font-size":"15px",
                color: "#333333",
                display:"flex",
                "flex-direction":"column",
                margin:"0 15px"
            },
            liCss:{
                display:"flex",
                width:"100%",
                height:"44px",
                "justify-content":"space-between",
                "align-items":"center",
                "border-top":"0.5PX solid #E8E8E8"

            },
            homeConetent_top_leftCss:{
                display:"flex",
                "align-items":"center"
            },
            imgCss:{
                width:"25px",
                height:"25px"
            },
            spanCss:{
                "margin-left":"15px"
            },
            homeConetent_top_right:{
                display:"felx",
                "align-items":"center"
            },
            rightArrowCss:{
                color:"#999999",
                width:"6.52px",
                height:"12.02px",
                marginLeft:"8px",
            },
            LiList:[
                {
                    icon:require('../../../assets/image/home/huimoney.png'),
                    letter:'USD',
                    money:'$1,00000',
                    rightArrow:require('../../../assets/image/home/icon／箭头.png'),
                    list: [
                        {
                            key: '$100',
                            value: '08:10'
                        },
                        {
                            key: '$101',
                            value: '08:20'
                        }
                    ]
                },
                 {
                    icon:require('../../../assets/image/home/huimoney.png'),
                    letter:'KHR',
                    money:'R1,00000',
                    rightArrow:require('../../../assets/image/home/icon／箭头.png'),
                    list: [
                        {
                            key: 'R100',
                            value: '08:10'
                        },
                        {
                            key: 'R101',
                            value: '08:20'
                        }
                    ]
                },
                 {
                    icon:require('../../../assets/image/home/huimoney.png'),
                    letter:'CNY',
                    money:'￥1,00000',
                    rightArrow:require('../../../assets/image/home/icon／箭头.png'),
                    list: []
                }, 
                 {
                    icon:require('../../../assets/image/home/huimoney.png'),
                    letter:'USDT-ERC',
                    money:'100000',
                    rightArrow:require('../../../assets/image/home/icon／箭头.png'),
                    list: []
                }
            ],
            LiListTwo:[
                 {
                    icon:require('../../../assets/image/home/huimoney.png'),
                    letter:'USD',
                    money:'$1,000',
                    rightArrow:require('../../../assets/image/home/icon／箭头.png'),
                    route:'/Record',
                    list: [
                        {
                            key: '$100',
                            value: '08:10'
                        },
                        {
                            key: '$101',
                            value: '08:20'
                        }
                    ]
                },
                 {
                    icon:require('../../../assets/image/home/huimoney.png'),
                    letter:'KHR',
                    money:'R1,000',
                    rightArrow:require('../../../assets/image/home/icon／箭头.png'),
                    list: [
                        {
                            key: 'R100',
                            value: '08:10'
                        },
                        {
                            key: 'R101',
                            value: '08:20'
                        }
                    ]
                },
                 {
                    icon:require('../../../assets/image/home/huimoney.png'),
                    letter:'CNY',
                    money:'￥1,000',
                    rightArrow:require('../../../assets/image/home/icon／箭头.png'),
                    list: []
                }, 
                 {
                    icon:require('../../../assets/image/home/huimoney.png'),
                    letter:'USDT-ERC',
                    money:'1000',
                    rightArrow:require('../../../assets/image/home/icon／箭头.png'),
                    list: []
                }
            ]
        }
    },
    methods: {
        // taptabs() {
        //     this.$router.push({path: '/CollectionRecord'})
        // }
        TapRecord(item) {//路由传参
            this.$router.push({
                name: 'Record',
                params: item
            })
        },
        TapRecords(item) {//路由传参
            this.$router.push({
                name: 'Record',
                params: item
            })
        }
    },
}
</script>

