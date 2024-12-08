<template>  
  <view class="page-container">  
    <scroll-view class="scroll-content" scroll-y="true">  
      <!-- 循环展示活动板块 -->  
      <view  
        v-for="(activity, index) in activityList"  
        :key="index"  
        class="activity-item"  
        @click="showActivityDetail(activity)"  
      >  
        <button class="activity-name">{{ activity.name }}</button>  
      </view>  
    </scroll-view>  
  
    <!-- 弹窗容器 -->  
    <view v-if="showModal" class="modal-container">  
      <view class="modal-content">  
        <view class="modal-header">  
          <text class="modal-title">{{ currentActivity.name }}</text>  
          <button class="close-btn" @click="closeModal">×</button>  
        </view>  
        <view class="modal-body">  
          <view class="modal-item">  
            <text class="modal-label">活动时间:</text>  
            <text class="modal-value">{{ currentActivity.time }}</text>  
          </view>  
          <view class="modal-item">  
            <text class="modal-label">活动地点:</text>  
            <text class="modal-value">{{ currentActivity.location }}</text>  
          </view>  
          <view class="modal-item">  
            <text class="modal-label">活动内容:</text>  
            <text class="modal-value">{{ currentActivity.description }}</text>  
          </view>  
        </view>  
      </view>  
    </view>  
  
    <!-- 遮罩层，用于点击关闭弹窗 -->  
    <view v-if="showModal" class="modal-overlay" @click="closeModal"></view>  
  </view>  
</template>  
  
<script setup>  
import { ref } from 'vue';  
  
// 模拟活动列表数据  
const activityList = ref([  
  {  
    name: '针灸讲座',  
    id: 1,  
    time: '2024-11-10 14:00',  
    location: '广西壮族自治区桂林市雁山镇南宁理工学院317号',  
    description: '针灸知识讲解',  
  },  
  {  
    name: '推拿实践活动',  
    id: 2,  
    time: '2024-11-15 09:30',  
    location: '广西壮族自治区桂林市南溪山公园大厅',  
    description: '推拿实践操作指导',  
  },  
  {
	  name: '探寻本草之源 传承中医中药',
	  id: 3,  
	  time: '2024-11-3 10:30',  
	  location: '湖北省汉川市京山大厅',  
	  description: '辨识中草药是传承名老中医学术经验一部分。本次活动分为上山采药和老中医现场交流，前往京山开展采药识药活动',  
  },
  {
	  name: '冬病夏治',
	  id: 4,  
	  time: '2024-7-18 09:00',  
	  location: '湖北省十堰市吉祥社区新时代文明实践广场',  
	  description: '由当地中医医院20位专家联合牵头活动，为本地居民望闻问切现场疗诊，开具“冬病夏治”健康处方，贴中药敷贴',
  },
  {
	  name: '健康讲座',
	  id: 5,  
	  time: '2024-11-23 9:40',  
	  location: '广西壮族自治区桂林市中隐路崇华中医街',  
	  description: '中医药养生文化为主题的中医特色养生知识讲座',
  },
  {
	  name: '中医药法宣讲活动',
	  id: 6,  
	  time: '2024-7-19 8:00-15:00',  
	  location: '安徽省淮北市两宫广场',  
	  description: '此次活动由省医疗保障联合市中医药医院举办的大型讲座宣传，意在紧贴解决居民生活需求，传播中医药健康知识',
  },
  {
	  name: '中医巡诊',
	  id: 7,  
	  time: '2024-11-5 14:00-18:00',  
	  location: '浙江省杭州市杭州建国南路',  
	  description: '由浙江中医药老字号“三慎泰”举办的保养健康知识经验交流分享会，现场还有多科专家当场会诊',
  },
  {
	  name: '针灸推拿',
	  id: 8,  
	  time: '2024-11-20 10：00-19：00',  
	  location: '浙江省宁波市宁波海曙区',  
	  description: '由宁波海曙区“百年药行”国医堂老字号老中医推广分享针灸推拿经验，现场邀请游客和居民体验针灸推拿和中医敷贴',
  },
  {
	  name: '一轴三心',
	  id: 9,  
	  time: '2024-9-10 8:00-18:00',  
	  location: '四川省成都市成都金牛区',  
	  description: '健康养生，康养文化。由成都中医药大学附属医院的专家和杏林春堂国医馆专家到现场为来客讲解健康养生知识，分享名医经验',
  },
  {
	  name: '医者仁心',
	  id: 10,  
	  time: '2025-1-5 全天',  
	  location: '浙江省温州市温州鹿城区',  
	  description: '由温州市政府牵头，陈无择中医药文化和马大正“马氏中医妇科”以及湖臻“胡氏草药”共同举办的医者仁心问诊经验分享活动中，重点分享中医药用药和辨药经验。',
  },
  {
	  name: '嘉言养生节',
	  id: 11,  
	  time: '2025-3-23',  
	  location: '江西省南昌市南昌青山湖区',  
	  description: '街区将网红打卡等元素通过场景化，让人们嵌入式体验中医义诊，同时当晚将会开设养生夜市，让市民体验中医文化。',
  },
  {
	  name: '',
	  id: 12,  
	  time: '2024-',  
	  location: '',  
	  description: '',
  },
  {
	  name: '侗药苗医',
	  id: 13,  
	  time: '2024-4-25 13:00-18:00',  
	  location: '贵州省凯里民族风情区',  
	  description: '以苗侗新鲜草药为主而非中药饮片的中医中草药集市',
  }
  // 更多活动对象  
]);  
  
const showModal = ref(false);  
const currentActivity = ref({});  
  
const showActivityDetail = (activity) => {  
  showModal.value = true;  
  currentActivity.value = activity;  
};  
  
const closeModal = () => {  
  showModal.value = false;  
};  
</script>  
  
<style>  
.page-container {  
  display: flex;  
  flex-direction: column;  
  height: 100vh;  
  position: relative; /* 确保遮罩层和弹窗能够正确定位 */  
}  
  
.scroll-content {  
  flex: 1;  
  padding: 10px;  
  overflow-y: auto; /* 确保内容可以滚动 */  
}  
  
.activity-item {  
  border: 1px solid #ccc;  
  border-radius: 5px;  
  padding: 15px;  
  margin-bottom: 10px;  
}  
  
.activity-name {  
  font-size: 18px;  
  text-align: left; /* 确保按钮内的文本左对齐 */  
}  
  
/* 弹窗样式 */  
.modal-container {  
  position: fixed;  
  top: 0;  
  left: 0;  
  right: 0;  
  bottom: 0;  
  display: flex;  
  justify-content: center;  
  align-items: center;  
  z-index: 1000; /* 确保弹窗在最上层 */  
}  
  
.modal-content {  
  background-color: #fff;  
  border-radius: 10px;  
  padding: 20px;  
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);  
  width: 90%; /* 弹窗宽度 */  
  max-width: 500px; /* 最大宽度 */  
  text-align: left;  
}  
  
.modal-header {  
  display: flex;  
  justify-content: space-between;  
  align-items: center;  
  margin-bottom: 15px;  
}  
  
.modal-title {  
  font-size: 20px;  
  font-weight: bold;  
}  
  
.close-btn {  
  background: none;  
  border: none;  
  font-size: 24px;  
  cursor: pointer;  
}  
  
.modal-body {  
  margin-bottom: 20px;  
}  
  
.modal-item {  
  margin-bottom: 10px;  
}  
  
.modal-label {  
  font-weight: bold;  
  margin-right: 10px;  
}  
  
.modal-value {  
  /* 可以根据需要添加样式 */  
}  
  
/* 遮罩层样式 */  
.modal-overlay {  
  position: fixed;  
  top: 0;  
  left: 0;  
  right: 0;  
  bottom: 0;  
  background-color: rgba(0, 0, 0, 0.5);  
  z-index: 999; /* 确保遮罩层在弹窗之下 */  
}  
</style>