
<template>
	<div>
		<div class="tabbar">
			
		<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		components:{
		}
	};
</script>



<style>
	.tabbar {
		position: fixed;
		bottom: 0;
		left: 0;
		height: 4rem;
		display: flex;
		width: 100%;
		background-color: #fff;
		align-items: center;
		box-shadow: 0px -2px 15px 2px rgba(0, 0, 0, 0.5);
		font-size: 13px;
	}


</style>
