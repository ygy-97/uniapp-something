<template>
	<view class="container ">
		<tab-bar class="tab-bar" :nav="tabBars" :currentIndex="currentIndex" @change="navChange" itemsWidth="150"></tab-bar>

		<!-- swiper -->
		<swiper :current="currentIndex" @change="itemChange">
			<swiper-item>
				<scroll-view scroll-y class="swiper-item">

					<!-- 图文组件 -->
					<block v-for="(item,index) in newList" :key="item.id">
						<pic-content @click="toContentDetail(item)" @change="numChange" :info="item" :index="index"></pic-content>
					</block>

					<!-- 上拉加载 -->
					<!-- <load-more :loadText="item.loadText"></load-more> -->
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">xxx</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import picContent from '../../my-components/picContent/picContent.vue'
	import tabBar from '../../my-components/tabBar/tabBar.vue'
	import loadMore from '../../my-components/loadMore/loadMore.vue'
	export default {
		data() {
			return {

				currentIndex: 0,
				tabBars: [{
						id: 1,
						name: '关注',
					},
					{
						id: 2,
						name: '推荐',
					}, {
						id: 3,
						name: '体育',
					}, {
						id: 4,
						name: '热点',
					}, {
						id: 5,
						name: '财经',
					},
					{
						id: 6,
						name: '娱乐',
					}
				],

				newList: [{
					id: 1,
					name: '无锋',
					logo: '../../static/img/topicpic/1.jpeg',
					title: '如何用手账改变一生？',
					url: '../../static/img/datapic/2.jpg',
					type: 'video',
					video_info: '20w次播放 2：47',
					numInfo: {
						like: 999,
						bad: 111,
						index: 0, //0未操作 1:like 2:bad
					},
					pinlun: 12,
					forOther: 13,
					loadText: '上拉加载更多...'
				}, {
					id: 2,
					name: '无锋',
					logo: '../../static/img/topicpic/4.jpeg',
					title: '如何用手账改变一生？',
					url: '../../static/img/datapic/1.jpg',
					type: 'pic',
					numInfo: {
						like: 999,
						bad: 111,
						index: 1, //0未操作 1:like 2:bad
					},
					pinlun: 12,
					forOther: 13,
					loadText: '上拉加载更多...'
				}]
			}
		},
		components: {
			picContent,
			tabBar,
			loadMore
		},
		methods: {
			numChange(info) {
				this.newList[info.id] = info;
			},

			// 导航栏切换
			navChange(index) {
				this.currentIndex = index;
			},
			// swiper 滑动
			itemChange(e) {
				console.log(e)
				this.currentIndex = e.detail.current;
			},

		},
		// 监听原生标题栏搜索输入框输入内容变化事件
		onNavigationBarSearchInputClicked() {
			console.log('xxx')
			uni.navigateTo({
				url: '../search/search?id=1&name=uniapp'
			})
		},
		onNavigationBarButtonTap(e) {
			console.log(e.index)
			if (e.index == 1) {
				uni.navigateTo({
					url: '../addInput/addInput'
				})
			}
			if (e.index == 0) {
				console.log(e)
				uni.navigateTo({
					url: "../myCanvas/myCanvas"
				})
			}
		},
		created() {}
	}
</script>

<style lang="scss">
	.container {
		width: 100vw;
		box-sizing: border-box;
		padding: 0 20px;
		font-size: 14px;
		line-height: 24px;

		.tab-bar {
			margin-bottom: 30rpx;
		}

		swiper {
			// border: 1px solid red;
			height: calc(100vh - 130rpx);

			.swiper-item {
				height: 100%;
			}
		}
	}
</style>
