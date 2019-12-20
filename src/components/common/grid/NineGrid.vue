<template>
	<div>
		<div class="grid">
			<div class="grid-row">
				<div class="grid-item">
					<img src="../../../assets/icon/huoqibao2.png" />
					<div class="grid-text">活期宝</div>
				</div>
				<div class="grid-item">
					<img src="../../../assets/icon/huoqibao2.png" />
					<div class="grid-text">活期宝</div>
				</div>
				<div class="grid-item">
					<img src="../../../assets/icon/huoqibao2.png" />
					<div class="grid-text">活期宝</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name:'NineGrid'
  }
</script>

<style>
	/* 九宫格 */
	.grid{
		display: flex;
		flex-direction: column;
		margin: 0.625rem 0.625rem;
	}
	.grid-row {
		display: flex;
	}
	/* 选择最后一个item */
	.grid-row >.grid-item:last-child {
		margin-right: 0;
	}
	.grid-item {
		flex: 1;
		text-align: center;
		background-color: #FFFFFF;
		padding: 0.625rem;
		margin-bottom: 0.375rem;
		margin-right: 0.375rem;
	}
	.grid-item img {
		height: 3rem;
		width: 3rem;
	}
</style>
