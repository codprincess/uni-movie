<template name="helloComp">
	<view>
		{{msg}}
		<view>
			<input type="text" :value="myval" class="txt"/>
		</view>
	</view>
</template>

<script>
	export default {
		//自定义组件的名称helloComp
		name:"helloComp",
		
		data() {
			return {
				
					msg:"您好,这是自定义组件"
				
			}
		},
		props:{
			//自定义变量用来接收父组件的数据
			myval:String //定义这个参数的变量类型
		},
		methods: {
			
		}
	}
</script>

<style>
	.txt{
		
	}
</style>
