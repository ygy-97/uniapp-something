<template>
	<view class="loadMore">
		{{loadText}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// loadText:'加载中...',
			}
		},
		props:{
			loadText:{
				type:String,
				required:true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.loadMore {
		text-align: center;
		color: #999;
		font-size: 28rpx;
	}
</style>
