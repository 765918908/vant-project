<template>
		<div class="grid">
			<slot></slot>
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

</style>
