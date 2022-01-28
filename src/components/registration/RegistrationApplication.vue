<template>
  <div>
    <vue-tel-input
      v-model="phone"
      v-bind="bindProps"
      @validate="check"
      @input="input"
      validCharactersOnly 
      required
      :class="{ 'error-phone': error }"
    />

    <div class="question-text">
      Откуда Вы узнали о нас?
    </div>

  <choice-input-select 
    :options="optionsSelect"
    class="select"
    @input="selectOption"
    :playceholder="'Свой вариант'"
  />

  <button type="success" v-if="!error">Submit</button>

  </div>
</template>

<script>
import { VueTelInput } from "vue-tel-input"
import ChoiceInputSelect from './ChoiceInputSelect.vue';

export default {
  name: "RegistrationApplication",
  components: {
    VueTelInput,
    ChoiceInputSelect,
  },
  data() {
    return {
      phone: "",
      error: true,

      optionsSelect: [
        'Друзья подсказали',
        'Нашел через поиск в интернете',
        'Увидел рекламный баннер',
        'Я давно уже Ваш клиент'
      ],

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
      console.log(phone);
    },
    selectOption() {
      console.log('click')
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
  }
  &.error-phone {
    .vti__input {
      border-bottom: 1px solid #FF3B30;
    }
  }
  .vti__country-code {
    color: #4587E0;
    font-weight: 700;
    font-size: 18px;
  }
}

.question-text {
  font-size: 14px;
  margin-bottom: 20px;
}
</style>