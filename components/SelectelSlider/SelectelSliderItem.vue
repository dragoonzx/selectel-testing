<!-- trust resource -->
<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="slide">
    <h1 v-html="title" />
    <p class="slide__description" v-html="description" />
    <selectel-button
      v-if="!!btn"
      :link="btn.link"
    >
      {{ btn.text }}
    </selectel-button>
  </div>
</template>

<script>
import SelectelButton from '@/components/SelectelButton'

export default {
  components: { SelectelButton },
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    btn: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
.slide {
  &__description {
    max-width: 70%;
    font-size: 1.5rem;
    line-height: 2.0625rem;
    color: $data-white;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
}

@media only screen and (max-width: 1200px) {
  .slide {
    &__title {
      font-size: 2.25rem;
      line-height: 120%;
      margin-bottom: 1rem;
    }
    &__description {
      font-size: 1.125rem;
      line-height: 1.5625rem;
    }
  }
}
</style>
