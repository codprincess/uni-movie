import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
//挂载
// Vue.prototype.serverUrl = "http://www.imovietrailer.com/superhero";
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
