
<template>
  <footer class="footer">
    <div class="container--wide">
      <div class="footer__layout">
        <div class="footer__cell">
          <a class="footer__logo" href="/">
            <footer-logo-icon />
          </a>
        </div>
        <div class="footer__cell">
          <nav class="footer__nav">
            <ul>
              <li><a href="#">Серверы</a></li>
              <li><a href="#">Оборудование</a></li>
              <li><a href="#">Дата-центры</a></li>
              <li><a href="#">Блог</a></li>
              <li><a href="#">Облако</a></li>
              <li><a href="#">Решения</a></li>
              <li><a href="#">О компании</a></li>
              <li><a href="#">Офисы</a></li>
            </ul>
          </nav>
        </div>
        <div class="footer__cell">
          <div class="footer__description">
            <span>© ООО «Селектел», 2008—{{ currentYear }}</span>
            <span>Лицензия на телематические <br> услуги №176266 и №176267</span>
          </div>
        </div>
        <div class="row footer__cell">
          <div class="footer__social">
            <a href="#" target="_blank"><tg-icon /></a>
            <a href="#" target="_blank"><fb-icon /></a>
            <a href="#" target="_blank"><vk-icon /></a>
            <a href="#" target="_blank"><twitter-icon /></a>
            <a href="#" target="_blank"><habr-icon /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterLogoIcon from '@/assets/svg/footer-logo.svg'
import TgIcon from '@/assets/svg/tg.svg'
import FbIcon from '@/assets/svg/fb.svg'
import VkIcon from '@/assets/svg/vk.svg'
import TwitterIcon from '@/assets/svg/twitter.svg'
import HabrIcon from '@/assets/svg/habr.svg'

export default {
  components: {
    FooterLogoIcon,
    TgIcon,
    FbIcon,
    VkIcon,
    TwitterIcon,
    HabrIcon
  },
  data () {
    return {
      currentYear: 1980
    }
  },
  mounted () {
    this.currentYear = new Date().getFullYear()
  }
}
</script>

<style lang="scss">
.footer {
  background: $data-blue;
  padding: 80px 0;

  @media only screen and (max-width: 1200px) {
    padding: 40px 0;
  }

  &__cell {
    @for $i from 1 through 4 {
      &:nth-child(#{$i}) {
        grid-area: x#{$i};
      }
    }

    @media only screen and (max-width: 1200px) {
      &:nth-child(1) {
        margin-bottom: 40px;
      }
      &:nth-child(4) {
        margin-bottom: 60px;
      }
      &:nth-child(2) {
        margin-bottom: 80px;
      }
    }
  }

  &__logo {
    svg {
      transition: all ease .2s;

      &:hover {
        g {
          fill: $data-red;
        }
      }
    }

    @media screen and (max-width: 375px) {
      svg {
        width: 240px;
      }
    }
  }

  &__layout {
    display: grid;
    grid-template-columns: 45% 55%;
    row-gap: 32px;
    grid-template-areas: "x1 x2" "x3 x4";

    @media only screen and (max-width: 1200px) {
      grid-template-columns: 100%;
      row-gap: 0;
      grid-template-areas: "x1" "x4" "x2" "x3";
    }
  }

  &__social {
    display: flex;
    align-items: center;

    a {
      display: inline-flex;
      align-items: center;
      & + a {
        margin-left: 20px;
      }
    }

    svg {
      transition: all ease .2s;

      &:hover {
        path {
          fill: $data-red;
        }
      }
    }
  }

  &__description {
    span {
      display: block;
      max-width: 220px;
      font-style: normal;
      font-weight: normal;
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: #FFFFFF;
      opacity: 0.5;
    }
  }

  &__nav {
    ul {
      display: grid;
      grid-template-columns: repeat(4, 25%);
      row-gap: 16px;

      a {
        text-decoration: none;
        font-style: normal;
        font-weight: 600;
        font-size: 1.125rem;
        line-height: 1.5rem;
        color: $data-white;
        transition: all ease .2s;

        &:hover {
          color: $data-red;
        }
      }

      @media only screen and (max-width: 590px) {
        grid-template-columns: repeat(3, 33%);
      }

      @media only screen and (max-width: 480px) {
        grid-template-columns: repeat(2, 50%);
      }
    }
  }
}
</style>
