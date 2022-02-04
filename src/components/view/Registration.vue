<template>
  <div class="registration-page d-flex flex-column">
    <div class="registration-page__wrapper container flex-grow-1">
      <nav
        class="
          registration-page__nav
          d-flex
          justify-content-between
          align-items-center
          flex-wrap
        "
      >
        <div class="flex-grow-1 flex-md-grow-0 order-1 order-md-1">
          <a href="#" class="registration-page__nav-logo">
            <img
              :src="require('../../assets/images/logo_footer.svg')"
              alt="logo"
            />
          </a>
        </div>

        <div class="order-2 order-md-3">
          <change-language />
        </div>

        <div class="registration-page__nav-tabs d-flex justify-content-between order-3 order-md-2">
          <button
            class="main-tab"
            :class="{ active: tabContent }"
            @click="tabContent = true"
          >
            Соискатель
          </button>
          <button
            class="main-tab"
            :class="{ active: !tabContent }"
            @click="tabContent = false"
          >
            Компании
          </button>
        </div>
      </nav>

      <keep-alive>
        <component :is="componentRegistration" />
      </keep-alive>
    </div>
    <div class="footer d-lg-none">
      <div class="background-figure"></div>
    </div>
    

  </div>
</template>

<script>
import ChangeLanguage from "../ChangeLanguage.vue";
import RegistrationApplication from "../registration/RegistrationApplication.vue";
import RegistrationEmployer from "../registration/RegistrationEmployer.vue";

export default {
  name: "Registration",
  components: {
    RegistrationApplication,
    RegistrationEmployer,
    ChangeLanguage,
  },
  data() {
    return {
      tabContent: true,
    };
  },
  computed: {
    componentRegistration() {
      if (this.tabContent) {
        return "RegistrationApplication";
      }
      return "RegistrationEmployer";
    },
  },
};
</script>

<style lang="scss">
.registration-page {
  position: relative;
  min-height: 100vh;
  @media screen and (min-width: 992px) {
    &::before {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      width: 35%;
      height: 100%;
      background: url('~@/assets/images/right_bg.svg') 0 0/cover no-repeat;
      @media screen and (min-width: 1680px) {
      width: 29%;
    }
    }
  }

  .dropdown,
  .dropholder {
    background: transparent;
    color: #222536;
    @media screen and (min-width: 992px) {
      color: #fff;
    }
    @media screen and (min-width: 1680px) {
      color: #222536;
    }
  }
  .dropdown {
    &::after {
      border-top: 1px solid #528be6;
      border-left: 1px solid #528be6;
      @media screen and (min-width: 992px) {
        border-top: 1px solid #fff;
        border-left: 1px solid #fff;
      }
      @media screen and (min-width: 1680px) {
        border-top: 1px solid #528be6;
      border-left: 1px solid #528be6;
      }
    }
  }
  .dropdown-option {
    background: #fff;
    li {
      color: #222536;
    }
    @media screen and (min-width: 992px) {
        background: transparent;
        li {
          color: #fff;
        }
    }
    @media screen and (min-width: 1680px) {
        li {
          color: #222536;
        }
    }
  }

  &__wrapper {
    position: relative;
  }

  &__nav {
    max-width: 382px;
    margin: 0 auto;
    padding-top: 16px;
    @media screen and (min-width: 768px) {
      margin-bottom: 139px;
      max-width: none;
    }
  }

  &__nav-logo {
    display: inline-block;
    max-width: 141px;
    height: auto;
    img {
      width: 100%;
    }
  }

  &__nav-tabs {
    width: 100%;
    padding-top: 32px;
    padding-bottom: 36px;
    @media screen and (min-width: 768px) {
      width: auto;
      padding: 0;
      margin-right: auto;
      margin-left: 39px;
    }
    button {
      padding-bottom: 8px;
      width: 50%;
      margin-right: 34px;
      padding-left: 0;
      padding-right: 0;
    }
  }

  .footer {
    padding-bottom: 190px;
    &:before {
      top: -165px;
    }
  }

  .background-figure {
    &:after {
      left: -20%;
    }
  }

}
</style>