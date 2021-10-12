import Vue from 'vue'
import App from './App.vue'
import VueCoreVideoPlayer from 'vue-core-video-player'

Vue.config.productionTip = false

Vue.use(VueCoreVideoPlayer)
new Vue({
  render: h => h(App),
}).$mount('#app')
