import Vue from 'vue'
import App from './App.vue'

//==import jquery==//
import 'jquery'

//==import bootstrap==//
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//==import general style file==//
import './scss/style.scss'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
