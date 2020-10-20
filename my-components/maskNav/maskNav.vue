<template>
	<view class="maskNav" @click="close">
		<view class="menu" >
			<view class="list flex-default" hover-class="active" @click="addFirend">
				<view class="iconfont icon-sousuo">
				</view>
				加糗友
			</view>
			<view class="list flex-default" hover-class="active" @click="clear">
				<view class="iconfont icon-qingchu">
				</view>
				清除未读
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			menuFlag:{
				type:Boolean
			},
		},
		data(){
			return{
				flag:this.menuFlag
			}
		},
		methods:{
			close(){
				this.$emit('toggle',false);
			},
			addFirend(){
				console.log('添加friend')
				this.close()
			},
			clear(){
				this.$emit('clear')
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	.maskNav{
		position: fixed;
		width: 100vw;
		height: 100vh;
		left: 0;
		top: 0;
		z-index: 50;
		background-color: rgba(0,0,0,.2);
	
		.menu {
			width: 375rpx;
			border-radius: 10rpx;
			box-shadow: 0 0 30rpx 5rpx #ccc;
			position: absolute;
			right: 0;
			top: 150rpx;
			z-index: 100;
			background-color: #fff;
			.list {
				justify-content: flex-start;
				.iconfont {
					margin: 20rpx;
					font-weight: 600;
				}
			}
			.active{
				background-color: #eee;
			}
		}
	}
</style>
