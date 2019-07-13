<template>
	<view class="page page-fill">
		<view class="page-block info-list">
			<!--头像-->
			<view class="item-wapper face-line-upbottom">
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
			<view class="item-wapper">
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
			<view class="item-wapper">
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
			<view class="item-wapper">
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
			<view class="footer-words" style="margin-top: 10upx;">
				退出登录
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sex:1
			}
		},
		methods: {
			//清楚缓存
			cleanStorage(){
				uni.clearStorageSync();
				uni.showToast({
					title:"清楚缓存成功",
					mask:false,
					duration:1500
				})
			}
		}
	}
</script>

<style>
@import url("meInfo.css");
</style>
