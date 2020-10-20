<template>
	<view class="container">
		<tab-bar @change="navChange" :nav="titleList" :currentIndex="currentIndex"></tab-bar>
		<swiper :current="currentIndex" @change="itemChange">
			<swiper-item>
				<scroll-view scroll-y class="swiper-item" @scrolltolower="loadData">
					<block v-for="item,index in huatiList">
						<my-list :list="item" :key="index" :index="index"></my-list>
					</block>
					<uni-load-more :status="more"></uni-load-more>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item"></view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import tabBar from '../../my-components/tabBar/tabBar.vue'
	import myList from '../../my-components/myList/myList.vue'
	export default {
		components: {
			tabBar,
			myList
		},
		onLoad() {
			uni.setStorageSync('huatiList',this.huatiList);
		},
		methods: {
			navChange(index) {
				this.currentIndex = index;
			},
			itemChange(e) {
				let index = e.detail.current;
				this.currentIndex = index;
			},
			loadData() {
				this.more = 'loading'
				let num = Math.round(Math.random() * 15 + 1);
				setTimeout(() => {
					this.huatiList.push({
						imgUrl: '../../static/img/topicpic/' + num + '.jpeg',
						title: '#淘宝记录簿#',
						desc: '120斤到85斤 我的人生反转',
						dongtai: 545,
						today: 704
					})
					this.more = 'more'
				}, 1000)
			}
		},
		data() {
			return {
				more: 'more',
				currentIndex: 0,
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
					},
					{
						imgUrl: '../../static/img/topicpic/3.jpeg',
						title: '#天天打卡#',
						desc: '真是大方慷慨拉萨的法律塑料袋封口乐山大佛士大夫立刻',
						dongtai: 525,
						today: 747
					},
					{
						imgUrl: '../../static/img/topicpic/4.jpeg',
						title: '#天天打卡#',
						desc: '真是大方慷慨拉萨的法律塑料袋封口乐山大佛士大夫立刻',
						dongtai: 525,
						today: 747
					},
					{
						imgUrl: '../../static/img/topicpic/5.jpeg',
						title: '#天天打卡#',
						desc: '真是大方慷慨拉萨的法律塑料袋封口乐山大佛士大夫立刻',
						dongtai: 525,
						today: 747
					},

				],
				titleList: [{
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
			};
		}
	}
</script>

<style lang="scss">
	.container {
		swiper {
			height: calc(100vh - 100rpx);

			// border: 1px solid red;
			swiper-item {
				height: 100%;
				padding: 0 20rpx;
				box-sizing: border-box;

				scroll-view {
					height: 100%;
					// border: 1px solid red;
				}
			}
		}
	}
</style>
