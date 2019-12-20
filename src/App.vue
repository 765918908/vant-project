<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	export default {
		created() {
			let h = window.screen.height
			let w = window.screen.width
			if (w <= 320) {
				document.documentElement.style.fontSize = '14px'
			} else if(320 < w && w <= 375){
				document.documentElement.style.fontSize = '16px'
			}else if(375 < w && w <= 414){
				document.documentElement.style.fontSize = '17px'
			}else{
				document.documentElement.style.fontSize = '20px'
			}
		}
	};
</script>
<style>

</style>
