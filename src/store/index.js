import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const store = new Vuex.Store({
	state:{
		count:0
	},
	mutations:{
		add(state){
			state.count++;
		},
		showdata(state,data){
			state.count = data;
		}
	},
	actions:{
		plus(context){
			context.commit("add");
		}
	}
})


export default store;