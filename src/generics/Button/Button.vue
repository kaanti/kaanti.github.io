<template>
  <button type="button" class="button">
    <div class="left addon" v-if="$slots.addonLeft">
      <slot name="addonLeft"/>
    </div>
    <div class="content">
      <slot/>
    </div>
    <div class="right addon" v-if="$slots.addonRight">
      <slot name="addonRight"/>
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
