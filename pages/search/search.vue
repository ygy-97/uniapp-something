<template>
	<view >
		
		xxxx
	</view>
</template>

<script>
	export default {
		data() {
			return {
				firstName:'xx',
				lastName:'sss',
				age:18,
			}
		},
		// 监听原生标题栏按钮点击事件，参数为
		onNavigationBarButtonTap(obj) {
			console.log(obj)
			uni.navigateBack({
				delta:1
			})
		},
		onLoad(xx) {
			console.log(xx)
		}
	}
</script>

	
<style>
	.box{
		width: 400rpx;
		height: 400rpx;
		background-color: #3C3E49;
	}
	.inner{
		width: 300rpx;
		height: 300rpx;
		background-color: #0086B3;
	}
	.red{
		/* background-color: red; */
		border: 1px solid red;
	}
	.xx{
		color: red;
		width: 100rpx;
		height: 100rpx;
	}
	.blue{
		background-color: blue;
	}
	.xx>view:nth-of-type(2n){
		border: 1px solid red;
	}
	
</style>
