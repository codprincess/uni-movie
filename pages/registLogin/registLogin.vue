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
						}
					}
				})
			}
			
			
		}
	}
</script>

<style>
@import url("register.css");
</style>
