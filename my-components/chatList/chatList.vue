<template>
	<view class="chat-ontainer">
		<view class="time">
			{{list.time}}
		</view>
		<view class="chat-list flex-default" :class="list.isme?'jss':'jse'">
			
			<view class="user left" v-show="list.isme">
				
				<image class="user-logo" src="../../static/img/topicpic/1.jpeg" mode=""></image>
			</view>
			
			<view class="text" :class="list.isme?'left-text':'right-text'">
				<view class="msg">
					<!-- <image src="../../static/img/banner3.jpg" mode=""></image> -->
					{{list.data}}
				</view>
			</view>
			
			<view class="user right" v-show="!list.isme">
				<image class="user-logo" src="../../static/img/topicpic/2.jpeg" mode=""></image>
			</view>
			
			
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			list:{
				type:Object
			}
		},
		data(){
			return{
				
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	.jss{
		justify-content: flex-start;
	}
	.jse{
		justify-content: flex-end;
	}
	
	.chat-ontainer{
		// border: 1px solid red;
		margin: 20rpx 0;
	}
	
	.time{
		color: #ccc;
		text-align:center;
	}
	.chat-list{
		margin: 20rpx;
		// border: 1px solid red;
		align-items: flex-start;
		.user{
			// border: 1px solid red;
			.user-logo{
				width: 100rpx;
				height: 100rpx;
				border-radius: 50rpx;
			}
		}
		.left{
			margin-right:20rpx ;
		}
		.right{
			margin-left: 20rpx;
		}
		.text{
			background-color: #F4F4F4;
			padding:10rpx 20rpx;
			border-radius: 20rpx;
			position: relative;
			min-height: 80rpx;
			max-width: 300rpx;
			// &::after{
			// 	content: '';
			// 	position: absolute;
			// 	left: -25rpx;
			// 	top: 10rpx;
			// 	border: 15rpx solid transparent;
			// 	border-right-color: #F4F4F4;
			// }
			.msg{
				width: 100%;
				height: 100%;
				image{
					border-radius: 20rpx;
					max-width: 150rpx;
					max-height: 200rpx;
				}
			}
		}
		.left-text::after{
				content: '';
				position: absolute;
				left: -25rpx;
				top: 10rpx;
				border: 15rpx solid transparent;
				border-right-color: #F4F4F4;
		}
		.right-text::after{
			content: '';
			position: absolute;
			width: 0;
			right: -25rpx;
			top: 10rpx;
			border: 15rpx solid transparent;
			border-left-color:  #F4F4F4;
		}
	}
</style>
