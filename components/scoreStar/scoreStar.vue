<template name="scoreStar">
	<!--评分-->
	<view class="movie-score-wapper">
		<!-- <image src="../../static/icon/star.png" class="star-ico"></image>
		<image src="../../static/icon/star.png" class="star-ico"></image>
		<image src="../../static/icon/star.png" class="star-ico"></image>
		<image src="../../static/icon/star.png" class="star-ico"></image>
		<image src="../../static/icon/notstar.png" class="star-ico"></image> -->
		<image 
			v-for="(starItem,index) in star" 
			src="../../static/icon/star.png" 
			class="star-ico"
		>
		</image>
		<image 
			v-for="(notstarItem,index2) in notstar" 
			src="../../static/icon/notstar.png" 
			class="star-ico"></image>
		<view class="movie-score" v-if="showNum == 1">
			{{innerScore}}
		</view>
	</view>
</template>

<script>
	export default {
		name:"scoreStar",
		data() {
			return {
				star:0,
				notstar:5
			}
		},
		props:{
			innerScore:0,
			showNum:0,
		},
		
		//生命周期,组件创建完成后被调用
		created() {
			var tempScore = 6;
			if(this.innerScore != null && this.innerScore != undefined && this.innerScore != ''){
				tempScore = this.innerScore;
			}
			
			var star = parseInt(tempScore/2);
			console.log('1111',star);
			var notstar = 5-star;
			
			this.star = star;
			this.notstar = notstar;
			
		},
		methods: {
			
		}
	}
</script>

<style>
.movie-score-wapper{
	display: flex;
	flex-direction: row;
}
.star-ico{
	width: 30upx;
	height: 30upx;
	margin-top: 6upx;
}
.movie-score{
	font-size: 12upx;
	color: grey;
	margin-left:8upx;
}
</style>
