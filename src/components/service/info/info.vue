<template>
	<div>
		<div class="info">
			<div class="msg w100">
				<img class="message" src="../../../assets/icon/message.png" />
			</div>
			<div class="total_money w100">
				<div class="total-text">总资产</div>
				<div class="total-num">0.00</div>
			</div>
			<div class="yu_money w100">
				<div class="money-item">
					<div class="money-title">账户余额(元)</div>
					<div class="moneu-num">0.00</div>
				</div>
				<div class="money-item">
					<div class="money-title">账户余额(元)</div>
					<div class="moneu-num">0.00</div>
				</div>
				<div class="money-item">
					<div class="money-title">账户余额(元)</div>
					<div class="moneu-num">0.00</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

  export default {
    name:'Info'
  }
</script>

<style scoped="scoped">
	
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
		height: 1.875rem;
		width: 1.875rem;
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
		padding-left: 0.625rem;
		font-size: 1.25rem;
	}
</style>
