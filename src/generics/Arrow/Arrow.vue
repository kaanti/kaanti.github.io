<template>
  <div class="arrow">
    <FontAwesomeLayers>
      <FontAwesomeIcon
        class="first icon"
        :icon="['fas', 'angle-right']"
        fixed-width/>
      <FontAwesomeIcon
        class="second icon"
        :icon="['fas', 'angle-right']"
        fixed-width/>
    </FontAwesomeLayers>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'

  library.add(faAngleRight)

  export default {
    name: 'Arrow',
    components: {
      FontAwesomeLayers,
      FontAwesomeIcon
    }
  }
</script>

<style scoped lang="stylus" src="./Arrow.styl">
</style>
