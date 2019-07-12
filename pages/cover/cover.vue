<template>
	<view class="black">
		<image @longpress="operator" src="../../static/hot/1.jpg" class="cover" mode="widthFix"></image>
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
			// uni.setNavigationBarColor({
			// 	frontColor:"#FFFFFF",
			// 	backgroundColor:"#000000"
			// })
		},
		methods: {
			operator(){
				var _this = this;
				uni.showActionSheet({
					itemList:["下载图片","分享链接","其他"],
					success: (res) => {
						console.log(res);
						if(res.tapIndex == 0){
							console.log("亲,正在请求下载哦~~~~");
							uni.showLoading({
								title:"图片保存中~~~~"
							})
							
							uni.downloadFile({
								url:_this.cover,
								success: (res) => {
									console.log(result);
									var tempFilePath = result.tempFilePath;
									
									uni.saveImageToPhotosAlbum({
										filePath:tempFilePath,
										success: () => {
											uni.showToast({
												title:"保存成功~~~",
												duration:2000
											})
										},
										complete: () => {
											uni.hideLoading();
										}
									})	
									
								}
							})
						}
					}
				})
			}
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
