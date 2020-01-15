<template>
  <button type="button" class="button">
    <div class="image" v-if="$slots.image">
      <slot name="image"/>
    </div>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>

<script>
  export default {
    name: 'Button'
  }
</script>

<style scoped lang="stylus" src="./Button.styl">
</style>
