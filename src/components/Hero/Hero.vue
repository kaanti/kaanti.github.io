<template>
  <div class="hero">
    <h3>{{ title }}</h3>
    <p class="textbox">
      <slot/>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Hero',
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Hero.styl">
</style>
