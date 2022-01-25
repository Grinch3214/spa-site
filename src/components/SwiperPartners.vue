<template>
  <div class="partners__container">
    <swiper
      v-if="isShown"
      ref="parthersSwiper"
      :options="swiperOptions"
      id="hide-block"
      class="swiper-wrapper align-items-center"
    >
      <swiper-slide class="swiper-slide" v-for="(item, index) in sliders" :key="index">
        <svg>
          <use :xlink:href="item.slider + item.id"></use>
        </svg>
      </swiper-slide>
    </swiper>

    <div v-else id="hide-block" class="swiper-wrapper align-items-center" :class="{active: showMore}">
      <div class="swiper-slide" v-for="(item, index) in sliders" :key="index">
        <svg>
          <use :xlink:href="item.slider + item.id"></use>
        </svg>
      </div>
    </div>

    <h6
      class="partners__btn d-inline-block d-md-none"
      @click="showMore =! showMore"
    >
      {{ changeCompany  }}
    </h6>
  </div>
</template>

<script>
export default {
  name: "SwiperPartners",
  data() {
    const SPRITE = require('../assets/images/partners/sprite.svg')
    return {
      sliders: [
          {
            slider: SPRITE,
            id: '#rademadesvg'
          },
          {
            slider: SPRITE,
            id: '#epam'
          },
          {
            slider: SPRITE,
            id: '#softserve'
          },
          {
            slider: SPRITE,
            id: '#sevenpro'
          },
          {
            slider: SPRITE,
            id: '#nix'
          },
          {
            slider: SPRITE,
            id: '#boosteroid'
          }
      ],
      isShown: false,
      showMore: false,
      swiperOptions: {
        speed: 400,
        spaceBetween: 50,
        slidesPerView: 4,
        loop: true,
        grabCursor: true,
        autoplay: {
          delay: 3000,
        },
        breakpoints: {
          991: {
            slidesPerView: 5,
            spaceBetween: 80,
          },
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.parthersSwiper.$swiper;
    },
    showCompany() {
      return this.$t('showCompany')
    },
    hideCompany() {
      return this.$t('hideCompany')
    },
    changeCompany() {
      if(this.showMore) {
        return this.hideCompany
      }
      return this.showCompany
    }
  },
  methods: {
  },
  mounted() {
    const media = window.matchMedia("(min-width:768px)");
    const breakpoint = (e) => (this.isShown = e.matches);
    breakpoint(media);
    media.addEventListener("change", breakpoint);
    this.$once("hook:beforeDestroy", () =>
      media.removeEventListener("change", breakpoint)
    );
  },
};
</script>