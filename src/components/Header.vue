<template>
    <header class="header">
		<div class="radius-background"></div>
		<div class="radial-background"></div>
		<div class="container z-index-20">
			<nav class="d-flex justify-content-between align-items-center pt-4 pt-md-3">
				<div class="d-flex align-items-center">
					<change-language />

					<slot name="subscrible"></slot>

				</div>

				<div class="header__buttons">
					<!-- <button class="header__buttons-join global-btn">{{ $t('loginButton') }}</button> -->
					<router-link :to="`/${$i18n.locale}/registration`" class="header__buttons-registration global-btn global-link d-none d-md-inline-block">{{ $t('registrationButton') }}</router-link>
				</div>
			</nav>
			
			<slot name="header"></slot>

		</div>
	</header>
</template>

<script>
import ChangeLanguage from './ChangeLanguage.vue'
import { i18n } from '../plugins/i18n'

export default {
    name: 'Header',
	components: {
		ChangeLanguage,
	},
	data: () => ({
		i18n
	}),
	methods: {
        setLocale(locale) {
            this.i18n.locale = locale
        }
    }
}
</script>