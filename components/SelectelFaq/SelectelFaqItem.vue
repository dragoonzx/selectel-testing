<!-- trust resource -->
<!-- eslint-disable vue/no-v-html -->
<template>
  <div :class="['faq-item', { 'is-show': isShow }]">
    <div class="faq-item__question" @click="isShow = !isShow">
      <span v-html="question" />
      <div class="faq-item__icon">
        <component :is="isShow ? 'MinusIcon' : 'PlusIcon'" />
      </div>
    </div>
    <transition name="slide">
      <div v-if="isShow" class="faq-item__answer" v-html="answer" />
    </transition>
  </div>
</template>

<script>
import PlusIcon from '@/assets/svg/plus.svg'
import MinusIcon from '@/assets/svg/minus.svg'

export default {
  components: { PlusIcon, MinusIcon },
  props: {
    question: {
      type: String,
      default: ''
    },
    answer: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isShow: false
    }
  }
}
</script>

<style lang="scss">
.faq-item {
  padding-top: 24px;
  border-top: 1px solid $border-top-color;

  &.is-show {
    padding-bottom: 24px;
  }

  &__icon {
    display: inline-flex;
    align-items: center;
    height: 32px;
  }

  &__question {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 24px;
    cursor: pointer;

    span {
      display: block;
      max-width: calc(100% - 52px);
      font-style: normal;
      font-weight: normal;
      font-size: 1.5rem;
      line-height: 140%;
      color: $data-blue;
    }
  }

  &__answer {
    a {
      color: inherit;
    }
  }
}

.slide-enter-active {
   transition-duration: 0.25s;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   transition-duration: 0.25s;
   transition-timing-function: cubic-bezier(0, 1, 0.4, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 100px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}
</style>
