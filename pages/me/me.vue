<template>
	<view class="page page-fill">
		<view class="header">
			
				<view v-if="userIsLogin">
					<image src="../../static/icon/face.png" class="face"></image>
				</view>
				<view v-else>
					<image src="../../static/icon/my.png" class="face"></image>
				</view>
				
				<view class="info-wapper" v-if="userIsLogin">
					<view class="nickname">
						傻啦吧唧
					</view>
					<view class="nav-info">
						ID:714195347
					</view>
				</view>
				<view v-else>
					<navigator url="../registLogin/registLogin">
						<view class="nickname register-login">
							注册/登录
						</view>
					</navigator>
					
					
				</view>
				<view class="set-wapper" v-if="userIsLogin">
					<image src="../../static/icon/setting.png" class="setting"></image>
				</view>
			</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userIsLogin:false
			}
		},
		onShow() {
			var _this = this;
			//用户状态切换
			var userInfo = uni.getStorageSync("globalUser");
			if(userInfo != null && userInfo != "" && userInfo != undefined){
				_this.userIsLogin = true;
				//获取到用户的信息
				_this.userInfo = userInfo;
			}else{
				_this.userIsLogin = false;
				_this.userInfo = {}
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import url("me.css");
</style>
