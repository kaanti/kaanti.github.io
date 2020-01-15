<template>
  <div class="navigation">
    <div class="branding">
      <RouterLink to="/"><h3>KB</h3></RouterLink>
    </div>
    <nav>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Navigation'
  }
</script>

<style scoped lang="stylus" src="./Navigation.styl">
</style>
