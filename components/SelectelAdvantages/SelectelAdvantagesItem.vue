<!-- trust resource -->
<!-- eslint-disable vue/no-v-html -->
<template>
  <li class="advantage">
    <h3
      v-html="title"
    />
    <div class="advantage__content">
      <img
        class="advantage__content-image"
        :src="image"
        alt="main advantages"
      >
      <div
        class="advantage__content-text"
        v-html="content"
      />
    </div>
  </li>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.advantage {
  border-top: solid 1px $border-top-color;
  padding: 23px 0 32px;

  &__content {
    display: flex;
    margin-top: 24px;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }

    &-text {
      li {
        list-style: '—';
        padding-left: 5px;
        font-size: 16px;
        line-height: 130%;

        &:not(:first-child) {
          margin-top: 8px;
        }
      }

      a {
        color: inherit;
      }

      @media only screen and (max-width: 768px) {
          margin-top: 16px;
          padding-left: 16px;
      }
    }

    &-image {
      max-width: 168px;
      align-self: flex-start;
      margin-right: 98px;
    }
  }
}
</style>
