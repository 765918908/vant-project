<template>
	<div>
		<van-nav-bar title="实名认证" right-text="" left-text="返回" left-arrow @click-left="onClickLeft" />
		<van-cell-group>
			<van-field v-model="realName" required clearable label="真实姓名" placeholder="请输入真实姓名" />

			<van-field v-model="idNumber" type="number" clearable maxlength="18" label="身份证号" placeholder="请输入身份证号" required />
		</van-cell-group>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				realName: '',
				idNumber: ''
			}

		},
		methods: {
			onClickLeft() {
				alert('点击了返回')
			}
		}
	}
</script>

<style>
</style>
