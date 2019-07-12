<template>
	<view class="page">
		<!--视频播放-->
		<view class="player">
			<video 
				src="https://vfx.mtime.cn/Video/2019/07/10/mp4/190710093032891410_480.mp4"
				class="movie"
				controls
			></video>
		</view>
		<!--视频播放结束-->
		<!--影片基本信息-->
		<view class="movie-info">
			<image src="../../static/hot/8.jpg" class="cover" mode=""></image>
			<view class="movie-desc">
				<view class="movie-title">被偷走的那五年</view>
				<view class="basic-info">2018 / 中国 / 青春 / 青春物语</view>
				<view class="basic-info">原名:那五年的时光</view>
				<view class="basic-info">影片时长:120分钟</view>
				<view class="basic-info">上映时间:2018-12-9(中国首映)</view>
				<view class="score-block">
					<view class="big-score">
						<view class="score-words">综合评分:</view>
						<view class="movie-score">9.1</view>
					</view>
					<view class="score-stars">
						<block v-if="searchList.score >=0">
							<score-star innerScore="6" showNum="0"></score-star>
						</block>
						
						<!--点赞数-->
						<view class="prise-counts">
							8907 人点赞
						</view>
					</view>
				</view>
			</view>
		</view>
		<!--影片基本信息end-->
		
		<view class="line-wapper">
			<view class="line"></view>
		</view>
		
		
		<!--剧情介绍-->
		<view class="plots-block">
			<view class="plots-title">剧情介绍</view>
			<view class="plots-desc">
				一个即将被用于拯救人类的新型机器人7723（韩莹棣 配音），因缘际会遇上了热爱足球的调皮少女苏小麦（郑海音 配音）。而看似顽劣的小麦生长在一个不算完整的家庭里，父亲为追梦离家，使得小麦的成长也受到了影响，性格冷漠孤僻。7723的出现也使得这对欢喜冤家逐渐在相爱相杀中成为了一对挚友。然而好景不长，心怀毁灭人类之梦的庞老板（冯远征 配音）追踪到了7723的下落，然而那些印刻着小麦名字的温柔颜色和绚烂时光早已在他的生命里留下了不可磨灭的痕迹…… 
			</view>
		</view>
		
		<!--剧照-->
		<view class="scroll-block">
			<view class="plots-title">剧照</view>
		</view>
		<scroll-view scroll-x class="scroll-list">
			<!--数据渲染-->
			<!-- <image 
				v-for="(dirItem,index) in directorArray"
				:key="index"
				class="plot-image"
				mode="aspectFill"
				@click="lookMe"
				:data-index="index"
			   src="dirItem.image"></image> -->
			   
			<image 
				src="../../static/hot/3.jpg" 
				class="plot-image" 
				mode="aspectFill"
				@click="lookMe"
				></image>
			<image src="../../static/hot/2.jpg" class="plot-image" mode="aspectFill"></image>
			<image src="../../static/hot/4.jpg" class="plot-image" mode="aspectFill"></image>
			<image src="../../static/hot/3.jpg" class="plot-image" mode="aspectFill"></image>
			<image src="../../static/hot/2.jpg" class="plot-image" mode="aspectFill"></image>
			<image src="../../static/hot/4.jpg" class="plot-image" mode="aspectFill"></image>
		</scroll-view>
		
		<!--演员-->
		<view class="scroll-block">
			<view class="plots-title">演员表</view>
		</view>
		<scroll-view scroll-x class="scroll-list">
			<!--数据渲染-->
			<!-- <image 
				v-for="(actorItem,index) in actorArray"
				:key="index"
				class="plot-image"
				mode="aspectFill"
			   src="actorItem.image"></image> -->
			<view class="actor-wapper">
				<image src="../../static/actor/1.webp" class="single-actor" mode="aspectFill"></image>
				<view class="actor-name">乔恩·费儒</view>
				<view class="actor-role">导演</view>
			</view>
			<view class="actor-wapper">
				<image src="../../static/actor/2.webp" class="single-actor" mode="aspectFill"></image>
				<view class="actor-name">唐纳德·格洛弗</view>
				<view class="actor-role">配 辛巴 Simba</view>
			</view>
			<view class="actor-wapper">
				<image src="../../static/actor/3.webp" class="single-actor" mode="aspectFill"></image>
				<view class="actor-name">阿尔法·伍达</view>
				<view class="actor-role">配 辛巴母亲</view>
			</view>
			<view class="actor-wapper">
				<image src="../../static/actor/4.webp" class="single-actor" mode="aspectFill"></image>
				<view class="actor-name">詹姆斯·厄尔</view>
				<view class="actor-role">配 老狮王木</view>
			</view>
			<view class="actor-wapper">
				<image src="../../static/actor/5.webp" class="single-actor" mode="aspectFill"></image>
				<view class="actor-name">詹姆斯·厄尔</view>
				<view class="actor-role">配 老狮王木</view>
			</view>
			<view class="actor-wapper">
				<image src="../../static/actor/6.webp" class="single-actor" mode="aspectFill"></image>
				<view class="actor-name">詹姆斯·厄尔</view>
				<view class="actor-role">配 老狮王木</view>
			</view>
			
		</scroll-view>
		
	</view>
</template>

<script>
	import scoreStar from "../../components/scoreStar/scoreStar.vue"
	export default {
		data() {
			return {
				searchList:{
					score:2
				},
				searchInfo:{},
				plotPicsArray:[],//剧照
				directorArray:[],//导演列表
				actorArray:[],//演员
				newStaffArray:[]
				
			}
		},
		
		onLoad(params) {
			var _this = this;
			//获取上个页面传入的参数
			var detailId = params.detailId;
			
			//根据api改变导航栏颜色
			uni.setNavigationBarColor({
				frontColor:"#FFFFFF",
				backgroundColor:"#000000"
			})
			
			//获取预告片的详情
			var serverUrl = _this.serverUrl;
			uni.request({
				url:serverUrl+'/search/trailer/'+detailId,
				method:'POST',
				success: (res) => {
					console.log(res);
					if(res.data.status == 200){
						_this.searchInfo = res.data.data;
						//把剧照的字符串转换为json  array
						_this.plotPicsArray = JSON.parse(_this.searchInfo.plotPics);
					}
				}
			});
			
			//获取导演列表
			uni.request({
				url:serverUrl+'/search/staff/'+detailId+'/1',
				method:'POST',
				success: (res) => {
					console.log(res);
					if(res.data.status == 200){
						
						_this.directorArray = res.data.data;
						
					}
				}
			});
			
			//获取演员列表
			uni.request({
				url:serverUrl+'/search/staff/'+detailId+'/2',
				method:'POST',
				success: (res) => {
					console.log(res);
					if(res.data.status == 200){
						_this.actorArray = res.data.data;
						
					}
				}
			})
		},
		methods: {
			
			//点击预览剧照
			lookMe(e){
				var _this = this;
				var index = e.currentTarget.dataset.index;
				console.log(index);
				uni.previewImage({
					current:_this.plotPicsArray[index],
					urls:_this.plotPicsArray
				})
			},
			
			//演职人员,实现数组拼接
			lookStaffs(e){
				var _this = this;
				var staffIndex = e.currentTarget.dataset.staffindex;
				//拼接导演和演员的数组,成为一个新的数组
				var directorArray = _this.directorArray;
				var actorArray = _this.actorArray;
				var newStaffArray = [];
				newStaffArray = newStaffArray.concat(directorArray).concat(actorArray);
			
				var urls = [];
				for(var i=0;i<newStaffArray.length;i++){
					var tempPhoto = newStaffArray[i].photo;
					urls.push(tempPhoto);
					console.log(urls);
				}
				
				uni.previewImage({
					current:urls[staffIndex],
					urls:urls
				})
			}
			
		},
		components:{
			scoreStar
		}
	}
</script>

<style>
@import url("movie.css");
</style>
