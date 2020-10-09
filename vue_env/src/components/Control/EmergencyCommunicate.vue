<template>
  <div class="emergencyCommunicate">
    <div class="head">
      应急小组沟通
      <p class="el-icon-close"></p>
    </div>
    <el-row>
      <el-col :span="8"> 灭火行动组</el-col>
      <el-col :span="8"><input placeholder="请输入搜索内容" /></el-col>
      <el-col :span="8"> <el-button size="mini" type="success">搜索</el-button></el-col>
    </el-row>
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
  width: 237px;
  height: 260px;
  background-color: #1b3c44;
  font-family: Microsoft YaHei;
  .head {
    width: 100%;
    height: 21px;
    border-bottom: 1px solid #ffffff;
    color: #ffffff;
    font-size: 9px;
    text-align: center;
    p {
      font-size: 8px;
      float: right;
      margin: 0px;
    }
  }
  .body {
    border-top: 1px solid #9ba8ae;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      float: left;
      widows: 100%;
    }
    div:nth-child(1) {
      color: #00ffff;
      font-size: 6.83px;
    }
    div:nth-child(2) {
      font-size: 6.83px;
    }
  }
}
</style>