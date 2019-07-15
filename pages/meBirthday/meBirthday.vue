<template>
	<view class="page page-fill">
		<form @submit="formSubmitBirthday">
			<view class="page-block" style="margin-top: 20upx;">
				<!--日期选择器-->
				<picker mode="date" @change="dateChange">
					<view class="birthday">{{birthday}}</view>
				</picker>
			</view>
			<button type="primary" form-type="submit" class="submitBtn">提交</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				birthday:"2019.12.18",
				globalUser:{}
			};
		},
		onLoad() {
			var _this = this;
			_this.globalUser = _this.getGlobalUser("globalUser");
			_this.birthday = _this.globalUser.birthday;
		},
		methods: {
			//选择日期
			dateChange(e){
				this.birthday = e.detail.value;
				console.log(this.birthday);
			},
			formSubmitBirthday(){
				var _this = this;
				var birthday = _this.birthday;
				uni.request({
					url:_this.serverUrl+'/user/xxxxxx',
					method:"POST",
					data:{
						"birthday":birthday,
						"userId":_this.globalUser.id
					},
					header:{
						"headerUserId": _this.globalUser.id,
						"headerUserToken": _this.globalUser.userUniqueToken
					},
					success(res) {
						console.log(res);
						var resData = res.data;
						if(resData.status == 200){
							//获取最新用户数据
							var userInfo = resData.data;
							uni.setStorageSync("globalUser",userInfo);
							uni.navigateBack({
								delta:1
							})
						}else if(resData.status == 502 || resData.status == 500){
							uni.showToast({
								title:res.data.msg,
								image:"",
								duration:20000
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

.birth-input {
	background-color: white;
	height: 80upx;
	line-height: 40upx;
	padding-left: 20upx;
}

.birthday {
	background-color: white;
	height: 80upx;
	padding-left: 20upx;
	padding-top: 30upx;
}

.submitBtn {
	width: 95%;
	margin-top: 40upx;
}
</style>
