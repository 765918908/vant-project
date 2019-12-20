<template>
	<div class="grid-item">
		<slot name="grid-icon"></slot>
		<slot name="grid-text"></slot>
	</div>
</template>

<script>
  export default {
    name:''
  }
</script>

<style>
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
