<template>
  <header class="header">
    <div class="container--wide row middle-xs between-xs">
      <header-logo class="header__logo" />
      <div class="header__wrapper">
        <a
          href="tel:+78005550675"
          class="header__link"
        >
          <span>8 800 555 06 75</span>
          <phone-icon />
        </a>
        <a
          href="mailto:sales@selectel.ru"
          class="header__link"
        >
          <span>sales@selectel.ru</span>
          <mail-icon />
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderLogo from '@/assets/svg/header-logo.svg'
import PhoneIcon from '@/assets/svg/phone.svg'
import MailIcon from '@/assets/svg/mail.svg'

export default {
  components: {
    HeaderLogo,
    PhoneIcon,
    MailIcon
  }
}
</script>

<style lang="scss">
.header {
  padding: 28px 0;
  background: #F2F2F2;

  @media only screen and (max-width: 1200px) {
    padding: 14px 0;
  }

  &__logo {
    height: 32px;
  }

  &__link {
    color: $header-link-black;
    text-decoration: none;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 140%;
    margin-right: 32px;
    transition: all ease .2s;

    &:hover {
      color: $data-red;
    }

    svg {
      display: none;
    }

    @media only screen and (max-width: 768px) {
      svg {
        display: inline-flex;
      }

      span {
        display: none;
      }
    }

    &:last-child {
      margin: 0;
    }
  }
}
</style>
