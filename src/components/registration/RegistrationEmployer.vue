<template>
  <div>
    <div class="registr-employer" v-if="stepOne">

      <h1 class="title-reg-page main-title">
          {{ $t('registrationButton') }}
        </h1>
      <p class="registr-employer__text">{{ $t('registrEmployerEmail') }}</p>

      <base-input 
        type="email"
        placeholder="for_example@email.com"
        v-model="email"
        :value="email"
        :validator="validateEmail"
        maxlength="48"
      />

      <p class="registr-employer__text">
        {{ $t('registrApplicantPolicyA') }}
        <a class="global-link" target="_blank" href="https://old.an.works/terms-of-use.html#privacy-policy">{{ $t('registrApplicantLink') }}</a> {{ $t('registrApplicantPolicyB') }} <a class="global-link" target="_blank" href="https://old.an.works/terms-of-use.html#privacy-policy"> {{ $t('registrApplicantLink') }}</a>.</p>

      <div class="wrapper-for-global-btn">
        <button @click="stepOne = false" :disabled="error" class="global-btn">{{ $t('nextBtn') }}</button>
      </div>

    </div>

    <div v-else class="registr-employer registr-employer__lastpage">
    <h1 class="title-reg-page main-title">{{ $t('registrApplicanThxTitle') }}</h1>
    <p class="registr-employer__content-text">
      {{ $t('registrEmployerThxTxt') }} 
    </p>
    <p>
      {{ $t('registrApplicanThxSoon') }}
    </p>
    <div class="wrapper-for-global-btn">
      <router-link :to="`/${$i18n.locale}/employer`" class="global-btn">{{ $t('registrApplicanThxBb') }}</router-link>
    </div>
  </div>
    
  </div>
</template>

<script>
import BaseInput from "./BaseInput.vue";
export default {
  name: "RegistrationEmployer",
  components: {
    BaseInput,
  },
  data:() => ({
    email: '',
    error: true,
    stepOne: true,
  }),
  methods: {
    validateEmail(email) {
      const req = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(email === '') {
        return 'Введите email'
      } else if (req.test(email)) {
        this.email = email
        this.error = false
        return '';
      } else {
        return 'Некорректный email'
      }
    },
  }
};
</script>
<style lang="scss">
.registr-employer {
  max-width: 382px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    max-width: 350px;
  }
  @media screen and (min-width: 992px) {
    margin: 0;
  }

  &__text {
    font-size: 14px;
    margin-bottom: 20px;
    line-height: 19.12px;
  }

  .base-input {
    margin-bottom: 30px;
  }

  &__content-text {
    font-size: 16px;
    line-height: 21.86px;
    margin-bottom: 35px;
  }
  &__content-text + p {
    color: #528BE6;
    font-weight: 700;
    margin-bottom: 30px;
  }
}

.registr-employer__lastpage {
    @media screen and (min-width: 768px) {
      max-width: 540px;
      text-align: center;

      .title-reg-page {
        font-size: 36px;
      }

      .wrapper-for-global-btn {
        @media screen and (min-width: 992px) {
          text-align: left;
        }
      }

      .wrapper-for-global-btn a {
        width: auto;
        padding-left: 34px;
        padding-right: 34px;
      }
    }
    @media screen and (min-width: 992px) {
      text-align: left;
    }
  }
</style>