<template>
	<div class="tabbar-item" @click="itemClick">
		<slot v-if="!isActive" name="item-icon"></slot>
		<slot v-else name="item-icon-active"></slot>
		<div :class="{active:isActive}">
			<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props:['path'],
		methods: {
			itemClick() {
				this.$router.replace(this.path)
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path) !=-1
			}
		}
	}
</script>

<style>
	.tabbar-item {
		flex: 1;
		text-align: center;
	}

	.tabbar-item img {
		width: 2rem;
		height: 2rem;
	}

	.active {
		color: #db639b;
	}
</style>
