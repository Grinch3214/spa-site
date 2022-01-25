<template>
    <section class="accardion">
			<div class="container">
				<div class="row accardion__container">
					<div class="col-12 col-md-6 accardion__items d-none d-lg-block">
						<div 
                          class="accardion__image"
                          @click="open(index)"
                          :class="{active: index === activeItem}"
                          v-for="(item, index) in accordeonImage"
                          :key="index"
                        >
							<picture>
								<source :srcset="item.webpSourse" type="image/webp">
								<source :srcset="item.pngSourse">
								<img :src="item.image" class="accardion__image-item" width="531" height="362">
							</picture>
						</div>
						
					</div>
					<div class="col-12 col-lg-6">
						<div class="accardion__inner">
							<h3 class="accardion__title main-title">{{$t('accordionTitle')}}</h3>
							<div class="accardion__wrapper">

								<div 
                                  tabindex="0"
                                  class="accardion__elem"
                                  @click="open(index)"
                                  @keyup.space="open(index)"
                                  :class="{active: index === activeItem}"
                                  v-for="(item, index) in stepList"
                                  :key="index"
                                >
									<h3 class="accardion__elem-title"> {{ item.title }} </h3>
									<p class="accardion__elem-text">
										{{ item.body }}
									</p>
									<p class="d-none d-md-block d-lg-none">
										<picture>
											<source :srcset="item.webpSourse" type="image/webp">
											<source :srcset="item.pngSourse" type="image/jpeg">
											<img width="560" height="382" :src="item.image" alt="soon image">
										</picture>
									</p>
								</div>

							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
</template>

<script>

export default {
    name: 'Accordeon',
    data:() => ({
        // accordeonElem: [
        //     {
        //         title: this.$t('employerPromoTitleA'),
        //         body: 'Пройдите процедуру регистрации и получите доступ ко всем возможностям платформы',
        //         webpSourse: require("../assets/images/content/webp/image_4.webp"),
        //         pngSourse: require("../assets/images/content/image_4.png"),
        //         image: require("../assets/images/content/image_4.png"),
        //     },
        //     {
        //         title: 'Поиск кандидата в рейтинге',
        //         body: 'Благодаря динамической рейтинговой системе, подходящего сотрудника можно найти гораздо быстрее',
        //         webpSourse: require("../assets/images/content/webp/image_4.webp"),
        //         pngSourse: require("../assets/images/content/image_4.png"),
        //         image: require("../assets/images/content/image_4.png"),
        //     },
        //     {
        //         title: 'Переход в чат с подходящим кандидатом',
        //         body: 'Связывайтесь с кандидатом прямо на платформе, для вашего удобства мы добавили встроенный календарь и еще несколько полезных инструментов ',
        //         webpSourse: require("../assets/images/content/webp/image_4.webp"),
        //         pngSourse: require("../assets/images/content/image_4.png"),
        //         image: require("../assets/images/content/image_4.png"),
        //     },
        //     {
        //         title: 'Собеседование',
        //         body: 'Мы сократили путь оценки твоих качеств, что позволит быстрее получить долгожданный оффер и принять выгодное предложение',
        //         webpSourse: require("../assets/images/content/webp/image_4.webp"),
        //         pngSourse: require("../assets/images/content/image_4.png"),
        //         image: require("../assets/images/content/image_4.png"),
        //     },
        //     {
        //         title: 'Успешный найм идеального кандидата для текущей вакансии',
        //         body: 'Поздравляем! Вы сократили время найма и подобрали самого лучшего специалиста для вашего проекта.',
        //         webpSourse: require("../assets/images/content/webp/image_4.webp"),
        //         pngSourse: require("../assets/images/content/image_4.png"),
        //         image: require("../assets/images/content/image_4.png"),
        //     }
        // ],
        accordeonImage: [
            {
                webpSourse: require("../assets/images/content/webp/image_4.webp"),
                pngSourse: require("../assets/images/content/image_4.png"),
                image: require("../assets/images/content/image_4.png"),
            },
            {
                webpSourse: require("../assets/images/content/webp/image_4.webp"),
                pngSourse: require("../assets/images/content/image_4.png"),
                image: require("../assets/images/content/image_4.png"),
            },
            {
                webpSourse: require("../assets/images/content/webp/image_4.webp"),
                pngSourse: require("../assets/images/content/image_4.png"),
                image: require("../assets/images/content/image_4.png"),
            },
            {
                webpSourse: require("../assets/images/content/webp/image_4.webp"),
                pngSourse: require("../assets/images/content/image_4.png"),
                image: require("../assets/images/content/image_4.png"),
            },
            {
                webpSourse: require("../assets/images/content/webp/image_4.webp"),
                pngSourse: require("../assets/images/content/image_4.png"),
                image: require("../assets/images/content/image_4.png"),
            },
            {
                webpSourse: require("../assets/images/content/webp/image_4.webp"),
                pngSourse: require("../assets/images/content/image_4.png"),
                image: require("../assets/images/content/image_4.png"),
            }
        ],
        activeItem: 0,
    }),
    computed: {
        stepList() {
            return [
                {
                    title: this.$t('accordionSubTitleA'),
                    body: this.$t('accordionSubTxtA'),
                    webpSourse: require("../assets/images/content/webp/image_4.webp"),
                    pngSourse: require("../assets/images/content/image_4.png"),
                    image: require("../assets/images/content/image_4.png"),
                },
                {
                    title: this.$t('accordionSubTitleB'),
                    body: this.$t('accordionSubTxtB'),
                    webpSourse: require("../assets/images/content/webp/image_4.webp"),
                    pngSourse: require("../assets/images/content/image_4.png"),
                    image: require("../assets/images/content/image_4.png"),
                },
                {
                    title: this.$t('accordionSubTitleC'),
                    body: this.$t('accordionSubTxtC'),
                    webpSourse: require("../assets/images/content/webp/image_4.webp"),
                    pngSourse: require("../assets/images/content/image_4.png"),
                    image: require("../assets/images/content/image_4.png"),
                },
                {
                    title: this.$t('accordionSubTitleD'),
                    body: this.$t('accordionSubTxtD'),
                    webpSourse: require("../assets/images/content/webp/image_4.webp"),
                    pngSourse: require("../assets/images/content/image_4.png"),
                    image: require("../assets/images/content/image_4.png"),
                },
                {
                    title: this.$t('accordionSubTitleE'),
                    body: this.$t('accordionSubTxtE'),
                    webpSourse: require("../assets/images/content/webp/image_4.webp"),
                    pngSourse: require("../assets/images/content/image_4.png"),
                    image: require("../assets/images/content/image_4.png"),
                }
            ]
        },
    },
    methods: {
        open(index) {
            this.activeItem = index
        }
    }
}
</script>