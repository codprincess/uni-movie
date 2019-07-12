<template>
	<view class="black">
		<image src="../../static/hot/1.jpg" class="cover" mode="widthFix"></image>
		<!--动态绑定数据-->
		<!-- <image
			:src="cover"
			class="cover" 
			mode="widthFix"></image> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cover:''
			}
		},
		onLoad(params) {
			//获取跳转页面的数据
			var cover = params.cover;
			this.cover = cover;
			console.log(this.cover)
			//通过api修改导航栏属性
			uni.setNavigationBarColor({
				frontColor:"#FFFFFF",
				backgroundColor:"#000000"
			})
		},
		methods: {
			
		}
	}
</script>

<style>
.black{
	background-color: #000000;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: fixed;
}
.cover{
	align-self: center;
}
</style>
