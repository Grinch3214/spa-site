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
							<h3 class="accardion__title main-title">
                                <!-- {{$t('accordionTitle')}} -->
                                <slot name="title"></slot>
                            </h3>
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
    props: {
      accordeonImage: {
        type: Array,
        default() {
          return []
        }
      },
      stepList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data:() => ({
        activeItem: 0,
    }),
    methods: {
        open(index) {
            this.activeItem = index
        }
    }
}
</script>