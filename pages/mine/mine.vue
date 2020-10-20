<template>
	<view>
		<button type="default" @click="flag=!flag">add</button>{{flag}}
		<view class="animate__animated" :class="flag==true?'animate__backInDown':''">
			xxxx
		</view>
		<view class="red">
			xslfd
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				flag:false
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
