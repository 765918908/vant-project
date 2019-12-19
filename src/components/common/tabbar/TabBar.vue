
<template>
	<div>
		<div class="tabbar">
			<tab-bar-item path="/home">
				<img slot="item-icon" src="../../../assets/icon/home.png"/>
				<img slot="item-icon-active" src="../../../assets/icon/home-active.png"/>
				<div slot="item-text">首页</div>
			</tab-bar-item>
			<tab-bar-item path="/my">
				<img slot="item-icon" src="../../../assets/icon/my.png"/>
				<img slot="item-icon-active" src="../../../assets/icon/my-active.png"/>
				<div slot="item-text">我的</div>
			</tab-bar-item>
		
		</div>
	</div>
</template>

<script>
	import TabBarItem from "@/components/common/tabbar/TabBarItem.vue"
	export default {
		components:{
			TabBarItem
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
