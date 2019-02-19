<template>
  <div class="container">
    <!-- 天气 -->
    <div class="model-box weather-box">
      <weather size="sm" theme="dark"/>
      <div class="line"></div>
    </div>
    <div class="model-box">
      <calendar
        calendar-style="calendar"
        :days-color="dayStyle"
        weeks-type="cn"
        id="bar"
        binddayClick="dayClick"
        lunar="true"
        header-style="header"
        board-style="board"
      />
    </div>
    <div class="model-box card">
      <!-- 日程 -->
      <!-- <div class="news">无日程 <van-button round  size="mini">新建<van-icon name="plus" /></van-button></div> -->
      <!-- <div class="news">无日程 <van-button round  size="mini">新建<van-icon name="plus" /></van-button></div> -->
      <div class="task-box">
        <span class="title-sm">
          <van-icon name="like" color="#64cfbd"/>任务一
        </span>
        <van-icon name="delete" class="delete"/>
        <p class="task">四渡赤水ewewe德尔无翁多翁大所多水电费水电费是的是的的是的丰富的大是大非范德萨</p>
      </div>
      <div class="task-box">
        <span class="title-sm">
          <van-icon name="like" color="#64cfbd"/>任务二
        </span>
        <van-icon name="delete" class="delete"/>
        <p class="task">四渡赤水ewewe德尔无翁多翁大所多水电费水电费是的是的的是的丰富的大是大非范德萨</p>
      </div>
      <div class="task-box">
        <span class="title-sm">
          <van-icon name="like" color="#64cfbd"/>任务三
        </span>
        <van-icon name="delete" class="delete"/>
        <p class="task">四渡赤水ewewe德尔无翁多翁大所多水电费水电费是的是的的是的丰富的大是大非范德萨</p>
      </div>
      <div class="btn-box center">
        <van-button  plain round size="small" type="primary">新建任务
          <van-icon name="plus"/>
        </van-button>
      </div>
    </div>
  </div>
</template>

<script>
import "@/style/index.css";
let plugin = requirePlugin("calendar");
export default {
  data() {
    return {
      imageURL: "./../../../static/tabs/time.PNG",
      dayStyle: [
        {
          month: "current",
          day: new Date().getDate(),
          color: "white",
          background: "#00D8A0"
        },
        {
          month: "current",
          day: new Date().getDate(),
          color: "white",
          background: "#00D8A0"
        }
      ]
    };
  },
  methods: {
    //给点击的日期设置一个背景颜色
    dayClick(event) {
      console.log(event);
      // let clickDay = event;
      // let changeDay = `dayStyle[1].day`;
      // let changeBg = `dayStyle[1].background`;
      // (changeDay = clickDay), (changeBg = "#84e7d0");
    }
  }
};
</script>