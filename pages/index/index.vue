<template>
	
	<view class="page">
		<!--测试组件用例-->
			<!-- <hello-comp myval="hello next~"></hello-comp> -->
		<!--测试组件用例-->
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
		<!--热门-->
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/icon/hot.png" class="hot-ico"></image>
				<view class="hot-title">热门电影</view>
			</view>
		</view>
		
		<scroll-view scroll-x="true" class="page-block hot">
			<view class="single-poster">
				<view class="poster-wapper">
					<image src="../../static/hot/1.jpg" class="poster"></image>
					<view class="movie-name">复仇者联盟复4</view>
				</view>
				<!--评分-->
				
				<score-star innerScore="9.1" showNum="1"></score-star>
			</view>
			<view class="single-poster">
				<view class="poster-wapper">
					<image src="../../static/hot/2.jpg" class="poster"></image>
					<view class="movie-name">电影大冒险</view>
				</view>
				<score-star innerScore="8.5" showNum="1"></score-star>
			</view>
			<view class="single-poster">
				<view class="poster-wapper">
					<image src="../../static/hot/3.jpg" class="poster"></image>
					<view class="movie-name">被偷走的那五年</view>
				</view>
				<score-star innerScore="4.5" showNum="1"></score-star>
			</view>
			
			<view class="single-poster">
				<view class="poster-wapper">
					<image src="../../static/hot/4.jpg" class="poster"></image>
					<view class="movie-name">哈利波特与死亡圣器</view>
				</view>
				<score-star innerScore="7.2" showNum="1"></score-star>
			</view>
			<view class="single-poster">
				<view class="poster-wapper">
					<image src="../../static/hot/4.jpg" class="poster"></image>
					<view class="movie-name">哈利波特与死亡圣器</view>
				</view>
				<score-star innerScore="0" showNum="1"></score-star>
			</view>
			<!--动态渲染模块-->
			<!-- <view class="single-poster" v-for="(item,index) in hotList" :key="index">
				<view class="poster-wapper">
					<image :src="item.cover" class="poster"></image>
					<view class="movie-name">item.name</view>
				</view>
				<score-star :innerScore="item.score" showNum="1"></score-star>
			</view> -->
			
		</scroll-view>
		<!--热门结束-->
	</view>
</template>

<script>
	import common from "../../common/common.js";
	//调用组件
	// import helloComp from "../../components/helloComp/helloComp.vue";
	import scoreStar from "../../components/scoreStar/scoreStar.vue"
	export default {
		data() {
			return {
				carouselList:[],
				hotList:[]
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
			
			//查询热门电影
			uni.request({
				url:serverUrl+'/index/movie/hot?type=hot',
				method:'POST',
				success: (res) => {
					console.log('获取热门电影数据',res.data);
					if(res.data.status == 200){
						_this.hotList = res.data.data;
					}
				}
			})
		},
		methods: {
			
		},
		
		//注册组件
		components:{
			// helloComp
			scoreStar
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
