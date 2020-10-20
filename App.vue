<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	};
</script>

<style>
	@import "./static/animate.css";
	@import url("./static/iconfont.css");
	.flex-default{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.u-f,.u-f-jsb,.u-f-ac{
		display: flex;
	}
	.u-f-ac,.u-f-jsb{
		align-items: center;
	}
	.u-f-jsb{
		justify-content: space-between;
	}
</style>
