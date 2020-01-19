<template>
  <div class="services">
    <Hero title="Services">
      My quality services are designed to help people with their personal,
      business, and financial goals by making available economical, value-added
      and timely protection options.
    </Hero>

    <Flickity
      ref="flickity"
      :options="flickityOptions">
      <div class="carousel-cell">
        <ServiceCard
          source="umbrella"
          title="Life insurance">
          Ensure your family’s financial security and happiness in your absence.
        </ServiceCard>
      </div>
      <div class="carousel-cell">
        <ServiceCard
          source="treatment"
          title="Critical illness insurance">
          Prevent critical illness from taking a toll on your family's savings.
        </ServiceCard>
      </div>
      <div class="carousel-cell">
        <ServiceCard
          source="staff"
          title="Bussiness succession planning">
          Continue your business' success by appointing the right successor.
        </ServiceCard>
      </div>
      <div class="carousel-cell">
        <ServiceCard
          source="elderly"
          title="Retirement planning">
          Invest wisely now to enjoy the golden years of your life worry-free.
        </ServiceCard>
      </div>
      <div class="carousel-cell">
        <ServiceCard
          source="tax"
          title="Debt elimination">
          Eliminate debt and lead a life free of the stress of repayment.
        </ServiceCard>
      </div>
      <div class="carousel-cell">
        <ServiceCard
          source="pie"
          title="Budgeting">
          Learn how to create a budget and project future cash flows.
        </ServiceCard>
      </div>
      <div class="carousel-cell">
        <ServiceCard
          source="university"
          title="Education planning">
          Give wings to your child’s dreams by saving for their education.
        </ServiceCard>
      </div>
      <div class="carousel-cell">
        <ServiceCard
          source="goal"
          title="Goal strategising">
          Strategise and make plans to achieve your short and long term goals.
        </ServiceCard>
      </div>
    </Flickity>
  </div>
</template>

<script>
  import Flickity from 'vue-flickity'

  import ServiceCard from '@/components/Services/ServiceCard'
  import Hero from '@/components/Hero/Hero'

  export default {
    name: 'Services',
    components: {
      Flickity,

      Hero,
      ServiceCard
    },
    data: () => ({
      flickityOptions: {
        autoPlay: 5000,
        prevNextButtons: false,
        wrapAround: true
      }
    })
  }
</script>

<style scoped lang="stylus" src="./Services.styl">
</style>
