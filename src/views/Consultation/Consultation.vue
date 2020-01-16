<template>
  <div id="consultation">
    <section>
      <main>
        <Hero title="Consultation">
          Schedule a short consultation call to begin a long-lasting
          professional relationship. Fill out the form and I'll reach out to you
          as early as possible.
        </Hero>
      </main>
    </section>

    <section>
      <div ref="typeform" class="form">
      </div>
    </section>

    <section>
      <main>
        <Contact/>
      </main>
    </section>
  </div>
</template>

<script>
  import { makeWidget } from '@typeform/embed'

  import Hero from '@/components/Hero/Hero'
  import Contact from '@/components/Contact/Contact'

  export default {
    name: 'Consultation',
    components: {
      Contact,
      Hero
    },
    mounted () {
      if (process.env.NODE_ENV !== 'development') {
        makeWidget(
          this.$refs.typeform,
          'https://dhruvkb.typeform.com/to/St6fEy',
          {
            opacity: 0,
            hideHeaders: true,
            hideFooter: true
          }
        )
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Consultation.styl">
</style>
