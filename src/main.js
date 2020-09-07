import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false


Vue.use(VueGoogleMaps, {
  load: {
    key: 'APIKEY',
    libraries: 'places',
    region: 'JP',
    language: 'ja'
  }
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
