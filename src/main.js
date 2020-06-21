import Vue from 'vue';
import App from './App.vue';
import './index.html';
import { firestorePlugin } from 'vuefire'
import VueSnackbar from 'vue-snack'
// import 'vue-snack/dist/vue-snack.min.css'

export const userId = 1

Vue.use(firestorePlugin)
Vue.use(VueSnackbar, { position: 'bottom-right', time: 2000 })

new Vue({
  el: '#app',
  render: h => h(App),
}) 