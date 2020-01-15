<template>
  <div id="home">
    <main>
      <Introduction/>
      <Button>
        <template #image>
          <img src="@/assets/profile.jpg"/>
        </template>
        Arrange consultation
      </Button>
    </main>
  </div>
</template>

<script>
  import Introduction from '@/components/Introduction/Introduction'
  import Button from '@/components/Button/Button'

  export default {
    name: 'Home',
    components: {
      Button,
      Introduction
    }
  }
</script>

<style lang="stylus" src="./Home.styl">
</style>
