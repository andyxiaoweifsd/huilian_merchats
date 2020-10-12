<style lang="scss" scoped>
    .container{
        width: 100%;
        height: 100%;
        .usdBox{
            width: 100%;
            height: 44px;
            background: #ffffff;
            display: flex;
            align-items: center;
            color: #333333;
            font-size: 18px;
            .usdBoxImg{
                width: 18.39px;
                height: 18.39px;
                color: #2C2925;
                margin-left: 15px;
            }
            .usdBoxSpan{
                margin: 0 auto;
            }
            
        }
        .usdContent{
            margin-top: 20px;
            background: #ffffff;
            .usdContentUl{
                margin: 0 15px;
                .usdContentUlLi{
                    width: 100%;
                    height: 44px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 15px;
                    color: #333333;
                    .usdSpanTwo{
                        color: #999999;
                    }
                }
                

            }
        }
    }
</style>

<template>
    <div class="container">
        <div class="usdBox">
            <img src="../../assets/image/goback/icon_nav_back_48x48.png" class="usdBoxImg" @click="gogack">
            <span class="usdBoxSpan">{{title}}</span>
        </div>
        <div class="usdContent">
            <ul class="usdContentUl" v-show="list.length">
                <li 
                    class="usdContentUlLi" 
                    style="border-bottom: 0.5PX solid #e8e8e8"
                    v-for="(item, key) in list"
                    :key = key
                >
                    <span>{{item.key}}</span>
                    <span class="usdSpanTwo">{{item.value}}</span>
                </li>
            </ul>
            <div v-show="flag">
                <h1>暂无历史记录</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Record',
    data() {
        return {
            list: [],
            title: 'USD',
            flag: false
        }
    },
    mounted() {
        console.log('路由获取', this.$route)
        const { list, letter } = this.$route.params
        this.title = letter
        setTimeout(() => {
            if (!list.length) {
                this.flag = true
                return
            }
            this.list = list
        }, 1000);
    },
    methods:{
        gogack(){
            this.$router.go(-1)
        }
    }
}
</script>



