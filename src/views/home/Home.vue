<template>
	<div>
		
		<info/>
		<nine-grid/>
	</div>

</template>
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
<script>
	
	import NineGrid from '@/components/common/grid/NineGrid.vue'
	import Info from '@/components/service/info/Info.vue'
	export default {
		name: '',
		methods: {
			
		},
		components: {
			NineGrid,
			Info
		}
	}
</script>
