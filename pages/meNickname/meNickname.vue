<template>
	<view class="page page-fill">
		<form @submit="formSubmitNickname">
			<view class="page-block" style="margin-top: 20upx;">
				<!-- <input
					type="text"
					:value="globalUser.nickname"
					name="nickname"
					class="input"
					placeholder-class="graywords"
					maxlength="10"
				 /> -->
				 <input
				 	type="text"
				 	value="jing"
				 	name="nickname"
				 	class="input"
				 	placeholder-class="graywords"
				 	maxlength="10"
				  />
			</view>
			
			<button type="primary" form-type="submit" class="submitBtn">提交</button>
			
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				globalUser:{}
			}
		},
		onLoad() {
			var _this = this;
			//获取用户信息缓存
			_this.globalUser = _this.getGlobalUser("globalUser");
		},
		methods: {
			formSubmitNickname(e){
				var _this = this;
				//获取value的值
				var nickname = e.detail.value.nickname;
				//console.log(nickname);
				uni.request({
					url:_this.serverUrl+"/user/xxxxxx",
					data:{
						"userId":_this.globalUser.id,
						"nickname":nickname
					},
					header:{
						"headerUserId": _this.globalUser.id,
						"headerUserToken": _this.globalUser.userUniqueToken
					},
					method:"POST,",
					success(res) {
						console.log(res);
						var resData = res.data;
						if(resData.status == 200){
							//获得最新的用户数据
							var userInfo = resData.data;
							uni.setStorageSync("globalUser",userInfo);
							uni.navigateBack({
								delta:1
							})
						}else if(resData.status == 502||resData.status == 500){
							uni.showToast({
								title:res.data.msg,
								image:"",
								duration:2000
							})
						}
					}
				})
				
			}
		}
	}
</script>

<style>
/* 页面铺满屏幕 */
.page-fill {
	width:100%;
	height: 100%;
	position: absolute;
}

.graywords {
	color: #EAEAEA;
}

.input {
	height: 80upx;
	line-height: 80upx;
	width: 500upx;
	margin-left: 40upx;
}

.submitBtn {
	width: 95%;
	margin-top: 40upx;
}
</style>
