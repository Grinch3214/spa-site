import Vue from 'vue'
import App from './App.vue'
import { i18n } from './plugins/i18n'
import router from './router/router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/dist/vue-tel-input.css'
import 'swiper/css/swiper.css'
import './assets/styles/style.scss'

Vue.config.productionTip = false

// https://router.vuejs.org/ru/guide/advanced/navigation-guards.html
router.beforeEach((to, from, next) => {

  let language = to.params.lang;
  if(!language) {
    language = 'ru'
  }

  i18n.locale = language
  next()
})

Vue.use(VueAwesomeSwiper)
Vue.use(VueTelInput)

Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
});

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
