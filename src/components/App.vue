<template>
	<div>
		<h1>{{count}}</h1>
		<button v-on:click="add">mutation添加</button>
		<button v-on:click="plus">action添加</button>
		<button v-on:click="showdata">ajax数据更新到h1标签</button>
	</div>
</template>

<script>
	import Vue from 'vue';
	import VueResource from 'vue-resource'
	Vue.use(VueResource);
	export default {
		methods:{
			add(){
				this.$store.commit("add");
			},
			plus(){
				this.$store.dispatch("plus");
			},
			showdata(){
				this.$http.get("./data/data.txt").then(function(res){
					this.$store.commit("showdata",res.data)
				})
				
			}
		},
		computed:{
			count(){
				return this.$store.state.count;
			}
		}
	}
</script>