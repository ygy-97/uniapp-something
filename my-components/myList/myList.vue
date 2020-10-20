<template>
	<view class="container flex-default animated" :class="index%2==0?'slideInLeft':'slideInRight'" @tap="toDetail(index)" >
		<image :src="list.imgUrl" mode="scaleToFill"></image>
		<view class="info">
			<view class="title">
				{{list.title}}
			</view>
			<view class="desc">
				{{list.desc}}
			</view>
			<view class="num flex-default">
				<view class="num1">
					<text>动态</text>{{list.dongtai}}
				</view>
				<view class="num1">
					<text>今日</text>{{list.today}}
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			list:{
				type:Object,
				required:true
			},
			index:{
				type:Number
			}
		},
		methods:{
			toDetail(index){
				console.log('xxx')
				uni.navigateTo({
					url: '../../pages/talkDetail/talkDetail?index='+index,
				});
			}
		},
		data(){
			return{
				
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	.container{
		margin: 20rpx 0;
		justify-content: flex-start;
		border-bottom: 1px solid #eee;
		padding-bottom: 20rpx;
		image{
			width: 150rpx;
			height: 150rpx;
			margin-right: 20rpx;
			border-radius: 20rpx;
		}
		.info{
			// margin-bottom: 20rpx;
			.title{
				font-size: 36rpx;
				// font-weight: 600
			}
			.desc{
				margin-top: 10rpx;
				font-size: 30rpx;
				color: #939393;
					// border: 1px solid red;
					width: 500rpx;
			}
			.num{
				font-size: 30rpx;
				color: #939393;
				justify-content: flex-start;
				.num1{
					margin-right: 20rpx;
				}
				text{
					margin-right: 10rpx;
				}
			}
		}
	}
</style>
