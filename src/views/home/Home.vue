<template>
	<div>
		<h1>Home</h1>
		<van-button @click="mainClick" type="default">默认按钮</van-button>
		<van-button type="primary">主要按钮</van-button>
		<van-button type="info">信息按钮</van-button>
		<van-button type="warning">警告按钮</van-button>
		<van-button type="danger">危险按钮</van-button>
	</div>

</template>

<script>
// 	import Vue from 'vue';
// import {Notify  } from 'vant';
	
// 	Vue.use(Button);
// 	Vue.use(Notify);
	export default {
		name: '',
		methods: {
			mainClick(){
				Notify({ type: 'primary', message: '通知内容' });
				
			}
		}
	}
</script>

<style>
</style>
