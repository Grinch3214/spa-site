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
            <div class="count">
							<div class="circles n1"></div>
							<div class="circles n2"></div>
							<div class="circles n3"></div>
						</div>
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
									<div class="d-none d-md-block d-lg-none accardion__elem-text-img">
                    <div class="count" :class="item.class">
                      <div class="circles n1"></div>
                      <div class="circles n2"></div>
                      <div class="circles n3"></div>
                    </div>
										<picture>
											<source :srcset="item.webpSourse" type="image/webp">
											<source :srcset="item.pngSourse" type="image/jpeg">
											<img width="560" height="382" :src="item.image" alt="soon image">
										</picture>
									</div>
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