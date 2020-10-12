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
    }
}
</script>

<style lang="scss" scoped>
    .container{
        width: 100%;
        height: 100%;
        // overflow: hidden;
        background: #F5F6FA;
        position: relative;
    }
</style>>