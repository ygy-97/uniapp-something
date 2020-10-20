<template>
	<view class="contentDetail">
		<uni-nav-bar left-icon="back" @clickLeft="toIndex" :title="obj.title" statusBar="true">
			<view slot="right" @click="share" class="iconfont icon-gengduo1">
			</view>
		</uni-nav-bar>
		<common-list1 :info="obj"></common-list1>
		{{obj}}
	</view>
</template>

<script>
	import commonList1 from '../../my-components/commonList1/commonList1.vue'
	export default {
		components: {
			commonList1
		},
		data() {
			return {
				obj: {}
			}
		},
		methods: {
			toIndex(){
				uni.switchTab({
					url:"../index/index"
				})
			},
			share(){
				console.log('share')
			}
		},
		onLoad(option) {
			this.obj = JSON.parse(option.obj)
			console.log(this.obj)
		}
	}
</script>

<style lang="scss">
	.contentDetail {
		view.icon-gengduo1 {
			font-size: 40rpx;
		}
	}
</style>
