<template>
	<div class="bgwirte">
		<div class="logo flex justify-center align-center w100">
			<img class="head-logo" src="../assets/icon/logo.png" alt="">
		</div>

		<van-cell-group>
			<van-field v-model="username" required clearable label="用户名" placeholder="请输入用户名" />

			<van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
		</van-cell-group>
	</div>

</template>
<style>
	@import url("../assets/css/base.css");
	body {
		background-color: #FFFFFF;
	}
	.logo {
		margin: 20px auto;
	}
	.head-logo {
		width: 70px;
	}

	.bgwirte {
		background-color: #FFFFFF;
		padding-top: 3.4375rem;
	}
</style>
<script>
	import {login} from '../network/login'
	export default {
		name: '',
		data() {
			return {
				username: '',
				password: ''
			}
		},
		methods: {

		},
		components: {},
		created() {
			let that = this
			// that.$store.commit('getHomeData')
			let data = {
				phone:'13105686323',
				password:'686323'
			}
			login(data).then(res=>{
				console.log('登录成功')
				console.log(res)
			})
		}
	}
</script>
