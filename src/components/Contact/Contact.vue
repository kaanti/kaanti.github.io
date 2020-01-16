<template>
  <div class="contact">
    <Hero title="Find me">
      If you prefer to contact me instead instead of the other way round,
      I'm available to discuss your finances at any time via the following
      channels.
    </Hero>

    <div class="grid">
      <div class="cell" :class="cellClasses">
        <Card class="card">
          <h4>Address</h4>
          <iframe
            class="map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=55.26883721351624%2C25.193786900801577%2C55.27705550193787%2C25.19975731984326&amp;layer=mapnik">
          </iframe>
          <p>
            Burj Khalifa,<br/>
            Dubai, UAE
          </p>
        </Card>
      </div>

      <div class="cell" :class="cellClasses">
        <Card class="card">
          <h4>Contact</h4>
          <p>
            Coming soon.
          </p>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
  import Hero from '@/components/Hero/Hero'
  import Card from '@/generics/Card/Card'

  export default {
    name: 'Contact',
    components: {
      Hero,
      Card
    },
    data: () => ({
      cellClasses: [
        'phone-12-wide',
        'tablet-portrait-6-wide',
        'tablet-landscape-6-wide',
        'desktop-6-wide',
        'big-desktop-6-wide'
      ]
    })
  }
</script>

<style scoped lang="stylus" src="./Contact.styl">
</style>
