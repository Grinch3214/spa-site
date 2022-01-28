<template>
  <div class="registration-page container">
    <div class="registration-page__wrapper">
      <nav
        class="
          registration-page__nav
          d-flex
          justify-content-between
          align-items-center
          flex-wrap
        "
      >
        <div class="flex-grow-1">
          <a href="#" class="registration-page__nav-logo">
            <img
              :src="require('../../assets/images/logo_footer.svg')"
              alt="logo"
            />
          </a>
        </div>

        <div>
          <change-language />
        </div>

        <div class="registration-page__nav-tabs d-flex justify-content-between">
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

      <h1 class="registration-page__title main-title">Регистрация</h1>

      <keep-alive>
        <component :is="componentRegistration" />
      </keep-alive>
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
  .dropdown,
  .dropholder {
    background: transparent;
    color: #222536;
  }
  .dropdown {
    &::after {
      border-top: 1px solid #528be6;
      border-left: 1px solid #528be6;
    }
  }
  .dropdown-option {
    background: #fff;
    li {
      color: #222536;
    }
  }

  &__wrapper {
    max-width: 350px;
    margin: 0 auto;
  }

  &__nav {
    padding-top: 16px;
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
    button {
      padding-bottom: 8px;
      width: 50%;
    }
  }

  &__title {
    font-size: 30px;
    padding-bottom: 25px;
  }
}
</style>