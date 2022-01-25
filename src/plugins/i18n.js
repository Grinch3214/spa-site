import Vue from 'vue'
import VueI18n  from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
    locale: 'ru',
    messages: {
        'ru': require('../assets/lang/ru'),
        'ua': require('../assets/lang/ua'),
        'en': require('../assets/lang/en'),
        'pl': require('../assets/lang/pl')
    }
})