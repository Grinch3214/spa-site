<template>
  <div>
    <div v-if="stepOne" class="registr-aplicant">
        <h1 class="title-reg-page main-title">
          {{ $t('registrationButton') }}
        </h1>
      <p class="registr-aplicant__text">{{ $t('registrApplicantPhone') }}</p>

    <vue-tel-input
      v-model="phone"
      v-bind="bindProps"
      @validate="check"
      @input="input"
      validCharactersOnly 
      required
      :class="{ 'error-phone': error }"
    />

    <div class="registr-aplicant__text">
      {{ $t('registrApplicantSelect') }}
    </div>

  <choice-input-select 
    :options="optionSelect.optionsSelect"
    class="select"
    @input="selectOption"
    :playceholder="optionSelect.playceholder"
  />

  <p class="registr-aplicant__text">
    {{ $t('registrApplicantPolicyA') }}
    <a class="global-link" target="_blank" href="https://old.an.works/terms-of-use.html#privacy-policy">{{ $t('registrApplicantLink') }}</a> {{ $t('registrApplicantPolicyB') }} <a class="global-link" target="_blank" href="https://old.an.works/terms-of-use.html#privacy-policy">{{ $t('registrApplicantLink') }}</a>.</p>

  <div class="wrapper-for-global-btn">
    <button @click="stepOne = false" :disabled="error" class="global-btn">{{ $t('nextBtn') }}</button>
  </div>

  <div class="center-line">{{ $t('orTXT') }}</div>
  
  <div class="registr-aplicant__social d-flex align-items-center justify-content-center">
    <a class="registr-aplicant__social-item" target="_blank" href="https://www.facebook.com/an.works.ukraine/">
      <svg width="14" height="23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.067 28V15.477H0V10.5h4.067V6.579C4.067 2.319 6.592 0 10.277 0 12.043 0 13.56.137 14 .197v4.451h-2.556c-2.005 0-2.392.985-2.392 2.423V10.5h4.524l-.62 4.977H9.051V28" fill="#528BE6"/></svg>
    </a>
    <a class="registr-aplicant__social-item" target="_blank" href="https://www.linkedin.com/company/anworks/about/">
      <svg width="23" height="23" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#facebook_b)"><path d="M19.597 19.598h-3.408V14.26c0-1.273-.023-2.912-1.773-2.912-1.774 0-2.046 1.386-2.046 2.818v5.432H8.962V8.623h3.271v1.5h.045a3.585 3.585 0 0 1 3.228-1.773c3.454 0 4.09 2.272 4.09 5.228v6.02ZM5.117 7.122a1.978 1.978 0 1 1-.001-3.955 1.978 1.978 0 0 1 0 3.955ZM6.82 19.598H3.409V8.623h3.412v10.975ZM21.294.002H1.697A1.676 1.676 0 0 0 0 1.662v19.677A1.68 1.68 0 0 0 1.697 23h19.597A1.683 1.683 0 0 0 23 21.339V1.66A1.682 1.682 0 0 0 21.294 0" fill="#528BE6"/></g><defs><clipPath id="facebook_b"><path fill="#fff" d="M0 0h23v23H0z"/></clipPath></defs></svg>
    </a>
  </div>
    </div>

  <div v-else-if="!stepOne && stepTwo" class="registr-aplicant">
    <h1 class="title-reg-page main-title">{{ $t('registrationButton') }}</h1>

    <p class="registr-aplicant__text">
      {{ $t('registrApplicantCode') }}
    </p>

    <code-holder 
      @handleInput="handleInput"
      :class="{ 'error-code': !error }"
    />

    <div class="wrapper-for-global-btn registr-aplicant__button">
      <button @click="stepTwo = false" :disabled="!error" class="global-btn">{{ $t('nextBtn') }}</button>
    </div>

    <div class="text-center">
      <button class="global-btn">{{ $t('linkSendMessage') }}</button>
    </div>

  </div>

  <div v-else class="registr-aplicant registr-aplicant__lastpage">
    <h1 class="title-reg-page main-title">{{ $t('registrApplicanThxTitle') }}</h1>
    <p class="registr-aplicant__content-text">
      {{ $t('registrApplicanThxTxt') }} 
    </p>
    <p>
      {{ $t('registrApplicanThxSoon') }}
    </p>
    <div class="wrapper-for-global-btn">
      <router-link :to="`/${$i18n.locale}`" class="global-btn">{{ $t('registrApplicanThxBb') }}</router-link>
    </div>
  </div>
  
  </div>
</template>

<script>
import { VueTelInput } from "vue-tel-input"
import ChoiceInputSelect from './ChoiceInputSelect.vue'
import CodeHolder from './CodeHolder.vue'

export default {
  name: "RegistrationApplication",
  components: {
    VueTelInput,
    ChoiceInputSelect,
    CodeHolder,
  },
  data() {
    return {
      phone: "",
      error: true,
      stepOne: true,
      stepTwo: true,

      currentIndex: 0,
      checkCd: {
        code: []
      },

      // optionsSelect: [
      //   'Друзья подсказали',
      //   'Нашел через поиск в интернете',
      //   'Увидел рекламный баннер',
      //   'Я давно уже Ваш клиент'
      // ],

      bindProps: {
        defaultCountry: "UA",
        preferredCountries: ["RU", "PL", 'UA'],
        dropdownOptions: {
          showFlags: true,
          showDialCodeInSelection: true,
        },
        inputOptions: {
          maxlength: 12,
          placeholder: 'XXX-XX-XX',
          required: true,
          type: 'tel',
        },
      },
    };
  },
  methods: {
    check({ valid }) {
      if (valid === true) {
        this.error = false;
      } else {
        this.error = true;
      }
    },
    input: function(phone) {
      // console.log(phone);
      return phone
    },
    selectOption() {
      console.log('click')
    },
    handleInput(event) {
      // console.log(event)

      if (event.length === 4) {
          this.error = true
        } else {
          this.error = false
        }

      for (let i = 0; i < event.length; i++) {
        event[i] = event[i].toUpperCase()
        this.checkCd.code = event
        if (this.checkCd.code[i] === '') {
          this.error = false
        }
      }
    },
  },
  computed: {
    optionSelect() {
      return { 
        playceholder: this.$t('registrApplicantSelectPlace'),
        optionsSelect: [
          this.$t('registrApplicantSelectA'),
          this.$t('registrApplicantSelectB'),
          this.$t('registrApplicantSelectC'),
          this.$t('registrApplicantSelectD'),
          this.$t('registrApplicantSelectE'),
          this.$t('registrApplicantSelectF'),
          this.$t('registrApplicantSelectG'),
          this.$t('registrApplicantSelectH'),
        ],
      }
    }
  },
};
</script>


<style lang="scss">

.vue-tel-input {
  border: 1px solid transparent;
  margin-bottom: 30px;
  &:focus-within {
    box-shadow: unset;
    border-color: transparent;
  }
  .vti__dropdown {
    &:hover {
        background-color: transparent;
    }
  }
  .vti__input {
      border-bottom: 1px solid #41D7AA;
      border-radius: 0;
      font-size: 18px;
      font-weight: 300;
      color: #222536;
  }
  &.error-phone {
    .vti__input {
      border-bottom: 1px solid #4587E0;
      // &:focus {
      //   border-bottom: 1px solid #FF3B30;
      // }
    }
  }

  .vti__country-code {
    color: #4587E0;
    font-weight: 700;
    font-size: 18px;
  }
}

.registr-aplicant {
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
  .choice-input-select {
    margin-bottom: 25px;
  }

  &__social {
    margin-bottom: 40px;
  }

  &__button {
    margin-bottom: 10px;
  }

  &__social-item {
    display: inline-block;
    position: relative;
    z-index: 15;
    &:first-child {
      margin-right: 80px;
    }
    &:hover::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 68px;
      height: 68px;
      border-radius: 50%;
      background: #e8e8e8;
    }
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

.registr-aplicant__lastpage {
    @media screen and (min-width: 768px) {
      max-width: 540px;
      text-align: center;

      .title-reg-page {
        font-size: 36px;
      }

      .wrapper-for-global-btn a {
        width: auto;
        padding-left: 34px;
        padding-right: 34px;
      }
    }
  }

</style>