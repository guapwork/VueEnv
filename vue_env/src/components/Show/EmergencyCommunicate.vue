<template>
  <div class="emergencyCommunicate">
    <div class="head">应急小组沟通</div>

    <div class="body">
      <div class="title">灭火行动组</div>
      <div class="time">{{ nowTime }}</div>
      <div class="message"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nowTime: "",
    };
  },
  created() {
    this.nowTimes();
  },
  methods: {
    timeFormate(timeStamp) {
      let hh =
        new Date(timeStamp).getHours() < 10
          ? "0" + new Date(timeStamp).getHours()
          : new Date(timeStamp).getHours();
      let mm =
        new Date(timeStamp).getMinutes() < 10
          ? "0" + new Date(timeStamp).getMinutes()
          : new Date(timeStamp).getMinutes();
      let ss =
        new Date(timeStamp).getSeconds() < 10
          ? "0" + new Date(timeStamp).getSeconds()
          : new Date(timeStamp).getSeconds();
      this.nowTime = hh + ":" + mm + ":" + ss;
    },
    nowTimes() {
      this.timeFormate(new Date());
      setInterval(this.nowTimes, 1000);
      this.clear();
    },
    clear() {
      clearInterval(this.nowTimes);
      this.nowTimes = null;
    },
  },
};
</script>

<style lang="scss">
.emergencyCommunicate {
  width: 2516px;
  height: 2795px;
  background-color: #1b3c44;
  font-family: Microsoft YaHei;
  .head {
    width: 100%;
    height: 200px;
    border-bottom: 5px solid #9ba8ae;
    color: #ffffff;
    font-size: 120px;
    text-align: center;
    p {
      float: right;
      margin: 0px;
      margin-top: 40px;
    }
  }
  .body {
    div {
      text-align: center;
      widows: 100%;
      padding: 20px;
      color: #00ffff;
      font-size: 90px;
    }
    .title {
      border-top: 5px solid #0e1f23;
      border-bottom: 5px solid #9ba8ae;
    }
    .time {
      color: #ffffff;
      font-size: 72px;
      border-top: 5px solid #0e1f23;
    }
  }
}
</style>