<template>
	<view @click="toChat"  class="friendList flex-default animated" :class="index%2==0?'slideInLeft':'slideInRight'">
		<image :src="list.url" mode="scaleToFill"></image>
		<view class="friend-center">
			<view class="friend-name">
				{{list.name}}
			</view>
			<view class="friend-age">
				<view class="iconfont" :class="list.sex==1?'icon-nan':'icon-nv nv'">
					<text>{{list.age}}</text>
				</view>
			</view>
		</view>
		<view class="right iconfont icon-zhengque">

		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Object
			},
			index: {
				type: Number
			}
		},
		data() {
			return {

			}
		},
		methods:{
			toChat(){
				console.log('xx')
				uni.navigateTo({
					url:'../userChat/userChat?name='+this.list.name
				})
			},
		}
		
	}
</script>
<style lang="scss" scoped>
	.friendList {
		margin: 20rpx 0;
		padding: 20rpx 0;
		border-bottom: 1px solid #ccc;
		image {
			margin-left: 20rpx;
			width: 100rpx;
			height: 100rpx;
			border-radius: 50rpx;
		}
		.friend-center {
			flex: 1;
			margin:0 20rpx;
			// border: 1px solid red;
			.friend-name{
				font-size: 35rpx;
				margin: 10rpx 0;
			}
			.friend-age{
				width: 100rpx;
				color: #fff;
				view{
					padding: 0 10rpx;
					width: 100%;
					box-sizing: border-box;
					border-radius: 50rpx;
					background-color: #43B3FF;
					&.nv{
						background-color:#FF698D ;
					}
					text{
						margin-left: 10rpx;
					}
				}
				
			}
		}
		.right{
			background-color: #eee;
			padding: 10rpx;
			border-radius: 50rpx;
			color: #fff;
			margin-right: 50rpx;
			font-size: 25rpx;
		}
	}
</style>
