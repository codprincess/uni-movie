<template>
	<view class="page">
		<view class="search-block">
			<view class="search-ico-wapper">
				<image src="../../static/icon/search.png" class="search-ico"></image>
			</view>
			<input 
				placeholder="搜索预告" 
				maxlength="10" 
				class="search-text"
				confirm-type="search"
				@confirm="searchMe"
			/>
		</view>
		<view class="movie-list page-block">
			<!--数据渲染-->
			<view class="movie-wapper" v-for="(item,index) in searchList" :key="index">
				<image :src="item.cover" class="poster"></image>
			</view>
			<!--数据渲染结束-->
			<view class="movie-wapper">
				<image src="../../static/hot/2.jpg" class="poster"></image>
			</view>
			<view class="movie-wapper">
				<image src="../../static/hot/3.jpg" class="poster"></image>
			</view>
			<view class="movie-wapper">
				<image src="../../static/hot/4.jpg" class="poster"></image>
			</view>
			<view class="movie-wapper">
				<image src="../../static/hot/1.jpg" class="poster"></image>
			</view>
			<view class="movie-wapper">
				<image src="../../static/hot/2.jpg" class="poster"></image>
			</view>
			<view class="movie-wapper">
				<image src="../../static/hot/3.jpg" class="poster"></image>
			</view>
			<view class="movie-wapper">
				<image src="../../static/hot/4.jpg" class="poster"></image>
			</view>
			<view class="movie-wapper">
				<image src="../../static/hot/1.jpg" class="poster"></image>
			</view>
			<view class="movie-wapper">
				<image src="../../static/hot/2.jpg" class="poster"></image>
			</view>
			<view class="movie-wapper">
				<image src="../../static/hot/3.jpg" class="poster"></image>
			</view>
			<view class="movie-wapper">
				<image src="../../static/hot/4.jpg" class="poster"></image>
			</view>
			
		</view>
	</view>
</template>

<script>
	import common from "../../common/common.js";
	export default {
		data() {
			return {
				searchList:[],
				keywords:'',
				page:1,
				totalPages:1
			}
		},
		onLoad() {
			//请求数据
			var _this = this;
			//显示loading
			uni.showLoading({
				mask:true,
				title:"正在加载~~~"
			})
			//显示导航条加载
			uni.showNavigationBarLoading();
			
			//获取服务器地址
			var serverUrl = common.serverUrl;
			uni.request({
				url:serverUrl+'/search/list?keywords=&page=&pageSize=',
				method:'POST',
				success: (res) => {
					console.log('获取搜索的数据',res.data);
					if(res.data.status == 200){
						_this.searchList = res.data.data.rows;
					}
				},
				complete: () => {
					uni.hideNavigationBarLoading();
					uni.hideLoading();
					uni.stopPullDownRefresh();
				}
			})
		},
		methods: {
			pageSearchList(keywords,page,pageSize){
				
			},
			searchMe(e){
				var _this = this;
				//获取搜索数据
				var value = e.detail.value;
				console.log(value);
				_this.keywords = value;
				//先初始化为空
				_this.searchList = [];
			}
		}
	}
</script>

<style>
	@import url("search.css");
</style>
