<template>
  <div @click="isActive = !isActive" class="change__lang" tabindex="0">
    <div class="dropholder">
      <div class="dropdown" :class="{ active: isActive }">
        <p class="holder">
          {{ languageList.find((x) => x.id === language).title }}
        </p>
      </div>
      <ul class="dropdown-option">
        <li
          tabindex="-1"
          @click="changeLocale(item.id)"
          v-for="item in languageList.filter((x) => x.id !== language)"
          :key="item.id"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangeLanguage",
  data: () => ({
    isActive: false,
    language: null,
    languageList: [
      {
        id: "ua",
        title: "UA",
      },
      {
        id: "ru",
        title: "RU",
      },
      {
        id: "en",
        title: "EN",
      },
      {
        id: "pl",
        title: "PL",
      },
    ],
  }),
  methods: {
    changeLocale(param = this.languageList[0].title) {
      if (param) {
        param = param.toLowerCase();
        if (param !== this.language) {
          this.$router.push({
            params: { lang: param },
          });
          this.language = param;
          // this.$emit('setLocale', param)
        }
      }
    },
  },
  created() {
    const currentLang = this.$router.currentRoute.params.lang || ''
    this.language =  this.languageList.find((x) => x.id === currentLang.toLowerCase())?.id
    if( !this.language) {
      this.changeLocale()
      console.log('changeLocale ',this.language)
    }
  },
};
</script>
