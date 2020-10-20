<template>
	<view class="container">
		<uni-nav-bar class="top" title="小纸条" statusBar="false">
			<view slot="left" @click="toFriend" class="iconfont icon-user-detail">
			</view>
			<view slot="right" @click="showMenu" class="iconfont icon-zengjia">
			</view>
		</uni-nav-bar>
		<!-- 菜单 -->
		<!-- 蒙层 -->
		<mask-nav v-show="flag" :menuFlag="flag" @clear="clearMessage" @toggle="changeFlag"></mask-nav>


		<block v-for="(item,index) in paperList">
			<paper-list :key="index" :tabIndex="index" :list="item"></paper-list>
		</block>
	</view>
</template>

<script>
	import maskNav from '../../my-components/maskNav/maskNav.vue'
	import paperList from '../../my-components/paperList/paperList.vue'
	export default {
		components: {
			paperList,
			maskNav
		},
		data() {
			return {
				listArr:[
					{name:'加糗友',id:1},
					{name:'清除未读',id:2}
				],
				flag: false,
				paperList: [{
						url: '../../static/img/topicpic/1.jpeg',
						name: '低头看雨',
						title: '六道快手家常菜，好吃又下饭，萨勒夫独立的司法',
						message: 0
					},
					{
						url: '../../static/img/topicpic/2.jpeg',
						name: '低头看雨',
						title: 'xxxxxx饭，萨勒夫独立的司法',
						message: 4
					},
					{
						url: '../../static/img/topicpic/3.jpeg',
						name: '低头看雨',
						title: '六道快手家常菜，好吃又下饭，萨勒夫独立的司法',
						message: 555
					},

					{
						url: '../../static/img/topicpic/6.jpeg',
						name: '低头看雨',
						title: '六道快手家常菜，好吃又下饭，萨勒夫独立的司法',
						message: 8
					},

					{
						url: '../../static/img/topicpic/7.jpeg',
						name: '低头看雨',
						title: '六道快手家常菜，好吃又下饭，萨勒夫独立的司法',
						message: 10
					},
				]
			}
		},
		methods: {
			toFriend(){
				uni.navigateTo({
					url: '../friendList/friendList',
				});
			},
		
			
			changeFlag(value){
				this.flag = value
			},
			showMenu(){
				console.log('xxx')
				this.flag = true
				console.log('xxx')
			},
			clearMessage(){
				this.paperList.forEach(item=>{
					item.message=0;
				})
			}
			
		},
		onPullDownRefresh() {
			setTimeout(() => {
				console.log('1111111111')
				uni.stopPullDownRefresh();
			}, 1000)
		}
	}
</script>

<style lang="scss">
	.container {
		position: relative;

		.top {
			.iconfont {
				font-size: 50rpx;
			}
		}
		
	}
</style>
