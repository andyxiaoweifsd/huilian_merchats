<template>
  <div id="app" class="app" :style="{'height': height}">
   
    <router-view/>
  </div>
</template>


<script>
export default {
  data() {
    return {
      height: ''
    }
  },
  mounted() {
    this.height = window.innerHeight + 'px'
  }
}
</script>

<style lang="scss">
  #app {
    width: 100vw;
  }
</style>
