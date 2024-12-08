<template>
 
    <!-- 轮播图 -->
	 <view class="container">
	    <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
	      <swiper-item v-for="(item, index) in swiperList" :key="index">
	        <image :src="item.imageUrl" mode="aspectFill"></image>
	      </swiper-item>
	    </swiper>
	  </view>

  <!-- 分页面 -->
  <view class="nav">
     <view class="nav_item" v-for="(item, index) in navList" :key="index" @click="navList.length > 0? navClick(item.path) : () => {}">
            <image :src="item.img"></image>
            <text>{{item.title}}</text>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const swiperList = ref([
  { imageUrl: '../../static/images/fj_05.jpg' },
  { imageUrl: '../../static/images/fj_03.jpg' },
  {imageUrl: '../../static/images/fj_04.jpg' }
]);


const navList = ref([
  {
     img: "../../static/iron/jlpt.png", // 这里应该填入正确的图片路径，比如'../../static/images/交流平台图标.jpg'
    title: "交流平台",
    path: "/pages/",
  },
  {
    img: "../../static/iron/rgzx.png", // 填入对应的图片路径
    title: "人工咨询",
    path: "/pages/" // 补充正确的页面路径
  },
  
  {
    img: "../../static/iron/zyhdzx.png", // 这里应该填入正确的图片路径，比如'../../static/images/交流平台图标.jpg'
    title: "中医活动中心",
    path: "/pages/activityCenter/activityCenter"
  },
  {
    img: "../../static/iron/xy.png", // 这里应该填入正确的图片路径，比如'../../static/images/交流平台图标.jpg'
    title: "寻医",
    path: "pages/"
  }
]);


	
// 导航点击的跳转处理函数，修正参数使用以及函数调用语法
const navClick = (path) => {
  uni.navigateTo({
    url: path // 使用传入的正确路径进行跳转
  });
};
</script>

<style scoped>
/* 整体页面布局，添加一些外边距和内边距让内容看起来更协调 */
page {
  padding: 10px;
  margin: 0;
}


/* 轮播图样式，设置宽度、高度以及显示效果等 */
image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
}

/* 导航栏整体样式 */
.nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

/* 单个导航项样式 */
.nav_item {
  width: calc(50% - 10px); /* 让每个导航项占一半宽度，减去间距 */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
}

/* 导航项里图片的样式，设置大小等 */
.nav_item image {
  width: 50px;
  height: 50px;
  margin-bottom: 3px;
}

/* 导航项里文字的样式，设置字体、颜色、大小等 */
.nav_item text {
  font-size: 14px;
  color: #333;
}
</style>