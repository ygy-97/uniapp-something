<template>
	<view class="container">
		<uni-nav-bar @clickLeft="backTo" left-icon="back" :title="name">
			<view class="iconfont icon-geren" slot="right">

			</view>
		</uni-nav-bar>

		<scroll-view scroll-y="true">
			<view class="left flex-default">
				<view class="user">
					<image class="user-logo" src="../../static/img/topicpic/1.jpeg" mode=""></image>
				</view>
				<view class="text">
					<view class="msg">
						<!-- <image src="../../static/img/banner3.jpg" mode=""></image> -->
						xxx
					</view>
				</view>
			</view>
			<view class="right flex-default">
				<view class="text">
					<view class="msg">
						<!-- <image src="../../static/img/banner3.jpg" mode=""></image> -->
						阿拉
					</view>
				</view>
				<view class="user">
					<image class="user-logo" src="../../static/img/topicpic/1.jpeg" mode=""></image>
				</view>
			</view>
			<block v-for="item,index in chatList">
				<chat-list :list="item" :key="index"></chat-list>
			</block>
		</scroll-view>

		<view class="input-chat flex-default">
			<input type="text" value="" placeholder="文明发言" />
			<view class="iconfont icon-fabu">

			</view>
		</view>

	</view>
</template>

<script>
	import chatList from '../../my-components/chatList/chatList.vue'
	export default {
		components: {
			chatList
		},
		data() {
			return {
				name: '',
				chatList: [{
						isme: true,
						url: '../../static/img/topicpic/1.jpeg',
						data: 'dfsal;afsdkljklasdfjkl是拉萨的飞机范德萨了',
						time: '12:30'
					},
					{
						isme: false,
						url: '../../static/img/topicpic/1.jpeg',
						data: '释放了大家卡',
						time: '13:30'
					}
				]
			};
		},
		methods: {
			backTo() {
				uni.navigateBack({
					delta: 1
				});
			}
		},
		onLoad(obj) {
			this.name = obj.name;
			let dom = getCurrentPages();
			console.log(dom)
		},
		onReady() {
			let dom = uni.createSelectorQuery().in(this);
			
			console.log(dom.select('scroll-view'))
		}

	}
</script>

<style lang="scss">
	.container {
		.input-chat {
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			// border: 1px solid red;
			border-top: 1px solid #ccc;
			height: 100rpx;
			padding: 0 20rpx;

			input {
				flex: 9;
				height: 70rpx;
				padding-left: 20rpx;
				background-color: #F7F7F7;
				border-radius: 10rpx;

			}

			view {
				flex: 1;
				text-align: center;
				font-size: 50rpx;
			}
		}

		scroll-view {
			.left {
				margin: 20rpx;
				justify-content: flex-start;
				align-items: flex-start;
				position: relative;

				.user {
					.user-logo {
						width: 100rpx;
						height: 100rpx;
						border-radius: 50rpx;
					}
				}

				.text {
					margin-left: 20rpx;
					background-color: #F4F4F4;
					padding: 10rpx 20rpx;
					border-radius: 20rpx;
					position: relative;
					min-height: 80rpx;
					max-width: 300rpx;

					&::after {
						content: '';
						position: absolute;
						left: -25rpx;
						top: 10rpx;
						border: 15rpx solid transparent;
						border-right-color: #F4F4F4;
					}

					.msg {
						width: 100%;
						height: 100%;

						image {
							max-width: 150rpx;
							max-height: 200rpx;
						}
					}
				}

			}

			.right {
				justify-content: flex-end;
				margin: 20rpx;
				align-items: flex-start;
				position: relative;

				.user {
					.user-logo {
						width: 100rpx;
						height: 100rpx;
						border-radius: 50rpx;
					}
				}

				.text {
					margin: 0 20rpx;
					background-color: #F4F4F4;
					padding: 10rpx 20rpx;
					border-radius: 20rpx;
					position: relative;
					min-height: 80rpx;
					// max-width: 400rpx;
					margin-left: 200rpx;

					&::after {
						content: '';
						position: absolute;
						right: -25rpx;
						top: 10rpx;
						border: 15rpx solid transparent;
						border-left-color: #F4F4F4;
					}

					.msg {
						width: 100%;
						height: 100%;

						image {
							width: 200rpx;
							height: 200rpx;
						}
					}
				}
			}
		}
	}
</style>
