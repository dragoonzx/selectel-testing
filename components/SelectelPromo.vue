<!-- trust resource -->
<!-- eslint-disable vue/no-v-html -->
<template>
  <section class="promo">
    <div class="container row middle-xs between-xs">
      <h2>{{ promoData.title }}</h2>
      <div class="promo__wrapper">
        <p
          class="subtitle"
          v-html="promoData.subtitle"
        />
        <selectel-button
          class="promo__button"
          :link="promoData.button.link"
        >
          {{ promoData.button.text }}
        </selectel-button>
      </div>
    </div>
  </section>
</template>

<script>
import SelectelButton from '@/components/SelectelButton'

export default {
  components: {
    SelectelButton
  },
  computed: {
    promoData () {
      return this.$store.getters['content/getPromo']
    }
  }
}
</script>

<style lang="scss">
.promo {
  display: flex;
  padding: 42px 0 96px;
}
</style>
