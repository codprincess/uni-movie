<template>
	<view class="page page-fill">
		<view class="page-block info-list">
			<!--头像-->
			<view class="item-wapper face-line-upbottom" @click="operator">
				<view class="info-words">头像</view>
				<view class="right-wapper">
					<image class="face" src="../../static/icon/default-face.png"></image>
					<view class="arrow-block">
						<image src="../../static/icon/left-gray-arrow.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
			
			<view class="line-top">
				<view class="line"></view>
			</view>
			
			<!--昵称-->
			<view class="item-wapper" @click="modifyNickname">
				<view class="info-words">昵称</view>
				<view class="right-wapper">
					<view class="gray-fields">傻啦吧唧</view>
					<view class="arrow-block">
						<image src="../../static/icon/left-gray-arrow.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
			
			<view class="line-top">
				<view class="line"></view>
			</view>
			
			<!--生日-->
			<view class="item-wapper"  @click="modifyBirthday">
				<view class="info-words">生日</view>
				<view class="right-wapper">
					<view class="gray-fields">1999-12-19</view>
					<view class="arrow-block">
						<image src="../../static/icon/left-gray-arrow.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
			<view class="line-top">
				<view class="line"></view>
			</view>
			
			<!--性别-->
			<view class="item-wapper" @click="modifySex">
				<view class="info-words">性别</view>
				<view class="right-wapper">
					<view class="gray-fields">
						<view v-if="sex==1">男</view>
						<view v-else-if="sex == 0">女</view>
						<view v-else>未选择</view>
					</view>
					<view class="arrow-block">
						<image src="../../static/icon/left-gray-arrow.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
			
		</view>
		<view class="footer-wapper">
			<view class="footer-words" @click="cleanStorage">
				清理缓存
			</view>
			<view class="footer-words" style="margin-top: 10upx;" @click="logout">
				退出登录
			</view>
		</view>
	</view>
</template>

<script>
	import common from "../../common/common.js";
	export default {
		data() {
			return {
				sex:1
			}
		},
		methods: {
			//跳转
			modifyNickname(){
				uni.navigateTo({
					url:"../meNickname/meNickname"
				})
			},
			
			modifyBirthday(){
				uni.navigateTo({
					url:"../meBirthday/meBirthday"
				})
			},
			modifySex(){
				uni.navigateTo({
					url:"../sex/sex"
				})
			},
			
			//清楚缓存
			cleanStorage(){
				uni.clearStorageSync();
				uni.showToast({
					title:"清楚缓存成功",
					mask:false,
					duration:1500
				})
			},
			logout(){
				var globalUser = this.getGlobalUser("globalUser");
				var serverUrl = common.serverUrl;
				uni.request({
					url:serverUrl+'/user/logout?userId='+globalUser.id,
					method:"POST",
					success: (res) => {
						console.log(res);
						if(res.data.status == 200){
							uni.removeStorageSync("globalUser");
							uni.switchTab({
								url:"../me/me"
							})
						}
					}
				})
			},
			
			//预览和修改用户头像
			operator(){
				var _this = this;
				var globalUser = _this.getGlobalUser("globalUser");
				uni.showActionSheet({
					itemList:["查看头像","从相册中选择"],
					success(res) {
						console.log(res);
						var index = res.tapIndex;
						if(index == 0){
							//预览头像
							var faceArr = [];
							faceArr.push(globalUser.faceImage);
							uni.previewImage({
								urls:faceArr,
								current:faceArr[0]
							})
						}else if(index == 1){
							//选择上传头像
							uni.chooseImage({
								count:1,
								sizeType:["compressed"],
								sourceType:["album"],
								success(res) {
									console.log(res);
									//获得临时路径
									var tempFilePath = res.tempFilePaths[0];
									
									// #ifdef H5
									uni.navigateTo({
										url: "../meFace/meFace?tempFilePath=" + tempFilePath
									})
									// #endif
									//图片剪裁
									// #ifndef H5
										uni.navigateTo({
											url: "../faceCrop/faceCrop?tempFilePath=" + tempFilePath
										})
									// #endif
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
@import url("meInfo.css");
</style>
