<template>
  <section class="faq">
    <div
      class="container row middle-xs between-xs"
    >
      <h2>
        {{ faqData.title }}
      </h2>
      <ul class="faq__list">
        <selectel-faq-item
          v-for="item in faqData.items"
          :key="item.id"
          :answer="item.answer"
          :question="item.question"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import SelectelFaqItem from '@/components/SelectelFaq/SelectelFaqItem'

export default {
  components: {
    SelectelFaqItem
  },
  computed: {
    faqData () {
      return this.$store.getters['content/getFaq']
    }
  }
}
</script>

<style lang="scss">
.faq {
  display: flex;
  padding: 96px 0;
  color: $data-blue;

  &__list {
    width: 100%;
    margin-top: 2rem;
  }
}
</style>
