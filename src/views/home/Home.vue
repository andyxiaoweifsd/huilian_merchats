<template>
   <div class="container">
       <home-header></home-header>
       <home-content></home-content>
   </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeContent from './components/HomeContent'
export default {
    data() {
        return {}
    },
    components: {
        HomeHeader,
        HomeContent
    },
    beforeCreate(){
        document.querySelector('body').setAttribute('style','background-color:#f5f6fa')
    }
}
</script>

<style lang="scss" scoped>
    .container{
        width: 100%;
        // height: 100%;
        // overflow: hidden;
        // background: #F5F6FA;
        position: relative;
    }
</style>>