<template>
	<view class="container">
		<!-- 导航栏 start-->
		<my-nav-bar class="nav-bar" @change="changeIndex" :titleArr="titleArr" :curIndex="curIndex"></my-nav-bar>
		<!-- 导航栏 end -->

		<swiper :current="curIndex" @change="itemChange">
			<swiper-item class="swiper-item1">
				<scroll-view scroll-y @scrolltolower="loadData">
					<block v-for="item,index in contentArr">
						<common-list @xx=dataTong :info="item" :index="index" :key="item.id"></common-list>
					</block>
					<uni-load-more :status="more"></uni-load-more>
				</scroll-view>

			</swiper-item>

			<swiper-item class="swiper-item2">
				<scroll-view scroll-y>
					<view class="search">
						<input type="text" placeholder-class="iconfont icon-sousuo holder" placeholder="搜索内容" icon :value="searchText" />
					</view>

					<swiper indicator-active-color="#eee" class="huatiSwiper" indicator-dots autoplay :interval="2000" :duration="500"
					 circular>
						<swiper-item v-for="(item,index) in swiperList">
							<image :src="item.url" mode="aspectFill" lazy-load></image>
						</swiper-item>

					</swiper>

					<!-- 分类 -->
					<my-kid :kidArr="kidArr"></my-kid>

					<!-- 最近更新 -->
					<view class="list">
						<view class="title">
							最近更新
						</view>
						<block v-for="item,index in huatiList">
							<my-list  :key="item.url" class="item" :list="item" :index="index"></my-list>
						</block>
					</view>
				</scroll-view>

			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import myKid from '../../my-components/myKid/myKid.vue'
	import commonList from '../../my-components/commonList/commonList.vue'
	import myNavBar from '../../my-components/myNavBar/myNavBar.vue'
	import myList from '../../my-components/myList/myList.vue'
	export default {
		components: {
			commonList,
			myNavBar,
			myList,
			myKid
		},
		data() {
			return {
				searchText: '',
				more: 'more',
				huatiList: [{
						imgUrl: '../../static/img/topicpic/4.jpeg',
						title: '#淘宝记录簿#',
						desc: '120斤到85斤 我的人生反转',
						dongtai: 545,
						today: 704
					},
					{
						imgUrl: '../../static/img/topicpic/2.jpeg',
						title: '#你亲生经历的灵异事件#',
						desc: '走出去才发现你跟别人差的不是一星半点',
						dongtai: 345,
						today: 604
					},
					{
						imgUrl: '../../static/img/topicpic/7.jpeg',
						title: '#天天打卡#',
						desc: '真是大方慷慨拉萨的法律塑料袋封口乐山大佛士大夫立刻',
						dongtai: 525,
						today: 747
					}
				],
				kidArr: [{
						id: 1,
						name: '最新'
					},
					{
						id: 2,
						name: '游戏'
					},
					{
						id: 3,
						name: '情感'
					},
					{
						id: 4,
						name: '打卡'
					},
					{
						id: 5,
						name: '故事'
					},
					{
						id: 6,
						name: '喜爱'
					},
				],
				swiperList: [{
						url: '../../static/img/banner1.jpg',
						id: 1
					},
					{
						url: '../../static/img/banner2.jpg',
						id: 2
					},
					{
						url: '../../static/img/banner3.jpg',
						id: 3
					}


				],
				curIndex: 1,
				titleArr: [{
						name: '关注',
						id: 1
					},
					{
						name: '话题',
						id: 2
					}
				],
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
			}
		},
		onLoad() {
			console.log(this.contentArr)
			uni.setStorageSync('huatiList',this.huatiList);
		},
		methods: {
			
			itemChange(e) {
				let index = e.detail.current;
				// console.log(e)
				this.curIndex = index;
			},
			changeIndex(index) {
				this.curIndex = index;
			},
			dataTong(value) {
				this.contentArr[value.id] = value;
			},
			loadData() {
				console.log('loading')
				this.more = 'loading';
				setTimeout(() => {
					this.contentArr.push({
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
					});
					this.more = 'more';
				}, 500)
			}
		},
		onReachBottom() {

		}
	}
</script>

<style scoped lang="scss">
	.container {
		scroll-view {
			height: 100%;
		}

		// border: 1px solid red;
		swiper {
			// border: 1px solid red;
			height: calc(100vh - 160rpx);

			// width: 100%;
			.swiper-item1 {
				height: 100%;

				scroll-view {
					height: 100%;
				}
			}

			.swiper-item2 {
				box-sizing: border-box;

				// width: 100%;
				.search {
					background-color: #F4F4F4;
					// border: 1px solid red;
					border-radius: 20rpx;
					margin: 20rpx;

					input {
						padding: 20rpx;
					}

					.holder {
						text-align: center;
					}
				}

				.huatiSwiper {
					height: 300rpx;
					margin: 20rpx;

					// border: 1px solid red;
					swiper-item {
						image {
							width: 100%;
							height: 100%;
							border-radius: 20rpx;
						}
					}
				}

				.list {
					margin: 20rpx 20rpx;
					// border: 1px solid red;
					height: 400rpx;

					.title {
						font-size: 35rpx;
					}

					.item {}
				}
			}
		}
	}
</style>
