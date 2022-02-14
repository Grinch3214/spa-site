<template>
    <div>
        <Header>
          <template v-slot:subscrible>
            <subscription />
          </template>
          <template v-slot:header>
          <div class="header__inner">
            <h1 class="header__title">
              <router-link :to="`/${$i18n.locale}/employer`">
                <img width="402" height="54" :src="require('../../assets/images/logo.svg')" alt="AN.WORKS">
              </router-link>
            </h1>
            <h2 class="header__subtitle">
              {{ $t('employerMainTitle') }}
            </h2>
            <p class="header__text">{{ $t('employerSubTitle') }}</p>
            <div class="header__links">
              <router-link :to="`/${$i18n.locale}/registration/employer`" class="header__links-registration global-btn"> {{ $t('registrationButton') }} </router-link>
              <!-- <button class="header__links-registration global-btn">{{ $t('registrationButton') }}</button> -->
              <router-link :to="`/${$i18n.locale}`" class="header__links-link global-btn">
                {{ $t('applicantsBtn') }}
              </router-link>
            </div>
            <div class="header__animation">
              <div class="header__soonimage d-none d-md-block">
                <div class = "count">
                  <div class = "circles n1"></div>
                  <div class = "circles n2"></div>
                  <div class = "circles n3"></div>
                </div>
                <picture>
                  <source :srcset="require('../../assets/images/main_image_employer.webp')" type="image/webp">
                  <source :srcset="require('../../assets/images/main_image_employer.png')" type="image/jpeg">
                  <img width="920" height="534" :src="require('../../assets/images/main_image_employer.png')" alt="soon image">
                </picture>
              </div>
            </div>
          </div>
      </template>
    </Header>
    <Main>
      <template v-slot:main>
        <section class="unique">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-6 col-12">
                <div class="unique__image">
                  <picture>
                    <source :srcset="require('../../assets/images/content/webp/empl_image_1.webp')" type="image/webp">
                    <source :srcset="require('../../assets/images/content/empl_image_1.png')" type="image/jpeg">
                    <img width="511" height="486" class="unique__image-item" :src="require('../../assets/images/content/empl_image_1.png')" alt="content image">
                  </picture>
                </div>
              </div>
              <div class="col-md-6 col-12">
                <div class="unique__inner ml-auto">
                  <h3 class="unique__title main-title">{{ $t('employerUniqueTitle') }}</h3>
                  <p class="unique__text main-text">
                    {{ $t('employerUniqueTxt') }}
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        <section class="promo">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-6 col-12 order-2 order-md-1">
                <div class="promo__inner">
                  <div class="promo__block employer-block">
                    <h3 class="promo-title-a promo__block-title main-title">
                      {{ $t('employerPromoTitleA') }}
                    </h3>
                    <p class="promo-text-a promo__block-text main-text">
                      {{ $t('employerPromoTxtA') }} 
                    </p>
                  </div>
                  <div class="promo__block employer-block">
                    <h3 class="promo-title-b promo__block-title main-title">
                      {{ $t('employerPromoTitleB') }}
                    </h3>
                    <p class="promo-text-b promo__block-text main-text">
                      {{ $t('employerPromoTxtB') }}  
                    </p>
                  </div>
                  <div class="promo__block employer-block">
                    <h3 class="promo-title-c promo__block-title main-title">{{ $t('employerPromoTitleC') }}</h3>
                    <p class="promo-text-c promo__block-text main-text">
                      {{ $t('employerPromoTxtC') }} 
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-12 order-1 order-md-2">
                <div class="promo__image ml-auto">
                  <picture>
                    <source :srcset="require('../../assets/images/content/webp/empl_image_2.webp')" type="image/webp">
                    <source :srcset="require('../../assets/images/content/empl_image_2.png')" type="image/jpeg">
                    <img width="511" height="486" class="promo__image-item" :src="require('../../assets/images/content/empl_image_2.png')" alt="content image">
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </section>
        <accordion :accordeonImage="accordeonImage" :stepList="stepList">
          <template v-slot:title>
            {{$t('accordionTitle')}}
          </template>
        </accordion>
      </template>
    </Main>
    <Footer>
      <template v-slot:footer>
        <h2 class="footer__logo">
				<router-link :to="`/${$i18n.locale}/employer`" class="footer__logo-link">
					<img width="160" height="21" :src="require('../../assets/images/logo_footer.svg')" alt="footer logo">
				</router-link>
			</h2>
			<h3 class="footer__subtitle main-title">{{ $t('footerSubtitle') }}</h3>
			<p class="footer__text">{{ $t('footerTxt') }}</p>
			<div class="footer__button">
				<!-- <button class="footer__button-btn global-btn">{{ $t('registrationButton') }}</button> -->
        <router-link :to="`/${$i18n.locale}/registration`" class="footer__button-btn global-btn"> {{ $t('registrationButton') }} </router-link>
			</div>
      </template>
    </Footer>
    </div>
</template>

<script>
import Header from '../Header.vue'
import Main from '../Main.vue'
import Accordion from '../Accordion.vue'
import Footer from '../Footer.vue'
import Subscription from '../Subscription.vue'

export default {
  name: 'Employer',
  components: {
    Header,
    Main,
    Accordion,
    Footer,
    Subscription,
  },
  methods: {
  },
  computed: {
    accordeonImage() {
      return [
        {
            webpSourse: require("@/assets/images/content/webp/employer_slider_1.webp"),
            pngSourse: require("@/assets/images/content/employer_slider_1.png"),
            image: require("@/assets/images/content/employer_slider_1.png"),
        },
        {
            webpSourse: require("@/assets/images/content/webp/employer_slider_2.webp"),
            pngSourse: require("@/assets/images/content/employer_slider_2.png"),
            image: require("@/assets/images/content/employer_slider_2.png"),
        },
        {
            webpSourse: require("@/assets/images/content/webp/employer_slider_3.webp"),
            pngSourse: require("@/assets/images/content/employer_slider_3.png"),
            image: require("@/assets/images/content/employer_slider_3.png"),
        },
        {
            webpSourse: require("@/assets/images/content/webp/employer_slider_4.webp"),
            pngSourse: require("@/assets/images/content/employer_slider_4.png"),
            image: require("@/assets/images/content/employer_slider_4.png"),
        },
        {
            webpSourse: require("@/assets/images/content/webp/employer_slider_5.webp"),
            pngSourse: require("@/assets/images/content/employer_slider_5.png"),
            image: require("@/assets/images/content/employer_slider_5.png"),
        },
      ]
    },
    stepList() {
      return [
        {
          title: this.$t('accordionSubTitleA'),
          body: this.$t('accordionSubTxtA'),
          webpSourse: require("@/assets/images/content/webp/employer_slider_1.webp"),
          pngSourse: require("@/assets/images/content/employer_slider_1.png"),
          image: require("@/assets/images/content/employer_slider_1.png"),
        },
        {
          title: this.$t('accordionSubTitleB'),
          body: this.$t('accordionSubTxtB'),
          webpSourse: require("@/assets/images/content/webp/employer_slider_2.webp"),
          pngSourse: require("@/assets/images/content/employer_slider_2.png"),
          image: require("@/assets/images/content/employer_slider_2.png"),
        },
        {
          title: this.$t('accordionSubTitleC'),
          body: this.$t('accordionSubTxtC'),
          webpSourse: require("@/assets/images/content/webp/employer_slider_3.webp"),
          pngSourse: require("@/assets/images/content/employer_slider_3.png"),
          image: require("@/assets/images/content/employer_slider_3.png"),
        },
        {
          title: this.$t('accordionSubTitleD'),
          body: this.$t('accordionSubTxtD'),
          webpSourse: require("@/assets/images/content/webp/employer_slider_4.webp"),
          pngSourse: require("@/assets/images/content/employer_slider_4.png"),
          image: require("@/assets/images/content/employer_slider_4.png"),
        },
        {
          title: this.$t('accordionSubTitleE'),
          body: this.$t('accordionSubTxtE'),
          webpSourse: require("@/assets/images/content/webp/employer_slider_5.webp"),
          pngSourse: require("@/assets/images/content/employer_slider_5.png"),
          image: require("@/assets/images/content/employer_slider_5.png"),
          class: 'hidden'
        }
      ]
    },
  },
}
</script>