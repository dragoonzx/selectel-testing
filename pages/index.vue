<template>
  <main>
    <selectel-slider />
    <selectel-promo />
    <selectel-advantages />
    <selectel-products />
    <selectel-faq />
  </main>
</template>

<script>
import SelectelSlider from '@/components/SelectelSlider/SelectelSlider'
import SelectelPromo from '@/components/SelectelPromo'
import SelectelAdvantages from '@/components/SelectelAdvantages/SelectelAdvantages'
import SelectelProducts from '@/components/SelectelProducts/SelectelProducts'
import SelectelFaq from '@/components/SelectelFaq/SelectelFaq'

export default {
  components: {
    SelectelSlider,
    SelectelFaq,
    SelectelProducts,
    SelectelAdvantages,
    SelectelPromo
  },
  async fetch ({ store }) {
    await store.dispatch('content/fetchContent')
  }
}
</script>
