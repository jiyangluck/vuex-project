import Vue from 'vue';

import App from './components/App.vue';
import store from './store/index.js';

Vue.config.debug = true;

new Vue({
	el:'#app',
	components:{App},
	//向vue中注入store，vue实例可以通过this.$store获取store
	store   
})