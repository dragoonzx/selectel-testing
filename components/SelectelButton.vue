<template>
  <form
    style="display: inline"
    :action="link"
    method="get"
  >
    <button
      class="button"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot>Дефолтная кнопка</slot>
    </button>
  </form>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.button {
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  line-height: 140%;
  text-transform: uppercase;
  padding: 16px 32px;
  background: $data-white;
  border: 1px solid $data-blue;
  border-radius: 6px;
  transition: all ease .2s;
  cursor: pointer;

  &:hover {
    background: $data-blue;
    color: $data-white;
    border: 1px solid $data-white;
  }
}
</style>
