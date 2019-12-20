<template>
	<div class="main">
		<router-view></router-view>
		<tab-bar>
			<tab-bar-item path="/home">
				<img slot="item-icon" src="../assets/icon/home.png"/>
				<img slot="item-icon-active" src="../assets/icon/home-active.png"/>
				<div slot="item-text">首页</div>
			</tab-bar-item>
			<tab-bar-item path="/my">
				<img slot="item-icon" src="../assets/icon/my.png"/>
				<img slot="item-icon-active" src="../assets/icon/my-active.png"/>
				<div slot="item-text">我的</div>
			</tab-bar-item>
		</tab-bar>
	</div>
</template>
<style scoped>
@import url("../assets/css/base.css");
</style>
<script>
	// @ is an alias to /src
	import {TabBar,TabBarItem} from '@/components/common/tabbar'
	
	export default {
		name: "Main",
		components: {
			TabBar,
			TabBarItem
		},
		created() {
			
		}
	};
</script>
