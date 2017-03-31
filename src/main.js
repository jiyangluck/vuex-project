import Vue from 'vue';
import Vuex from 'vuex';

Vue.config.debug = true;
Vue.use(Vuex);

const store =new Vuex.Store({
	state:{
		count:0
	},
	mutations:{
		add(state){
			state.count++
		}
	}
})

new Vue({
	el:'#app',
	methods:{
		add(){
			store.commit("add");
		}
	},
	computed:{
		message(){
			return store.state.count;
		}
	}
})