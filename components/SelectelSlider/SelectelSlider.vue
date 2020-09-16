<template>
  <section class="slider">
    <div class="container--wide">
      <swiper v-swiper="swiperOption">
        <swiper-slide v-for="item in banners" :key="item.id">
          <selectel-slider-item
            :title="item.title"
            :description="item.description"
            :btn="item.button"
          />
        </swiper-slide>
        <div slot="button-prev" class="swiper__button swiper__button-prev">
          <prev-icon />
        </div>
        <div slot="pagination" class="swiper-pagination" />
        <div slot="button-next" class="swiper__button swiper__button-next">
          <next-icon />
        </div>
      </swiper>
    </div>
  </section>
</template>

<script>
import SelectelSliderItem from '@/components/SelectelSlider/SelectelSliderItem'
import PrevIcon from '@/assets/svg/prev.svg'
import NextIcon from '@/assets/svg/next.svg'

export default {
  components: { PrevIcon, NextIcon, SelectelSliderItem },
  data () {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        navigation: {
          nextEl: '.swiper__button-next',
          prevEl: '.swiper__button-prev'
        }
      }
    }
  },
  computed: {
    banners () {
      return this.$store.getters['content/getSlider']
    }
  }
}
</script>

<style lang="scss">
.slider {
  display: flex;
  align-items: flex-end;
  background: url('~static/images/main-slide.png') no-repeat center;
  background-size: cover;
  min-height: 620px;

  .swiper {
    &-container {
      padding-bottom: 32px;
      height: 100%;
    }

    &-slide {
      display: flex;
      align-items: center;
      height: 100%;
    }

    &__button {
      display: inline-flex;
      cursor: pointer;
      position: absolute;
      bottom: 36px;
      z-index: 12;

      &-prev {
        left: calc(50% - 58px);

        @media only screen and (max-width: 560px) {
          right: 76px;
          left: auto;
        }
      }

      &-next {
        left: calc(50% + 36px);

        @media only screen and (max-width: 560px) {
          right: 0;
          left: auto;
        }
      }
    }

    &-pagination {
      display: inline-flex;
      width: 100px;
      bottom: 42px;
      position: absolute;
      left: calc(50% - 50px);
      justify-content: center;
      font-style: normal;
      font-weight: normal;
      font-size: 1.125rem;
      line-height: 140%;
      text-align: center;
      color: $data-white;

      @media only screen and (max-width: 560px) {
        right: 0;
        left: auto;
      }

      span {
        padding: 0 8px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .main-banner-section {
      height: 400px;
    }

    .swiper {
      &-container {
        padding-bottom: 32px;
      }

      &__button {
        bottom: 36px;

        &_prev {
          left: 16px;
        }

        &_next {
          left: unset;
          right: 16px;
        }
      }
    }
  }
}
</style>
