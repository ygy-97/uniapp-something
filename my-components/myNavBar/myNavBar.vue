<template>
	<view class="container">
		<uni-nav-bar :statusBar="true" class="top">
			<!-- 左侧图标 -->
			<view class="left" slot="left">
				<view class="iconfont icon-qiandao"></view>
			</view>
			<!-- 右侧图标 -->
			<view class="right" slot="right" @click="toAddInput">
				<view class="iconfont icon-bianji1"></view>
			</view>
			<!-- 中间 -->
			<view class="center flex-default">
				<block v-for="(item,index) in titleArr">
					<view class="item" @click="chooseItem(index)" :key="item.id" :class="{active:index==curIndex}">{{item.name}}</view>
				</block>
			</view>
		</uni-nav-bar>
	</view>
</template>

<script>
	export default {
		props: {
			titleArr: {
				type: Array,
				required: true
			},
			curIndex: {
				type: Number
			}
		},
		data() {
			return {

			}
		},
		methods: {
			chooseItem(num) {
				// this.curIndex = num;
				this.$emit('change', num);
			},
			toAddInput() {
				uni.navigateTo({
					url: '../addInput/addInput',
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	

	.top {
		.uni-navbar__content {
			border: none !important;
		}
		.left {

			// border: 1px solid red;
			view {
				color: #ff9619;
				font-size: 60rpx;
			}
		}

		.right {
			// border: 1px solid red;
			margin-right: -50rpx;

			view {
				font-size: 60rpx;
			}
		}

		.center {
			margin: 0 auto;

			// border: 1px solid red;
			.item {
				color: #9E9E9E;
				padding: 0 20rpx;
				font-weight: bold;
				position: relative;

				&.active {
					color: #000;

					&::after {
						content: '';
						position: absolute;
						width: 70rpx;
						bottom: 15rpx;
						left: 50%;
						transform: translateX(-50%);
						border: 6rpx solid #FEDE33;
						border-radius: 10rpx;
					}
				}

			}
		}

	}
</style>
