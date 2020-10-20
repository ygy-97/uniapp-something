<template>
	<view class="kids">
		<view class="top flex-default">
			<view class="title">
				热门分类
			</view>
			<view class="more flex-default" @click="toTalk">
				更多
				<view class="iconfont icon-jinru">
	
				</view>
			</view>
		</view>
		<view class="kid-lists flex-default">
			<block v-for="item,index in kidArr">
				<view class="btn" :key="item.id">
					{{item.name}}
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			kidArr:{
				type:Array,
				required:true
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			toTalk(){
				uni.navigateTo({
					url: '../../pages/talkKid/talkKid',
				});
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	.kids {
		// margin: 20rpx;
		padding: 0 20rpx;
		border-top: 1px solid #eee;
		border-bottom: 2px solid #eee;
	
		.top {
			// border: 1px solid red;
			margin: 20rpx 0;
	
			.title {
				font-size: 35rpx;
			}
	
			.more {
				color: #D3D3D3;
				// border: 1px solid red;
				align-items: flex-end;
			}
		}
		.kid-lists {
			margin: 40rpx 0;
			.btn {
				font-size: 28rpx;
				background-color: #eee;
				color: #989898;
				padding: 15rpx 25rpx;
				border-radius: 10rpx;
			}
		}
	}
</style>
