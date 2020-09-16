<!-- trust resource -->
<!-- eslint-disable vue/no-v-html -->
<template>
  <section class="products">
    <div
      class="container"
    >
      <h2
        v-html="productsData.title"
      />
      <p
        class="subtitle"
        v-html="productsData.subtitle"
      />
      <ul class="products__container">
        <selectel-products-item
          v-for="item in productsData.items"
          :key="item.id"
          :link="item.link"
          :title="item.title"
          :description="item.description"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import SelectelProductsItem from '@/components/SelectelProducts/SelectelProductsItem'

export default {
  components: {
    SelectelProductsItem
  },
  computed: {
    productsData () {
      return this.$store.getters['content/getProducts']
    }
  }
}
</script>

<style lang="scss">
.products {
  background: rgba(217, 217, 214, 0.3);
  display: flex;
  padding: 48px 0 80px;
  color: #092433;

  &__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    grid-gap: 16px;

    @media only screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
