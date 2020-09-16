<template>
  <!-- eslint-disable vue/no-v-html -->
  <li class="product">
    <a
      class="product__link"
      :href="link"
    >
      <h3
        class="product__title"
        v-html="title"
      />
      <p
        class="product__description"
        v-html="description"
      />
    </a>
  </li>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.product {
  background: $data-white;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 4px 16px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 24px 24px 32px;
  transition: all ease .2s;

  &:hover {
    transform: scale(1.03);
  }

  &__link {
    color: inherit;
    text-decoration: none;
  }

  &__title {
    font-size: 24px;
    line-height: 140%;
    margin-bottom: 12px;
  }

  &__description {
    font-size: 16px;
    line-height: 124%;
  }
}
</style>
