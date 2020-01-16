<template>
  <div class="navigation">
    <div class="branding">
      <RouterLink
        class="router-link"
        :to="{name: 'home'}">
        <h3>KB</h3>
      </RouterLink>
    </div>
    <nav>
      <RouterLink
        v-for="(link, index) in navigationLinks"
        :key="index"
        class="router-link"
        :to="{name: link.name}">
        <img
          class="icon"
          :src="imageSource(link.icon)"
          :alt="link.name"/>
        <span class="text">{{ link.text }}</span>
      </RouterLink>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Navigation',
    data: () => ({
      navigationLinks: [
        {
          name: 'about',
          text: 'About',
          icon: 'person'
        },
        {
          name: 'consultation',
          text: 'Consultation',
          icon: 'meeting'
        }
      ]
    }),
    methods: {
      imageSource (name) {
        return require(`@/assets/navigation/${name}.png`)
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Navigation.styl">
</style>
