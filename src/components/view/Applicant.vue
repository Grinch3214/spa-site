<template>
  <div>
    <Header>
      <template v-slot:header>
        <div class="header__inner">
				<h1 class="header__title">
          <router-link :to="`/${$i18n.locale}`">
            <img width="402" height="54" :src="require('../../assets/images/logo.svg')" alt="AN.WORKS">
          </router-link>
				</h1>
				<h2 class="header__subtitle">
					{{ $t('applicationMainTitle') }}
				</h2>
				<p class="header__text">{{ $t('applicationSubTitle') }}</p>
				<div class="header__links">
					<router-link :to="`/${$i18n.locale}/registration`" class="header__links-registration global-btn"> {{ $t('registrationButton') }} </router-link>
					<router-link :to="`/${$i18n.locale}/employer`" class="header__links-link global-btn">
						{{ $t('employerBtn') }}
					</router-link>
				</div>
				<div class="header__animation">
					<div class="header__soonimage d-none d-md-block">
						<div class = "count">
							<div class = "circles" id = "n1"></div>
							<div class = "circles" id = "n2"></div>
							<div class = "circles" id = "n3"></div>
						</div>
						<picture>
							<source :srcset="require('../../assets/images/main_image_applicant.webp')" type="image/webp">
							<source :srcset="require('../../assets/images/main_image_applicant.png')" type="image/jpeg">
							<img width="920" height="534" :src="require('../../assets/images/main_image_applicant.png')" alt="soon image">
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
									<source :srcset="require('../../assets/images/content/webp/image_1.webp')" type="image/webp">
									<source :srcset="require('../../assets/images/content/image_1.png')" type="image/jpeg">
									<img width="511" height="486" class="unique__image-item" :src="require('../../assets/images/content/image_1.png')" alt="content image">
								</picture>
							</div>
						</div>
						<div class="col-md-6 col-12">
							<div class="unique__inner ml-auto">
								<h3 class="unique__title main-title">{{ $t('applicationUniqueTitle') }}</h3>
								<p class="unique__text main-text">
									{{ $t('applicationUniqueTxt') }}
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
								<div class="promo__block">
									<h3 class="promo-title-a promo__block-title main-title">
										{{ $t('applicationPromoTitleA') }}
									</h3>
									<p class="promo-text-a promo__block-text main-text">
										{{ $t('applicationPromoTxtA') }} 
									</p>
								</div>
								<div class="promo__block">
									<h3 class="promo-title-b promo__block-title main-title">
										{{ $t('applicationPromoTitleB') }}
									</h3>
									<p class="promo-text-b promo__block-text main-text">
										{{ $t('applicationPromoTxtB') }}  
									</p>
								</div>
								<div class="promo__block">
									<h3 class="promo-title-c promo__block-title main-title">{{ $t('applicationPromoTitleC') }}</h3>
									<p class="promo-text-c promo__block-text main-text">
										{{ $t('applicationPromoTxtC') }} 
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-12 order-1 order-md-2">
							<div class="promo__image ml-auto">
								<picture>
									<source :srcset="require('../../assets/images/content/webp/image_2.webp')" type="image/webp">
									<source :srcset="require('../../assets/images/content/image_2.png')" type="image/jpeg">
									<img width="511" height="486" class="promo__image-item" :src="require('../../assets/images/content/image_2.png')" alt="content image">
								</picture>
							</div>
						</div>
					</div>
				</div>
			</section>
			<accordion :accordeonImage="accordeonImage" :stepList="stepList">
				<template v-slot:title>
					{{$t('applicationAccordionTitle')}}
                </template>
			</accordion>
		</template>
	</Main>
    
	<Footer>
      <template v-slot:footer>
        <h2 class="footer__logo">
				<router-link :to="`/${$i18n.locale}`" class="footer__logo-link">
					<img width="160" height="21" :src="require('../../assets/images/logo_footer.svg')" alt="footer logo">
				</router-link>
			</h2>
			<h3 class="footer__subtitle main-title">{{ $t('footerSubtitle') }}</h3>
			<p class="footer__text">{{ $t('applicationFooterTxt') }}</p>
			<div class="footer__button">
				<router-link :to="`/${$i18n.locale}/registration`" class="footer__button-btn global-btn"> {{ $t('registrationButton') }} </router-link>
				<!-- <button class="footer__button-btn global-btn">{{ $t('registrationButton') }}</button> -->
			</div>
      </template>
    </Footer>
  </div>
</template>

<script>
import Header from "../Header.vue"
import Main from '../Main.vue'
import Accordion from '../Accordion.vue'
import Footer from '../Footer.vue'

export default {
  name: "Applicant",
  components: {
    Header,
    Main,
	Accordion,
    Footer,
  },
  data:() => ({}),
  computed: {
	accordeonImage() {
      return [
		{
            webpSourse: require("@/assets/images/content/webp/image_4.webp"),
            pngSourse: require("@/assets/images/content/image_4.png"),
            image: require("@/assets/images/content/image_4.png"),
        },
        {
            webpSourse: require("@/assets/images/content/webp/image_4.webp"),
            pngSourse: require("@/assets/images/content/image_4.png"),
            image: require("@/assets/images/content/image_4.png"),
        },
        {
            webpSourse: require("@/assets/images/content/webp/image_4.webp"),
            pngSourse: require("@/assets/images/content/image_4.png"),
            image: require("@/assets/images/content/image_4.png"),
        },
        {
            webpSourse: require("@/assets/images/content/webp/image_4.webp"),
            pngSourse: require("@/assets/images/content/image_4.png"),
            image: require("@/assets/images/content/image_4.png"),
        },
        {
            webpSourse: require("@/assets/images/content/webp/image_4.webp"),
            pngSourse: require("@/assets/images/content/image_4.png"),
            image: require("@/assets/images/content/image_4.png"),
        },
        {
            webpSourse: require("@/assets/images/content/webp/image_4.webp"),
            pngSourse: require("@/assets/images/content/image_4.png"),
            image: require("@/assets/images/content/image_4.png"),
        },
      ]
	},
    stepList() {
      return [
        {
          title: this.$t('applicationAccordionSubTitleA'),
          body: this.$t('applicationAccordionSubTxtA'),
          webpSourse: require("@/assets/images/content/webp/image_4.webp"),
          pngSourse: require("@/assets/images/content/image_4.png"),
          image: require("@/assets/images/content/image_4.png"),
        },
        {
          title: this.$t('applicationAccordionSubTitleB'),
          body: this.$t('applicationAccordionSubTxtB'),
          webpSourse: require("@/assets/images/content/webp/image_4.webp"),
          pngSourse: require("@/assets/images/content/image_4.png"),
          image: require("@/assets/images/content/image_4.png"),
        },
        {
          title: this.$t('applicationAccordionSubTitleC'),
          body: this.$t('applicationAccordionSubTxtC'),
          webpSourse: require("@/assets/images/content/webp/image_4.webp"),
          pngSourse: require("@/assets/images/content/image_4.png"),
          image: require("@/assets/images/content/image_4.png"),
        },
        {
          title: this.$t('applicationAccordionSubTitleD'),
          body: this.$t('applicationAccordionSubTxtD'),
          webpSourse: require("@/assets/images/content/webp/image_4.webp"),
          pngSourse: require("@/assets/images/content/image_4.png"),
          image: require("@/assets/images/content/image_4.png"),
        },
        {
          title: this.$t('applicationAccordionSubTitleE'),
          body: this.$t('applicationAccordionSubTxtE'),
          webpSourse: require("@/assets/images/content/webp/image_4.webp"),
          pngSourse: require("@/assets/images/content/image_4.png"),
          image: require("@/assets/images/content/image_4.png"),
        }
      ]
    },
  },
};
</script>