<template>
  <div id="home">
    <section>
      <main>
        <Introduction/>
        <RouterLink :to="{name: 'consultation'}">
          <Button title="Schedule a consultation">
            <template #addonLeft>
              <img
                class="profile"
                src="@/assets/profile.jpg"
                alt="Kanti Bhanushali"/>
            </template>
            Book a discovery call
            <template #addonRight>
              <Arrow/>
            </template>
          </Button>
        </RouterLink>
      </main>
    </section>

    <section>
      <main>
        <Services/>
      </main>
    </section>
  </div>
</template>

<script>
  import Button from '@/generics/Button/Button'
  import Introduction from '@/components/Introduction/Introduction'
  import Services from '@/components/Services/Services'
  import Arrow from '@/generics/Arrow/Arrow'

  export default {
    name: 'Home',
    components: {
      Arrow,
      Button,
      Introduction,
      Services
    }
  }
</script>

<style scoped lang="stylus" src="./Home.styl">
</style>
