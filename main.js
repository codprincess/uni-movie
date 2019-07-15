import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
//挂载
Vue.prototype.serverUrl = "http://www.xxxxxxx.com/xxxxx";

Vue.prototype.getGlobalUser = function(key){
	var userInfo = uni.getStorageSync("globalUser");
		if(userInfo != null && userInfo != "" && userInfo != undefined){
			return userInfo;
		}else{
			return null;
		}
}
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
