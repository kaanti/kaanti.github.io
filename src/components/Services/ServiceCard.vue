<template>
  <Card class="service-card">
    <img
      class="representation"
      :src="imageSource"
      :alt="title"/>
    <h4 class="heading">
      {{ title }}
    </h4>
    <p>
      <slot/>
    </p>
  </Card>
</template>

<script>
  import Card from '@/generics/Card/Card'

  export default {
    name: 'ServiceCard',
    components: {
      Card
    },
    props: {
      source: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      }
    },
    computed: {
      imageSource () {
        return require(`@/assets/icons/${this.source}.png`)
      }
    }
  }
</script>

<style scoped lang="stylus" src="./ServiceCard.styl">
</style>

<style scoped>

</style>
