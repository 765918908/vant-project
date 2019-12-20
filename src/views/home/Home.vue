<template>
	<div>
		<!-- 信息展示 -->
		<info/>
		<!-- 九宫格功能 -->
		<nine-grid>
			<grid-row>
				<grid-item>
					<img slot="grid-icon" src="../../assets/icon/huoqibao2.png" />
					<div slot="grid-text">活期宝</div>
				</grid-item>
				<grid-item>
					<img slot="grid-icon" src="../../assets/icon/huoqibao2.png" />
					<div slot="grid-text">活期宝</div>
				</grid-item>
				<grid-item>
					<img slot="grid-icon" src="../../assets/icon/huoqibao2.png" />
					<div slot="grid-text">活期宝</div>
				</grid-item>
			</grid-row>
		</nine-grid>
	</div>

</template>
<script>
	
	import {NineGrid,GridRow,GridItem} from '@/components/common/grid'
	import Info from '@/components/service/info/Info.vue'
	export default {
		name: '',
		methods: {
			
		},
		components: {
			NineGrid,
			Info,
			GridRow,
			GridItem
		}
	}
</script>
<style>
	@import url("../../assets/css/base.css");
	
	.w100 {
		width: 100%;
	}

	.info {
		height: 14.375rem;
		width: 100%;
		font-size: 1.125rem;
		display: flex;
		flex-direction: column;
		color: #FFFFFF;
		background-color: #4b5cc4;
	}

	.msg {
		height: 4.375rem;
		justify-content: flex-end;
		display: flex;
		align-items: center;
	}

	.message {
		height: 3.125rem;
		width: 3.125rem;
		margin-right: 0.625rem;
	}

	.total_money {
		height: 5.625rem;
		display: flex;
		flex-direction: column;
	}

	.yu_money {
		height: 5.3125rem;
		display: flex;
		align-items: center;
	}

	.money-item {
		flex: 1;
		text-align: center;
	}

	.total-text {
		align-items: flex-end !important;
	}

	.total_money div {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding-left: 20px;
		font-size: 1.25rem;
	}
</style>

