<template>
	<view class="container">
		<view class="top">
			<image :src="detailObj.imgUrl" mode="aspectFill" lazy-load></image>
		</view>
		<view class="info">
			<view class="title flex-default">
				<image :src="detailObj.imgUrl" mode="widthFix" lazy-load></image>
				<view class="text">
					{{detailObj.title}}
				</view>
			</view>
			<view class="num flex-default">
				<view class="num1">
					<text>动态</text> {{detailObj.dongtai}}
				</view>
				<view class="num1">
					<text>今日</text> {{detailObj.today}}
				</view>
			</view>
			<view class="desc">
				{{detailObj.desc}}
			</view>
		</view>
		<!-- {{detailObj}} -->
		<tab-bar itemsWidth="100" class="nav" @change="navChange" :nav="nav" :currentIndex="curIndex"></tab-bar>
		<block v-for="item,index in contentArr">
			<common-list @xx=dataTong :info="item" :index="index" :key="item.id"></common-list>
		</block>
	</view>
</template>

<script>
	import tabBar from '../../my-components/tabBar/tabBar.vue'
	import commonList from '../../my-components/commonList/commonList.vue'
	export default {
		components:{
			tabBar,
			commonList
		},
		data() {
			return {
				nav:[{name:'默认',id:1},{name:'最新',id:2}],
				curIndex:0,
				detailObj: {},
				contentArr: [{
						id: 1,
						name: '三语先生',
						age: 23,
						sex: 1,
						logo: '../../static/img/topicpic/4.jpeg',
						title: '如何用手账改变一手动阀手动阀手动阀生？',
						url: '../../static/img/datapic/2.jpg',
						type: 'video',
						video_info: '20w次播放 2：47',
						address: '深圳 龙岗',
						dianzan: 945,
						pinlun: 12,
						forOther: 13,
						loadText: '上拉加载更多...',
						isGuanzu: false,
						isShare: false
					},
					{
						id: 2,
						name: '王府井',
						age: 18,
						sex: 0,
						logo: '../../static/img/topicpic/7.jpeg',
						title: '如何手写原码？',
						url: '../../static/img/datapic/8.jpg',
						type: 'video',
						video_info: '20w次播放 2：47',
						address: '深圳 龙岗',
						dianzan: 945,
						pinlun: 12,
						forOther: 13,
						loadText: '上拉加载更多...',
						isGuanzu: true,
						isShare: true
					}
				]
			};
		},
		methods:{
			navChange(index){
				this.curIndex = index;
			},
			dataTong(value) {
				this.contentArr[value.id] = value;
			},
			
		},
		onLoad(obj) {
			let index = obj.index;
			this.detailObj = uni.getStorageSync('huatiList')[index];
		}
	}
</script>

<style lang="scss">
	.container {
		// border: 1px solid red;
		position: relative;
		height: 100vh;

		.top {
			width: 100vw;
			height: 300rpx;

			image {
				width: 100%;
				height: 100%;
				filter: blur(5rpx);
			}
		}

		.info {
			// border: 1px solid red;
			width: 650rpx;
			position: absolute;
			left: 50rpx;
			top: 220rpx;
			.title {
				// border: 1px solid red;
				justify-content: flex-start;
				image {
					width: 150rpx;
					height: 150rpx;
					border-radius: 15rpx;
				}
				.text {
					font-size: 40rpx;
					margin: 55rpx 0 0 20rpx;
					// margin: 20rpx;
					// align-self: flex-end;
				}
			}
			.num{
				margin-top: 20rpx;
				color: #ccc;
				justify-content: flex-start;
				.num1{
					margin-right: 20rpx;
					text{
						margin-right: 10rpx;
					}
				}
			}
			.desc{
				margin-top: 20rpx;
				color: #B7B7B7;
			}
		}
		.nav{
			margin-top: 200rpx;
			// border: 1px solid red;
		}
	}
</style>
