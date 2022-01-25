<template>
    <main>
		<section class="partners container">
			<swiper-partners />
		</section>

		<slot name="main"></slot>

		<accordion />
	</main>
</template>

<script>
import SwiperPartners from './SwiperPartners.vue'
import Accordion from './Accordion.vue'

export default {
    name: 'Main',
    components: {
        SwiperPartners,
		Accordion
    },
}
</script>