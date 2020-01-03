<template>
	<div class="bgwirte">
		<div class="logo flex justify-center align-center w100">
			<img class="head-logo" src="../assets/icon/logo.png" alt="">
		</div>

		<van-cell-group>
			<van-field v-model="username" type="number" required clearable label="用户名" placeholder="请输入用户名" />

			<van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
		</van-cell-group>
		<van-button class="mt20" @click="userlogin" type="primary" size="large">登录</van-button>
	</div>

</template>
<script>
	import {
		login
	} from '../network/login'
	import {
		getTotalMoney
	} from '../network/otherdata'
	export default {
		name: '',
		data() {
			return {
				username: '',
				password: ''
			}
		},
		methods: {
			userlogin() {
				let that = this
				let data = {
					phone: that.username,
					password: that.password
				}
				login(data).then(res => {
					console.log(res)
					if(res.status==1){
						sessionStorage.setItem("token", res.token);
						// 初始化数据
						// that.$store.commit('initData')
						let token = {
							token: res.token
						}
						console.log('查看。。。')
						console.log(token)
						getTotalMoney(token).then(respone => {
							console.log('respone==>>')
							console.log(respone)
						})
						that.$router.push('/home')
					}

				})
			}
		}
	}
</script>
<style>
	@import url("../assets/css/base.css");

	body {
		background-color: #FFFFFF !important;
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

	.mt20 {
		margin-top: 1.25rem;
	}
</style>
