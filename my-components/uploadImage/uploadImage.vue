<template>
	<view class="choose-pic">
		<view class="list flex-default">
			<view class="left">
				点击可预览选好的图片
			</view>
			<view class="right">
				{{imageList1.length}}/{{allNum}}
			</view>
		</view>
		<view class="list1">
			<button size="mini" type="default" class="choose" @click="choosePic">
				<view class="iconfont icon-zengjia">

				</view>
			</button>
			<view class="pic-list" v-for="(item,index) in imageList">
				<image :src="item" mode="scaleToFill" @click="prevImage(index)"></image>
				<view @click="deletePic(index)" class="iconfont icon-shanchu">
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chooseNum: 0,
				imageList1:this.imageList
			}
		},
		props: {
			imageList: {
				type: Array
			},
			allNum: {
				type: Number
			}
		},
		methods: {
			// 删除图片
			deletePic(i) {
				console.log(i)
				uni.showModal({
					title: '提示',
					content: '是否删除图片',
					success: res => {
						if (res.confirm) {
							this.imageList1 = this.imageList1.filter((item, index) => {
								return i !== index;
							})
							// this.imageList.splice(i,1);
							this.chooseNum = --this.chooseNum;
							this.$emit('upload',this.imageList1);
						}
					},
				});
				
			},
			// 预览图片
			prevImage(index) {
				// console.log(this.imageList)
				// uni.previewImage({
				// 	urls: this.imageList[index],
				// 	success(res) {
				// 		console.log('res',res)
				// 	}
				// });
				uni.previewImage({
					urls:this.imageList1,
					success(res) {
						console.log('res',res)
					},
					current:index,
					fail(xx) {
						console.log(xx)
					}
				})
			
			},

			// 选择图片
			choosePic() {
				uni.chooseImage({
					count: this.allNum, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: res => {
						console.log(JSON.stringify(res));
						// console.log(JSON.stringify(res.tempFilePaths));
						if (this.imageList1.length < this.allNum) {
							this.imageList1.push(...res.tempFilePaths);
							console.log(this.allNum)
						}
						// this.imageList = this.imageList.slice(0, this.allNum)不要用它 不是数组变异方法
						this.imageList1.splice(this.allNum)
						this.$emit('upload',this.imageList1);
						this.chooseNum = this.imageList1.length;

					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.choose-pic {
		// border: 1px solid red;
		height: calc(100vh - 300rpx);

		.list {
			margin: 20rpx;

			.right {
				color: #D9D9D9;
			}
		}

		.list1 {
			height: 80%;
			margin: 20rpx;
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;

			&>view,
			&>button {
				margin: 0 40rpx;
				margin-bottom: 10rpx;
			}

			button {
				padding: 0;
				background-color: #F5F5F5;
				width: 150rpx;
				height: 150rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				border: none !important;

				view {
					color: #D9D9D9;
					font-size: 50rpx;
				}
			}

			.pic-list {
				width: 150rpx;
				height: 150rpx;
				position: relative;

				image {
					width: 100%;
					height: 100%;
					border-radius: 10rpx;
					border: 1px solid #eee;
				}

				view.iconfont {
					position: absolute;
					right: 10rpx;
					top: 10rpx;
					color: #fff;
					background-color: rgba(0, 0, 0, .5);
					border-radius: 10rpx;
					padding: 5rpx;
					// border:1px solid red;
				}
			}
		}
	}
</style>
