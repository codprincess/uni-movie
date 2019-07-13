<template>
	<view class="body">
		<form @submit="formSubmit">
			<view class="face-wapper">
				<image src="../../static/icon/default-face.png" class="face"></image>
			</view>
			
			<view class="info-wapper" style="margin-top: 60upx;">
				<label class="words-lbl">账号</label>
				<input name="username" type="text" value="" class="input" placeholder="请输入用户名" />
			</view>
			
			<view class="info-wapper" style="margin-top: 40upx;">
				<label class="words-lbl">密码</label>
				<input name="password" type="text" value="" password="true" class="input" placeholder="请输入密码"/>
			</view>
			
			<button type="primary" form-type="submit" style="margin-top: 60upx;width: 90%;">注册/登录</button>
		</form>
		
		<!--第三方登录h5不支持,隐藏-->
		<!-- #ifdef APP-PLUS || MP-WEIXIN || H5 -->
			<view class="third-wapper">
				<view class="third-line">
					<view class="single-line">
						<view class="line"></view>
					</view>
					
					<view class="third-words">第三方账号登录</view>
					<view class="single-line">
						<view class="line"></view>
					</view>
				</view>
				
				<view class="third-icos-wapper">
					<!-- 5+app 用qq/微信/微博 登录 小程序用微信小程序登录 h5不支持 -->
					<!-- #ifdef APP-PLUS -->
						<image src="../../static/icon/weixin.png" data-logintype="weixin"  class="third-ico"></image>
						<image src="../../static/icon/QQ.png" data-logintype="qq" class="third-ico" style="margin-left: 80upx;"></image>
						<image src="../../static/icon/weibo.png" data-logintype="sinaweibo" class="third-ico" style="margin-left: 80upx;"></image>
					<!-- #endif -->
					
					<!-- #ifdef MP-WEIXIN -->
						<button open-type='getUserInfo' @getuserinfo="wxLogin" class="third-btn-ico">
					</button>
					<!-- #endif -->
					
				</view>
				
			</view>
		<!-- #endif -->
		
	</view>
</template>

<script>
	import common from "../../common/common.js";
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			formSubmit(e){
				//debugger;
				//console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var _this = this;
				var username = e.detail.value.username;
				var password = e.detail.value.password;
				//console.log(username,password);
				//发起注册或者登录请求
				//获取服务器地址
				var serverUrl = common.serverUrl;
				uni.request({
					url:serverUrl+'/user/registOrLogin',
					data:{
						"username":username,
						"password":password
					},
					method:"POST",
					success: (res) => {
						console.log(res);
						if(res.data.status == 200){
							var userInfo = res.data,data;
							//保存变量到全局缓存
							uni.setStorageSync("globalUser",userInfo);
							//用户跳转
							uni.switchTab({
								url:"../me/me"
							})
						}else{
							uni.showToast({
								title:res.data.msg,
								duration:1000
							})
						}
					}
				})
			},
			
			//实现微信登录仅是微信小程序端
			wxLogin(e){
				// debugger;
				var _this = this;
				console.log(e);
				//获取微信用户的基本消息
				var userInfo = e.detail.userInfo;
				//实现微信登录
				uni.login({
					provider:"weixin",//得到的服务供应商
					success(loginResult) {
						console.log(loginResult);
						//获取微信登录的code:授权码
						var code = loginResult.code;
						// 设置登录到哪个对于的微信小程序，大家可以根据自己的后端去实现业务参数
						// [0:首页预告][1:电影预告][2:学院电影预告]
						var loginToWhichMP = 1;
						uni.request({
							url:_this.serverUrl+'/mpWXLogin/'+code,
							data:{
								"avatarUrl": userInfo.avatarUrl,
								"nickName": userInfo.nickName,
								"whichMP": loginToWhichMP
							},
							method:"POST",
							success(userResult) {
								console.log(userResult);
								var userInfo = userResult.data.data;
								//保存用户信息到缓存里
								uni.setStorageSync("globalUser",userInfo);
								//切换页面跳转
								uni.switchTab({
									url:"../me/me"
								})
							}
						})
					}
				})
			}
			
			
		}
	}
</script>

<style>
@import url("register.css");
</style>
