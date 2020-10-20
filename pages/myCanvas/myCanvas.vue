<template>
	<view>
		<view class="box">
			<canvas v-if="flag" canvas-id="myCan" style="width: 400rpx;height: 400rpx;"></canvas>
		</view>
		<button type="default" size="mini" @click="createPic">生成+保存图片</button>
		<button type="default" @click="start">开始</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				flag: false,
				num: 'ygy',
				timer: null
			};
		},
		onLoad() {

		},
		methods: {
			start() {
				clearInterval(this.timer)
				this.flag = true;
				let i = 0;
				var ctx = uni.createCanvasContext('myCan');
				this.timer = setInterval(() => {
					i++;
					this.progress(ctx, i)
					if (i == 600) {
						clearInterval(this.timer)
						setTimeout(() => {
							this.flag = false;
						}, 200)
					}
				}, 10)
			},
			// 画图
			draw() {

			},
			// 生成图片
			createPic() {
				uni.getLocation({
					type: 'gcj02', //返回可以用于uni.openLocation的经纬度
					success: function(res) {
						const latitude = res.latitude;
						const longitude = res.longitude;
						uni.openLocation({
							latitude: latitude,
							longitude: longitude,
							success: function() {
								console.log('success');
							}
						});
					}
				});
				uni.canvasToTempFilePath({
					canvasId: 'myCan',
					fileType: "png",
					success: async (e) => {
						console.log(e.tempFilePath, 'xxx')
						let flag = await this.getSetting();
						if (flag !== false) {
							this.savePic(e.tempFilePath);
						} else {
							uni.showModal({
								title: '温馨提示',
								content: '你关闭了访问相册的权限，请前往设置授权',
								showCancel: false,
								success: async res => {
									if (res.confirm) {
										let flag = await this.openSetting();
										if (flag) {
											this.savePic(e.tempFilePath)
										} else {
											uni.showToast({
												title: '温馨提示',
												content: '你关闭了访问相册的权限，无法保存，请允许访问相册',
												showCancel: false
											})
										}
									}
								},
								fail: () => {},
							});
						}

					},
					fail(err) {
						console.log(err, '生成图片失败')
					}
				})
			},

			// 保存到本地
			savePic(filePath) {
				uni.saveImageToPhotosAlbum({
					filePath: filePath,
					success(res) {
						uni.showToast({
							title: '成功'
						});
					},
					fail(e) {
						console.log(e, '保存图片失败')
					}
				})
			},

			// 获取权限
			getSetting() {
				return new Promise((resolve, reject) => {
					uni.getSetting({
						success(res) {
							resolve(res.authSetting["scope.writePhotosAlbum"])
						},
						fail() {
							reject(false)
						}
					})
				})
			},
			// 打开权限列表
			openSetting() {
				return new Promise((resolve, reject) => {
					uni.openSetting({
						success(res) {
							resolve(res.authSetting["scope.writePhotosAlbum"])
						}
					})
				})
			},

			showModal() {
				uni.showModal({
					title: '温馨提示',
					content: '你关闭了访问相册的权限，请前往设置授权',
					showCancel: false,
				});
			},


			// 进度条
			progress(ctx, num) {
				var ctx = uni.createCanvasContext('myCan');
				let value = parseInt((num / 600) * 100) + '%';
				ctx.rect(0, 0, 200, 200);
				ctx.lineCap = "round";;
				ctx.beginPath();
				ctx.arc(100, 100, 60, 1.5 * Math.PI, 1.5 * Math.PI + Math.PI / 3000 * num * 10);
				ctx.createLinearGradient(0, 0, 170, 0);
				/* 渐变 */
				const grd = ctx.createLinearGradient(0, 0, 170, 0);
				grd.addColorStop("0", "#e0c3fc");
				grd.addColorStop(1, "#8ec5fc");
				ctx.strokeStyle = grd;
				ctx.lineWidth = 8;
				/* 阴影 */
				ctx.fillText(value, 90, 100)
				ctx.shadowBlur = 2;
				ctx.shadowColor = "#89f7fe";
				// setTimeout(function() { //必须延迟执行 不然H5不显示
				ctx.stroke();
				ctx.draw() //必须加上  uniapp 没这儿玩意儿 显示不出来不比原生  不加可以显示
				// }, 200)
				// console.log(num)
			}
		},
		onReady() {

		}
	}
</script>

<style lang="scss">
	.box {
		width: 400rpx;
		height: 400rpx;
		border: 1px solid red;
	}
</style>
