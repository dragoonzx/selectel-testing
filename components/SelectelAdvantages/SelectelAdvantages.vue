<!-- trust resource -->
<!-- eslint-disable vue/no-v-html -->
<template>
  <section class="advantages">
    <div
      class="container row middle-xs between-xs"
    >
      <h2
        v-html="advantagesData.title"
      />
      <p
        class="subtitle"
        v-html="advantagesData.subtitle"
      />
      <ul class="advantages__list">
        <selectel-advantages-item
          v-for="item in advantagesData.items"
          :key="item.id"
          :image="item.image"
          :title="item.title"
          :content="item.content"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import SelectelAdvantagesItem from '@/components/SelectelAdvantages/SelectelAdvantagesItem'

export default {
  components: {
    SelectelAdvantagesItem
  },
  computed: {
    advantagesData () {
      return this.$store.getters['content/getAdvantages']
    }
  }
}
</script>

<style lang="scss">
.advantages {
  margin: 0 0 96px;
  color: $data-blue;
}
</style>
