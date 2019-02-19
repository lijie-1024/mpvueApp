<template>
  <div class="container">
    <!-- 秒表 -->
    <div class="model-box">
      <span class="title">秒表</span>
      <div class="line"></div>
      
    </div>
    <!-- 时间间隔 -->
    <div class="model-box">
      <span class="title">日期计数器</span>
      <div class="line"></div>
      <div>
        <van-field
          placeholder="请选择时间"
          @click="showDate = true"
          v-model="startDate"
          clearable
          readonly
          label="起始时间"
        />
        <van-field
          placeholder="请选择时间"
          @click="showEndDate = true"
          v-model="endDate"
          clearable
          readonly
          label="结束时间"
        />
        <van-popup :show="showDate" position="bottom" :overlay="false">
          <van-datetime-picker
            type="date"
            v-model="currentDate"
            :min-date="minDate"
            @confirm="onStartconfirm"
            @cancel="showDate = false"
          />
        </van-popup>
        <van-popup :show="showEndDate" position="bottom" :overlay="false">
          <van-datetime-picker
            type="date"
            v-model="currentDate"
            :min-date="minDate"
            @confirm="onendconfirm"
            @cancel="showEndDate = false"
          />
        </van-popup>
      </div>
      <van-button class="btnAll" type="primary" size="large" @click="searchInterval">查询间隔时间</van-button>
      <div class="intervaltime">日期间隔：{{resultDay}}</div>
    </div>
    
    <!-- 提示节点 -->
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import "@/style/time.css";
import utils from "@/utils/index.js";
import Toast from "@/static/vant-weapp/toast/toast";
export default {
  data() {
    return {
      startDate: "",
      endDate: "",
      minDate: new Date(),
      currentDate: new Date().getTime(),
      showDate: false,
      showEndDate: false,
      resultDay: 0
    };
  },
  methods: {
    onStartconfirm(event) {
      this.currentDate = event.mp.detail;
      this.startDate = utils.formatDate(this.currentDate);
      this.showDate = false;
    },
    onendconfirm(event) {
      this.currentDate = event.mp.detail;
      this.endDate = utils.formatDate(this.currentDate);
      this.showEndDate = false;
    },
    searchInterval() {
      if (!this.startDate || !this.endDate) return Toast("请填写时间哦~");
      let start = new Date(this.startDate).getTime(this.startDate);
      let end = new Date(this.endDate).getTime(this.endDate);
      let usedTime = end - start; //两个时间戳相差的毫秒数
      let days = Math.floor(usedTime / (24 * 3600 * 1000));
      let time = days + "天";
      this.resultDay = time;
    },
    clearTime(){
      this.startDate = '';
      this.endDate = '';
    }
  }
};
</script>

<style scoped>
</style>