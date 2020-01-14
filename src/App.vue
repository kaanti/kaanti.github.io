<template>
  <div id="app">
    <Navigation/>

    <RouterView/>
  </div>
</template>

<style lang="stylus" src="./App.styl">
</style>
<script>
  import Navigation from '@/components/Navigation/Navigation'

  export default {
    name: 'App',
    components: {
      Navigation
    }
  }
</script>
