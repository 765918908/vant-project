<template>
	<div class="main">
		<router-view></router-view>
		<tab-bar></tab-bar>
	</div>
</template>
<style scoped>
@import url("../assets/css/base.css");
</style>
<script>
	// @ is an alias to /src
	import TabBar from '@/components/common/tabbar/TabBar.vue'

	export default {
		name: "Main",
		components: {
			TabBar
		},
		created() {
			
		}
	};
</script>
