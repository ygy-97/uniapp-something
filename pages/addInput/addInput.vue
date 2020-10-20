<!-- 发布页 -->
<template>
	<view class="container">
		<!-- 状态栏 -->
		<uni-nav-bar @clickLeft="backLast" statusBar="true" @clickRight="publish" left-icon="back" right-text="发布">
			<view class="title flex-default" @click="toggleItem">
				{{title}}
				<view class="iconfont icon-xialazhankai"></view>
			</view>
		</uni-nav-bar>
		<textarea v-model="text" placeholder="说一句话吧~" />


		<!-- 上传文件 -->
		<upload-image :allNum="5" :imageList="imageList" @upload="tongbu"></upload-image>
		
		<!-- 弹出层 -->
		<uni-popup ref="popup" animation type="center">
			<view class="dialog flex-default">
				<image src="../../static/img/pop-img.png" mode="widthFix"></image>
				<view class="texts">
					<view class="text-list">
						1.涉及黄色、政治、广告及骚扰信息
					</view>
					<view class="text-list">
						2.涉及人身攻击
					</view>
					<view class="text-list">
						3.留联系方式，透露他人隐私
					</view>
					<view class="text-list">
						一经核实将被封禁，情节严重者永久封禁
					</view>
				</view>
				
				<button type="default" @click="close">朕知道了</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uploadImage from '../../my-components/uploadImage/uploadImage.vue'
	let titleNav = ['仅自己可见', '所有人可见'];
	export default {
		data() {
			return {
				flag:true,
				title: '所有人可见',
				text:'',
				imageList:[],
			};
		},
		components:{
			uploadImage
		},
		created() {
			console.log('xxxx')
			let info = uni.getStorageSync('info');
			console.log('info',info)
			if(info){
				this.text = info.text;
				this.imageList = info.imageList;
			}
			
		},
		mounted() {
			
			this.$refs.popup.open();
		},
		// 监听页面返回
		onBackPress() {
			console.log(this.text,this.imageList)
			
			//为空 直接返回
			if(this.text=='' && this.imageList.length==0){
				return;
			}
			//填写了信息
			if(this.flag){
				this.saveMessage();
			}
			return this.flag;//阻止返回事件
			
		},
		methods: {
			//保存草稿
			saveMessage(){
				uni.showModal({
					title: '提示',
					content: '是否保存为草稿',
					cancelText: '不保存',
					confirmText: '保存',
					success: res => {
						if(res.confirm){
							uni.setStorageSync('info',{text:this.text,imageList:this.imageList});
						}else{
							uni.setStorageSync('info',{text:'',imageList:[]});
						};
						console.log(uni.getStorageSync('info'))
						this.flag = false;
						uni.navigateBack({
							delta: 1
						});
					},
				});
			},
			
			// 返回上一级
			backLast() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 点击发布
			publish() {
			},
			close(){
				this.$refs.popup.close();
			},
			
			// 切换
			toggleItem() {
				uni.showActionSheet({
					itemList: titleNav,
					success: (res) => {
						this.title = titleNav[res.tapIndex];
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},
			//子->父同步数据
			tongbu(arr){
				this.imageList = arr;
			}
			
			

		}
	}
</script>

<style lang="scss">
	.container {
		.title {
			text-align: center;
			margin: 0 auto;
			// border: 1px solid red;
		}
		textarea{
			border-bottom: 1px solid #eee;
			width: 100%;
			padding: 20rpx;
			box-sizing: border-box;
		}
		.dialog{
			width: 80vw;
			height:80vw;
			background-color: #fff;
			flex-direction: column;
			justify-content: space-around;
			padding: 10rpx;
			border-radius: 10rpx;
			image{
				width: 50%;
				height: 50%;
			}
			.texts{
				// width: ;
				font-size: 30rpx;
				.text-list{
					margin: 10rpx 0;
				}
			}
			button{
				background-color: #FFE934;
				width: 90%;
			}
			
		}
	}
</style>
