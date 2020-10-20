<template>
	<view class="paper flex-default animated"  :class="tabIndex%2==0?'slideInLeft':'slideInRight'">
		<view class="paper-left">
			<image :src="list.url" lazy-load></image>
		</view>
		<view class="paper-right">
			<view class="paper-right-list flex-default">
				<view class="paper-right-title">
					{{list.name}}{{tabIndex}}
				</view>
				<view class="paper-right-time">
					13:58 
				</view>
			</view>
			
			<view class="paper-right-list flex-default">
				<view class="paper-right-desc ">
					{{list.title}}
				</view>
				<!-- <view class="paper-right-msg" v-show="list.message!==0">
				</view> -->
				<uni-badge :text="list.message" type="error"></uni-badge>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			list:{
				type:Object
			},
			tabIndex:{
				type:Number
			}
		},
		data(){
			return{
				
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	.paper{
		border-bottom: 1px solid #ccc;
		box-sizing: border-box;
		justify-content: flex-start;
		padding: 20rpx 0;
		.paper-left{
			// margin: 0 20rpx;
			margin-left: 20rpx;
			// border: 1px solid red;
			width: 100rpx;
			height: 100rpx;
			image{
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}
		.paper-right{
			margin-left: 20rpx;
			// padding: 0 20rpx;
			width: calc(750rpx - 200rpx);
			.paper-right-list{
				margin-bottom: 10rpx;
				.paper-right-title{
					font-size:35rpx;
				}
				.paper-right-time{
					color: #959595;
				}
				.paper-right-desc{
					color: #959595;
				}
				.paper-right-desc{
					width: 80%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.paper-right-msg{
					background-color: #FF6434;
					color: #FFFDEF;
					min-width: 50rpx;
					padding: 0 5rpx;
					height: 50rpx;
					line-height: 50rpx;
					text-align: center;
					border-radius: 50rpx;
				}
			}
		}
	}
</style>
