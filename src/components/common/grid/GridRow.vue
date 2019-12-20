<template>
	<div class="grid-row">
		<slot></slot>
	</div>
</template>

<script>
  export default {
    name:''
  }
</script>

<style>
	.grid-row {
		display: flex;
	}
	/* 选择最后一个item */
	.grid-row >.grid-item:last-child {
		margin-right: 0;
	}

</style>
