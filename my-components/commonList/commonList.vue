<template>
	<view class="container animated " :class="index%2==0?'bounceInRight':'bounceInLeft'">
		<view class="left">
			<image :src="info.logo" mode="" lazy-load></image>
		</view>
		<view class="right">
			<view class="list flex-default">
				<view class="info flex-default">
					<view class="name">
						{{info.name}}
					</view>
					<view class="age">
						<view class="iconfont" :class="info.sex==1?'icon-nan':'icon-nv'">
							{{info.age}}
						</view>
					</view>
				</view>
				<view class="info1 flex-default" v-show="!info1.isGuanzu">
					<view class="flex-default btn" @click="guanzu" >
						<view class="iconfont icon-zengjia"></view>
						关注
					</view>
					<view class="iconfont icon-guanbi">
					</view>
				</view>
			</view>
			<view class="list">
				<view class="title">
					{{info.title}}
				</view>
			</view>
			<view class="list" >
				<view class="pic" v-show="info.isShare==false">
					<image :src="info.url" mode=""></image>
					<block v-if="info.type=='video'">
						<view class="iconfont icon-bofang">
						</view>
						<view class="video-info ">
							{{info.video_info}}
						</view>
					</block>
				</view>
				
				<!-- 分享 -->
				<view class="share flex-default" v-show="info.isShare==true">
					<image :src="info.url" mode=""></image>
					<view class="">
						{{info.title}}
					</view>
				</view>
			</view>
			<view class="list flex-default">
				<view class="info2">
					<view class="address">
						{{info.address}}
					</view>
				</view>
				<view class="info2 flex-default">
					<view class="num flex-default" @click="zuanfa">
						<view class="iconfont icon-zhuanfa">

						</view>
						{{info.forOther}}
					</view>
					<view class="num flex-default">
						<view class="iconfont icon-pinglun1">

						</view>
						{{info.pinlun}}
					</view>
					<view class="num flex-default">
						<view class="iconfont icon-dianzan"></view>
						{{info.dianzan}}
					</view>
				</view>
			</view>
		
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			info: {
				type: Object,
				required: true
			},
			index: {
				type: Number
			}
		},
		data() {
			return {
				info1:this.info
			}
		},
		methods:{
			zuanfa(){
				this.info1.isShare = !this.info1.isShare;
				this.$emit('xx',this.info1)
			},
			guanzu(){
				console.log('xxx')
				uni.showToast({
					title: '关注成功'
				});
				this.info1.isGuanzu = !this.info1.isGuanzu;
				this.$emit('xx',this.info1);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 20rpx 30rpx 0 20rpx;
		padding-bottom: 0;
		box-sizing: border-box;
		display: flex;
		justify-content: flex-start;
		height: auto;
		// border: 1px solid red;
		margin-bottom: 20rpx;
		
		.left {
			width: 100rpx;
			height: 100rpx;
			image {
				width: 100%;
				height: 100%;
				border-radius: 100%;
			}
		}

		.right {
			border-bottom: 1px solid #ccc;
			margin-left: 20rpx;
			padding-bottom: 30rpx;
			width: calc(100% - 100rpx);
			
			.title {
				margin: 20rpx 0;
				font-size: 35rpx;
			}

			.info {
				position: relative;
				margin: 0;
				top: 0;
				left: 0;
				// border: 1px solid red;	
				justify-content: flex-start;
				.name {
					color: #999999;
					font-size: 30rpx;
				}

				.age {
					margin-left: 10rpx;
					background-color: #44b3ff;
					color: #fff;
					border-radius: 30rpx;
					height: 50rpx;
					padding: 0 15rpx;
				}
			}

			.info1 {
				.btn {
					// border: 1px solid red;
					// height: 40rpx;
					width: 100rpx;
					padding: 10rpx 20rpx;
					border-radius: 10rpx;
					margin-right: 15rpx;
					background-color: #f4f4f4;
					font-size: 28rpx;
					.iconfont {
						margin-right: 10rpx;
					}
				}

				.icon-guanbi {
					color: #d5d5d5;
				}
			}

			.pic {
				position: relative;
				// overflow: hidden;
				image {
					width: 100%;
					height: 300rpx;
					border-radius: 20rpx;
				}

				.iconfont {
					position: absolute;
					left: 50%;
					top: 45%;
					transform: translate(-50%, -50%);
					font-size: 150rpx;
					color: #fff;
				}

				.video-info {
					position: absolute;
					right: 10rpx;
					bottom: 20rpx;
					background-color: rgba(0, 0, 0, .5);
					padding: 0 10rpx;
					height: 50rpx;
					font-size: 28rpx;
					border-radius: 50rpx;
					color: #fff;
				}
			}
			.share{
				width: 100%;
				height: 100rpx;
				// border: 1px solid red;
				border-radius: 20rpx;
				// padding: 0 20rpx;
				// box-sizing: border-box;
				justify-content: flex-start;
				background-color: #F7F7F7;
				image{
					width: 30%;
					height: 100%;
					border-radius: 20rpx;
					margin:0 20rpx 0 0;
				}
				view{
					font-size: 28rpx;
					color: #2F2F2F;
				}
			}

			.info2 {
				margin-top: 10rpx;
				color: #bbb;

				.address {
					font-size: 30rpx;
					// border: 1px solid red;
				}

				.num {
					margin-left: 20rpx;

					.iconfont {
						margin-right: 10rpx;
					}
				}
			}
		}
	}
</style>
