<template>
	<view class="page">
		
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="carousel">
			<swiper-item>
				<image src="../../static/swpic/5.jpg" class="carousel"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/swpic/70.jpg" class="carousel"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/swpic/3.jpg" class="carousel"></image>
			</swiper-item>
			<!-- <swiper-item v-for="(list,index) in carouselList" :key="index">
				<image :src="list.image" class="carousel"></image>
			</swiper-item> -->
		</swiper>
	</view>
</template>

<script>
	import common from "../../common/common.js";
	export default {
		data() {
			return {
				carouselList:[]
			}
		},
		onLoad() {
			var _this = this;
			//获取服务器地址
			var serverUrl = common.serverUrl;
			
			// //通过在main.js获取服务器地址
			// var serverUrl = _this.serverUrl;
			//请求轮播图的数据
			uni.request({
				url:serverUrl + '/index/carousel/list',
				method:"POST",
				data:{
					
				},
				header:{
					
				},
				success:(res) =>{
					console.log('轮播图数据',res.data);
					if(res.data.status == 200){
						_this.carouselList = res.data.data;
					}
				}
			})
		},
		methods: {
			
		}
	}
</script>

<style>
	@import url("index.css");
	.page{
		width: 100%;
		height: 100%;
		background-color: #f7f7f7;
	}
</style>
