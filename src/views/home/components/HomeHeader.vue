<style lang="scss" scoped>
    .headeBox{
        width: 100%;
        position: relative;
        // background: #F5F6FA;
        .home_header{
            width: 100%;
            height: 210px;
            .home_header_img{
                width: 100%;
                height: 100%;
                // position: relative;
            }
            .cashierDeskBox{
                position: absolute;
                top: 44px;
                width: 100%;
                height:44px;
                color: #FFFFFF;
                font-size: 18px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .cashierDeskBox_b{
                width: 100%;
                 position: absolute;
                 bottom: 42.5px;
                 display: flex;
                 align-items: center;
                 justify-content: space-around;
                .cashierDeskBox_b_l{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 70px;
                    height: 70px;
                    font-size: 14px;
                    margin-left: 60px;
                    color: #FFFFFF;
                    .cashierDeskBox_b_l_t{
                        width: 40px;
                        height: 40px;
                    }
                    .cashierDeskBox_b_l_b{
                       margin-top: 2px;
                    }
                }
                .cashierDeskBox_b_r{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 70px;
                    height: 70px;
                    font-size: 14px;
                    margin-right: 60px;
                    color: #FFFFFF;
                }
            }
        }
    }
</style>

<template>
    <div class="headeBox">
        <div class="home_header">
            <img src="../../../assets/image/home/toubudise_beijing.png" class="home_header_img">

            <div class="cashierDeskBox">
                <span class="cashierDesk">{{cashierDesk}}</span>
            </div>
            
            <div class="cashierDeskBox_b">
                <div class="cashierDeskBox_b_l">
                    <img src="../../../assets/image/home/icon_home_scan_80x80.png" class="cashierDeskBox_b_l_t">
                    <span class="cashierDeskBox_b_l_b">扫一扫</span>
                </div>
                <div class="cashierDeskBox_b_r" @click="$router.push({path:'/Collection'})">
                    <img src="../../../assets/image/home/icon_home_collect_80x80.png" class="cashierDeskBox_b_l_t">
                    <span class="cashierDeskBox_b_l_b">收款码</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'HomeHeader',
    data(){
        return{
            cashierDesk:"汇联收银端"
        }
    }
}
</script>

