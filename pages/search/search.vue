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
				<image 
					:src="item.cover" 
					:data-detailId="item.id" 
					@click="showDetail"
					class="poster"></image>
			</view>
			<!--数据渲染结束-->
			<view class="movie-wapper">
				<image @click="showDetail2" src="../../static/hot/2.jpg" class="poster"></image>
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
		//页面上拉触底事件处理函数
		onReachBottom() {
			var _this = this;
			var page = _this.page+1;
			var keywords = _this.keywords;
			var totalPages = _this.totalPages;
			//如果当前需要分页的分页数和总页数相等,就不分页
			if(page>totalPages){
				return;
			}
			//分页处理
			_this.pageSearchList(keywords,page,15)
		},
		methods: {
			pageSearchList(keywords,page,pageSize){
				var _this = this;
				uni.showLoading({
					mask:true,
					title:"请稍等哟~~~"
				});
				uni.showNavigationBarLoading();
				var serverUrl = _this.serverUrl;
				uni.request({
					url:serverUrl+'/search/list?keywords='+keywords+'&page='+page+'&pageSize='+pageSize,
					method:'POST',
					success: (res) => {
						console.log('搜索到的内容',res);
						if(res.data.status == 200){
							_this.searchTempList = res.data.data.rows;
							console.log(_this.searchTempList)
							//数组与数组的拼接
							_this.searchList = _this.searchList.concat(searchTempList);
							console.log(_this.searchList);
							//获取页数
							_this.totalPages = res.data.data.total;
							_this.page = page;//覆盖当前页面的page
						}
					}
				})
			},
			searchMe(e){
				var _this = this;
				//获取搜索数据
				var value = e.detail.value;
				console.log(value);
				_this.keywords = value;
				//先初始化为空
				_this.searchList = [];
				_this.pageSearchList(value,1,15);
			},
			
			//查电影预告详情
			showDetail(e){
				var detailId = e.currentTarget.dataset.detailid;
				console.log(detailId);
				uni.navigateTo({
					url:"../movie/movie?detailId="+detailId
				})
			},
			
			//无数据处理时,只针对固定跳转
			showDetail2(){
				//有返回键但是没有底部导航栏
				//页面跳转接口api
				uni.navigateTo({
					url:"../movie/movie"
				})
				
				//要在tabBar里面有设置才能跳转
				// uni.switchTab({
				// 	url:"../me/me"
				// })
				// uni.reLaunch({
				// 	url:"../movie/movie"
				// })
				//没有返回箭头,但是有底部导航栏
				// uni.redirectTo({
				// 	url:"../movie/movie"
				// })
			}
		}
	}
</script>

<style>
	@import url("search.css");
</style>
