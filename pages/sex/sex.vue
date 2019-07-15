<template>
	<view class="page page-fill">
		<form @submit="formSubmitSex">
			<view class="page-block" style="margin-top: 20upx;">
				<radio-group class="radio-sex" @change="sexChange">
					<label class="radio-singe">
						<radio value="1" :checked="sex==1">男</radio>
					</label>
					<label class="radio-singe">
						<radio value="0" :checked="sex==0">女</radio>
					</label>
				</radio-group>
			</view>
			<button type="primary" form-type="submit" class="submitBtn">提交</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sex:1,
				globalUser: {},
			}
		},
		//先获取缓存
		onLoad() {
			var _this = this;
			_this.globalUser = _this.getGlobalUser("globalUser");
			_this.sex = _this.globalUser.sex;
		},
		methods: {
			sexChange(e){
				//获取选择的性别
				this.sex = e.detail.value;
				console.log(this.sex);
			},
			
			formSubmitSex(){
				var _this = this;
				uni.request({
					url:_this.serverUrl+"/user/xxxxxxx",
					data:{
						"userId":_this.globalUser.id,
						"sex":_this.sex
					},
					header:{
						"headerUserId": _this.globalUser.id,
						"headerUserToken": _this.globalUser.userUniqueToken
					},
					method:"POST",
					success(res) {
						console.log(res);
						if(res.data.data.status == 200){
							var userInfo = res.data.data;
							uni.setStorageSync("globalUser",userInfo);
							uni.navigateBack({
								delta:1
							})
						}else{
							uni.showToast({
								title: res.data.msg,
								image: "",
								duration: 2000
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

.radio-sex {
	display: flex;
	flex-direction: row;
}

.radio-single {
	padding: 20upx 20upx;
}

.submitBtn {
	width: 95%;
	margin-top: 40upx;
}
</style>
