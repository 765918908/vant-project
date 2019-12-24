<template>
	<div>
		<div class="info w100">
			<div class="msg flex justify-end align-center">
				<img src="../../assets/icon/message.png" />
			</div>
			<div class="person-info w100 flex justify-between align-center">
				<div class="info-item flex">
					<div class="head-icon-box">
						<img class="head-icon" src="../../assets/icon/message.png" />
					</div>
					<div class="name-num flex flex-column justify-center">
						<div class="name">小吴</div>
						<div class="number">13105686323</div>
					</div>
				</div>
				<div class="arrow-icon">
					<img src="../../assets/icon/youjiantou.png" />
				</div>
			</div>
		</div>
		<!-- 九宫格功能 -->
		<nine-grid>
			<grid-row>
				<grid-item path="/bankCard">
					<img slot="grid-icon" src="../../assets/icon/licai.png" />
					<div slot="grid-text">文字</div>
				</grid-item>
				<grid-item>
					<img slot="grid-icon" src="../../assets/icon/licai.png" />
					<div slot="grid-text">文字</div>
				</grid-item>
				<grid-item>
					<img slot="grid-icon" src="../../assets/icon/licai.png" />
					<div slot="grid-text">文字</div>
				</grid-item>
			</grid-row>
			<grid-row>
				<grid-item>
					<img slot="grid-icon" src="../../assets/icon/licai.png" />
					<div slot="grid-text">文字</div>
				</grid-item>
				<grid-item>
					<img slot="grid-icon" src="../../assets/icon/licai.png" />
					<div slot="grid-text">文字</div>
				</grid-item>
				<grid-item>
					<img slot="grid-icon" src="../../assets/icon/licai.png" />
					<div slot="grid-text">文字</div>
				</grid-item>
			</grid-row>
		</nine-grid>
	</div>
</template>

<script>
	import {NineGrid,GridRow,GridItem} from '@/components/common/grid'
  export default {
    name:'',
	components: {
		NineGrid,
		GridRow,
		GridItem
	}
  }
 
</script>

<style scoped="scoped">
	@import url("../../assets/css/base.css");
	.info-item {
		padding-left: 0.625rem;
	}
	.name-num div {
		color: #FFFFFF;
		padding-left: 0.5rem;
	}
	.person-info {
		height: 7.5rem;
		/* background-color: skyblue; */
	}
	.info {
		background-color: #4b5cc4;
		height: 11.25rem;
		overflow: hidden;
	}
	.w100{
		width: 100%;
	}
	.msg {
		height: 3.75rem;
		padding-right: 3vw;
		/* background-color: yellowgreen; */
	}
	.msg img{
		width: 1.875rem;
		height: 1.875rem;
	}
	.head-icon {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: palegreen;
	}
	.arrow-icon img {
		width: 1.875rem;
		height: 1.875rem;
	}

</style>


