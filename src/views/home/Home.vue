<template>
	<div>
		<!-- 信息展示 -->
		<info />
		<!-- 九宫格功能 -->
		<nine-grid>
			<grid-row>
				<grid-item path="/gongzichaxun">
					<img slot="grid-icon" src="../../assets/icon/yinhangka.png" />
					<div slot="grid-text">工资查询</div>
				</grid-item>
				<grid-item path="chongzhi">
					<img slot="grid-icon" src="../../assets/icon/chongzi.png" />
					<div slot="grid-text">充值</div>
				</grid-item>
				<grid-item path="tixian">
					<img slot="grid-icon" src="../../assets/icon/tixian.png" />
					<div slot="grid-text">提现</div>
				</grid-item>
			</grid-row>
			<grid-row>
				<grid-item>
					<img slot="grid-icon" src="../../assets/icon/huoqibao2.png" />
					<div slot="grid-text">活期宝</div>
				</grid-item>
				<grid-item>
					<img slot="grid-icon" src="../../assets/icon/licai.png" />
					<div slot="grid-text">定期理财</div>
				</grid-item>
				<grid-item>
					<img slot="grid-icon" src="../../assets/icon/zhangdan.png" />
					<div slot="grid-text">账单查询</div>
				</grid-item>
			</grid-row>
			<grid-row>
				<grid-item>
					<img slot="grid-icon" src="../../assets/icon/zhuanzhang.png" />
					<div slot="grid-text">转账</div>
				</grid-item>
				<grid-item style="opacity: 0;">
					<img slot="grid-icon" src="../../assets/icon/licai.png" />
					<div slot="grid-text">定期理财</div>
				</grid-item>
				<grid-item style="opacity: 0;">
					<img slot="grid-icon" src="../../assets/icon/licai.png" />
					<div slot="grid-text">账单查询</div>
				</grid-item>
			</grid-row>
		</nine-grid>


	</div>

</template>
<script>
	import {
		NineGrid,
		GridRow,
		GridItem
	} from '@/components/common/grid'
	import Info from '@/components/service/info/Info.vue'
	export default {
		name: '',
		methods: {

		},
		data(){
			return {
				show:true
			}
		},
		components: {
			NineGrid,
			Info,
			GridRow,
			GridItem
		},
		created() {
			var that = this
			// that.$store.commit('getHomeData')
		}
	}
</script>
<style>
	@import url("../../assets/css/base.css");


</style>
