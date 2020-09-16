<template>
  <div>
    <selectel-header />
    <Nuxt />
    <selectel-footer />
  </div>
</template>

<script>
import SelectelHeader from '@/components/SelectelHeader'
import SelectelFooter from '@/components/SelectelFooter'

export default {
  components: {
    SelectelHeader,
    SelectelFooter
  }
}
</script>
