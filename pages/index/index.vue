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
		<!--热门预告片-->
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/icon/tari.png" class="hot-ico"></image>
				<view class="hot-title">热门预告</view>
			</view>
		</view>
		<view class="hot-movies page-block">
			<video 
				class="hot-movie-single" 
				src="https://vfx.mtime.cn/Video/2019/07/11/mp4/190711092020039399_480.mp4" 
				controls=""
				id="myVideo"
				>
				
			</video>
			<video class="hot-movie-single" src="https://vfx.mtime.cn/Video/2019/07/11/mp4/190711095403507305_480.mp4" controls="">
				
			</video>
			<!-- <video 
				v-for="(item,index) in hotTrailer"
				:src="item.trailer"
				:poster="trailer.poster"
				class="hot-movie-single"
				:id="item.id"
				:data-playintIndex="item.id"
				@play="isPlaying"
				controls>
				
			</video> -->
		</view>
		<!--热门预告结束-->
		
		<!--猜你喜欢-->
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/icon/like.png" class="hot-ico"></image>
				<view class="hot-title">猜你喜欢</view>
			</view>
		</view>
		<!--进行数据渲染-->
		<view class="page-block guess-u-like">
			<view class="single-like-movie" v-for="(guess,gindex) in guessULike" :key="gindex">
				<image :src="guess.cover" class="like-movie"></image>
				<view class="movie-desc">
					<view class="movie-title">
						{{guess.name}}
					</view>
					
					<score-star innerScore="9.1" showNum="0"></score-star>
					<view class="movie-info">
						{{guess.basicInfo}}
					</view>
					<view class="movie-info">
						{{guess.releaseDate}}
					</view>
				</view>
				<view class="movie-oper" :data-gindex="gindex" @click="praiseMe">
					<image src="../../static/icon/zan.png" class="praise-ico"></image>
					<view class="praise-me">点赞</view>
					<view :animation="animationDataArr[gindex]" class="praise-me animation-opacity">+1</view>
				</view>
			</view>
		</view>
		<!--数据渲染部分结束-->
	
		<view class="page-block guess-u-like">
			<view class="single-like-movie">
				<image src="../../static/hot/1.jpg" class="like-movie"></image>
				<view class="movie-desc">
					<view class="movie-title">
						复仇者联盟4
					</view>
					
					<score-star innerScore="9.1" showNum="0"></score-star>
					<view class="movie-info">
						2019 / 美国 / 科幻 / 动作
					</view>
					<view class="movie-info">
						安东尼·罗素、乔·罗素
					</view>
				</view>
				<view class="movie-oper" @click="praiseMe">
					<image src="../../static/icon/zan.png" class="praise-ico"></image>
					<view class="praise-me">点赞</view>
					<view :animation="animationData" class="praise-me animation-opacity">+1</view>
				</view>
			</view>
			
			
			<view class="single-like-movie">
				<image src="../../static/hot/1.jpg" class="like-movie"></image>
				<view class="movie-desc">
					<view class="movie-title">
						复仇者联盟4
					</view>
					
					<score-star innerScore="9.1" showNum="0"></score-star>
					<view class="movie-info">
						2019 / 美国 / 科幻 / 动作
					</view>
					<view class="movie-info">
						安东尼·罗素、乔·罗素
					</view>
				</view>
				<view class="movie-oper" @click="praiseMe">
					<image src="../../static/icon/zan.png" class="praise-ico"></image>
					<view class="praise-me">点赞</view>
					<view :animation="animationData" class="praise-me animation-opacity">+1</view>
				</view>
			</view>
			
			<view class="single-like-movie">
				<image src="../../static/hot/1.jpg" class="like-movie"></image>
				<view class="movie-desc">
					<view class="movie-title">
						复仇者联盟4
					</view>
					
					<score-star innerScore="9.1" showNum="0"></score-star>
					<view class="movie-info">
						2019 / 美国 / 科幻 / 动作
					</view>
					<view class="movie-info">
						安东尼·罗素、乔·罗素
					</view>
				</view>
				<view class="movie-oper" @click="praiseMe">
					<image src="../../static/icon/zan.png" class="praise-ico"></image>
					<view class="praise-me">点赞</view>
					<view :animation="animationData" class="praise-me animation-opacity">+1</view>
				</view>
			</view>
			<view class="single-like-movie">
				<image src="../../static/hot/1.jpg" class="like-movie"></image>
				<view class="movie-desc">
					<view class="movie-title">
						复仇者联盟4
					</view>
					
					<score-star innerScore="9.1" showNum="0"></score-star>
					<view class="movie-info">
						2019 / 美国 / 科幻 / 动作
					</view>
					<view class="movie-info">
						安东尼·罗素、乔·罗素
					</view>
				</view>
				<view class="movie-oper" @click="praiseMe">
					<image src="../../static/icon/zan.png" class="praise-ico"></image>
					<view class="praise-me">点赞</view>
					<view :animation="animationData" class="praise-me animation-opacity">+1</view>
				</view>
			</view>
		</view>

		
		<!--猜你喜欢结束-->
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
				hotList:[],
				hotTrailer:[],
				animationData:{},
				animationDataArr:[],
				guessULike:[]
			}
		},
		//下拉刷新
		onPullDownRefresh() {
			this.refresh();
		},
		
		//视频操作,页面隐藏的时候暂停
		onHide() {
			if(this.videoContext){
				this.videoContext.pause();
			}
		},
		
		onUnload(){
			//页面卸载的时候,清楚动画数据
			this.animationData = {};
			this.animationDataArr = [];
		},
		onLoad() {
			var _this = this;
			
			//解决跨端问题
			// #ifndef APP-PLUS || MP-WEIXIN || H5
				//在创建页面时,创建一个临时动画对象
				_this.animation = uni.createAnimation();
			// #endif
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
			});
			
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
			});
			
			//获取热门预告片的数据
			uni.request({
				url:serverUrl+'/index/movie/hot?type=trailer',
				method:"POST",
				success: (res) => {
					if(res.data.status == 200){
						_this.hotTrailer = res.data.data;
					}
				}
			});
			
			_this.refresh();
			//查询猜你喜欢的数据列表
			// uni.request({
			// 	url:serverUrl+'/index/guessULike',
			// 	method:	'POST',
			// 	success: (res) => {
			// 		if(res.data.status == 200){
			// 			_this.guessULike = res.data.data;
			// 		}
			// 	}
			// })
			
			
		},
		methods: {
			refresh(){
				var _this = this;
			
				uni.showLoading({
					mask:true, //不可点击其他页面
				});
				uni.showNavigationBarLoading();//显示导航条
				//获取服务器地址
				var serverUrl = common.serverUrl;
				
				//查询猜你喜欢的数据列表
				uni.request({
					url:serverUrl+'/index/guessULike',
					method:	'POST',
					success: (res) => {
						if(res.data.status == 200){
							_this.guessULike = res.data.data;
						}
					},
					complete: () => {
						//对应上文的显示,有显示就有隐藏
						//隐藏导航条loading
						uni.hideNavigationBarLoading()
						//将loading隐藏掉
						uni.hideLoading();
						//停止当前页面刷新
						uni.stopPullDownRefresh();
					}
				})
				
				
			},
			
			isPlaying(e){
				var _this = this;
				var trailerId = "";
				// debugger;
				if(e){
					trailerId = e.currentTarget.dataset.playintindex;
					//id值是绑定的item.id
					_this.videoContext = uni.createVideoContext(trailerId);
				}
				var hotTrailer = _this.hotTrailer;
				for(var i = 0;i<hotTrailer.length;i++){
					var tempId = hotTrailer[i].id;
					if(tempId!=trailerId){
						uni.createVideoContext(tempId).pause();
					}
				}
				
				
			},
			
			
			//实现点赞效果
			praiseMe(e){
				// #ifndef APP-PLUS || MP-WEIXIN
				var gIndex = e.currentTarget.dataset.gindex;
				console.log(gIndex);
				
				this.animation.translateY(-60).opacity(1).step({ 
					duration: 1000 ,
				});
				//导出动画数据到view组件,实现组件的动画效果
				//无数据渲染的时候
				 this.animationData = this.animation.export();
				
				//有数据渲染的时候
				// this.animationData = this.animation;
				// this.animationDataArr[gIndex] = this.animationData.export();
				
				//还原点赞效果
				setTimeout(function() {
					this.animation.translateY(0).opacity(0).step({
						duration:0 ,
					});
					 this.animationData = this.animation.export();
					//this.animationDataArr[gIndex] = this.animationData.export();
				}.bind(this), 500);
				// #endif
			}
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
