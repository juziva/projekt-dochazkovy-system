import Vue from 'vue';
import App from './App.vue';
import './index.html';
import { firestorePlugin } from 'vuefire'
import VueSnackbar from 'vue-snack'
import EmployeePage from "./components/EmployeePage.vue"
import EmployerPage from "./components/EmployerPage.vue"
import moment from "moment"
import "moment/locale/cs"
// import 'vue-snack/dist/vue-snack.min.css'

export const userId = 1
moment.locale("cs")

const routes = {
  '/': EmployeePage,
  '/admin': EmployerPage
}

Vue.use(firestorePlugin)
Vue.use(VueSnackbar, { position: 'bottom-right', time: 3000 })

new Vue({
  el: '#app',
  data() {
    return {
      currentRoute: window.location.pathname
    }
},
computed: {
  ViewComponent () {
    return routes[this.currentRoute] || NotFound
  }
},
render (h) { return h(this.ViewComponent) }
  
}) 