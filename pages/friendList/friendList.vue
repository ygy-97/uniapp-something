<template>
	<view class="container">
		<tab-bar class="tab-bar" :nav="tabBars" :currentIndex="currentIndex" @change="navChange" itemsWidth="100"></tab-bar>
		
		<block v-for="item,index in friendArr">
			<friend-list :list="item" :index="index"></friend-list>
		</block>
		
	</view>
</template>

<script>
	import friendList from '../../my-components/friendList/friendList.vue'
	import tabBar from '../../my-components/tabBar/tabBar.vue'
	export default {
		components: {
			tabBar,friendList
		},
		data() {
			return {
				currentIndex: 0,
				friendArr:[
					{
						url: '../../static/img/topicpic/1.jpeg',
						name:'Sdifs',
						age:16,
						sex:0
					},
					{
						url: '../../static/img/topicpic/2.jpeg',
						name:'sdfsdf ',
						age:26,
						sex:1
					},
					{
						url: '../../static/img/topicpic/3.jpeg',
						name:'楼上的',
						age:23,
						sex:1
					},
					{
						url: '../../static/img/topicpic/5.jpeg',
						name:'受到法律',
						age:16,
						sex:1
					},
				],
				tabBars: [{
						id: 1,
						name: '互关',
						num: 10
					},
					{
						id: 2,
						name: '关注',
						num: 10
					}, {
						id: 3,
						name: '粉丝',
						num: 15
					}
				]
			};
		},
		onNavigationBarButtonTap(e) {
			console.log(e)
			let index = e.index;
			if (!e.index) {
				uni.navigateBack({
					delta: 1
				});
			}
		},
		methods: {
			navChange(index) {
				this.currentIndex = index;
			},
		},
		onLoad() {
			uni.getSystemInfo({
				success(e) {
					console.log(e)
				}
			})
		}
	}
</script>

<style lang="scss">

</style>
