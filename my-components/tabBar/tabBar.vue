<template>
	<view class="nav-tabs">
		<scroll-view class="scroll" scroll-x>
			<view class="items flex-default" :style="{width:itemsWidth+'%'}">
				<view v-for="(item,index) in nav" @tap="changeItem(index)" :class="{active:index==currentIndex}">{{item.name}} {{item.num?item.num:''}}</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		props: {
			nav: {
				type: Array,
				required: true
			},
			currentIndex: {
				type: Number
			},
			itemsWidth:{
				default:''
			}
		},
		methods:{
			changeItem(index){
				this.$emit('change',index);
			} 
		}
	}
</script>

<style lang="scss" scoped>
	.nav-tabs {
		width: 100%;
		// border: 1px solid red;
		.scroll {
			width: 100%;
			height: 100rpx;
			// border: 1px solid red;
			border-bottom: 1px solid #eee;
			.items {
				// width: 150%;
				height: 100%;
				justify-content: space-around;
				view {
					color: #969696;
					&.active {
						position: relative;
						font-weight: 600;
						color: #000;
						&::after{
							content:'';
							position: absolute;
							display: block;
							bottom: -10rpx;
							width: 100%;
							border-bottom: 10rpx solid #FEDE33;
							border-radius: 20rpx;
						}
					}
				}
			}
		}
	}
</style>
