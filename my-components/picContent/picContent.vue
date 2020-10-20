<template>
	<view class="item animated bounceInLeft" @click="toContentDetail">
		<view class="top flex-default">
			<view class="info flex-default">
				<image :src="info.logo" mode="widthFix" lazy-load></image>
				<text class="nick-name">{{info.name}}</text>
			</view>
			<view class="right flex-default">
				<view class="btn iconfont icon-zengjia">关注</view>
				<text class="iconfont icon-guanbi"></text>
			</view>
		</view>

		<view class="picContent">
			<view class="title">
				{{info.title}}
			</view>
			<!-- 图片 -->
			<image :src="info.url" mode="widthFix" lazy-load></image>

			<!-- 视频 -->
			<template v-if="info.type=='video'">
				<view>
					<view class="play iconfont icon-bofang">

					</view>
					<view class="video-info">
						{{info.video_info}}
					</view>
				</view>
			</template>

		</view>

		<view class="bottom flex-default">
			<view class="left flex-default">
				<view class="iconfont icon-icon_xiaolian-mian" :class="{active:info1.numInfo.index==1}" @tap="caozuo('like')"></view>
				<view class="num1 iconfont">
					{{info1.numInfo.like}}
				</view>
				<view class="iconfont icon-kulian" :class="{active:info1.numInfo.index==2}" @tap="caozuo('bad')"></view>
				<view class="num2 iconfont">
					{{info1.numInfo.bad}}
				</view>
			</view>

			<view class="right flex-default">
				<view class="iconfont icon-pinglun1">
				</view>
				<view class="num1 iconfont">
					{{info1.pinlun}}
				</view>
				<view class="iconfont icon-zhuanfa">
				</view>
				<view class="num1 iconfont">
					{{info1.forOther}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info1:this.info
			};
		},
		props: {
			info: {
				type: Object,
				required: true
			},
			index: {
				type: Number
			}
		},
		methods: {
			toContentDetail(){
				uni.navigateTo({
					url: '../contentDetail/contentDetail?obj='+JSON.stringify(this.info),
					success: res => {}
				});
			},
			
			caozuo(type) {
				let {
					index,
					like,
					bad
				} = this.info1.numInfo
				if (type == 'like') {
					if (index == 1) {
						return;
					} else if (index == 2) {
						this.info1.numInfo.bad--;
					}
					this.info1.numInfo.like++;
					this.info1.numInfo.index = 1;
				} else {
					if (index == 2) {
						return;
					} else if (index == 1) {
						this.info1.numInfo.like--;
					}
					this.info1.numInfo.bad++;
					this.info1.numInfo.index = 2;
				}
				this.$emit('change',this.info1)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.item {
		// border: 1px solid red;
		// width: 100%;
		padding-bottom: 30rpx;
		margin-bottom: 50rpx;
		border-bottom: 1px solid #eee;

		.top {
			.info {
				image {
					width: 100rpx;
					height: 100rpx;
					border-radius: 50%;
					// border: 1px solid red;
					margin-right: 20rpx;
				}

				.nick-name {
					color: #B7B7B7;
					font-size: 34rpx;
				}
			}

			.right {

				.btn {
					margin-right: 20rpx;
					background-color: #F8F8F8;
					padding: 10rpx 20rpx;
					cursor: pointer;
					border-radius: 10rpx;
					font-size: 26rpx;
				}

				text {
					color: #D4D4D4;
				}
			}
		}

		.picContent {
			// padding: 10rpx 0;
			// border: 1px solid red;
			position: relative;

			.title {
				// width: 100%;
				font-size: 40rpx;
				margin: 20rpx 0;
			}

			image {
				width: 100%;
				border-radius: 20rpx;
			}

			.play {
				position: absolute;
				left: 50%;
				top: 55%;
				font-size: 150rpx;
				color: #fff;
				transform: translate(-50%, -50%);
			}

			.video-info {
				position: absolute;
				bottom: 30rpx;
				right: 20rpx;
				background-color: rgba(0, 0, 0, 0.5);
				padding: 0 20rpx;
				border-radius: 50rpx;
				color: #fff;
				font-size: 20rpx;
			}
		}

		.bottom {
			padding: 20rpx 0;

			.left {
				// border: 1px solid red;
				width: 200rpx;

				.iconfont {
					margin: 0 20rpx 0 0;
					color: #bbb;

					&.active {
						color: #FEDE33;
					}
				}
			}

			.right {
				// width: 200rpx;

				.iconfont {
					margin: 0 20rpx 0 0;
					color: #bbb;
				}
			}
		}
	}
</style>
