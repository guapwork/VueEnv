<template>
  <div class="emergencyConrolLog">
    <div class="head">
      应急操作记录
      <p class="el-icon-close"></p>
    </div>
    <div class="body">
      <!-- 日志记录 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: [],
    };
  },
  created() {
    this.polling();
  },
  methods: {
    polling() {
      let timer;
      const axios = require("axios").default;
      // axios
      //   .get("/user?ID=12345")
      //   .then(function (response) {
      //     if (response) {
      //       console.log(response);
      //       timer = setTimeout(() => {
      //         this.polling();
      //       }, 5000);
      //     } else {
      //       clearTimeout(timer); //清理定时任务
      //     }
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    },
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
.emergencyConrolLog {
  width: 474px;
  height: 520px;
  background-color: #1b3c44;
  font-family: Microsoft YaHei;
  .head {
    width: 100%;
    height: 42px;
    border-bottom: 5px solid #0e1f23;
    color: #ffffff;
    font-size: 18px;
    text-align: center;
    line-height: 42px;
    padding-right: 20px;
    p {
      float: right;
      margin: 0px;
      line-height: 42px;
    }
  }
  .body {
    width: 100%;
    height: calc(100% - 42px);
    overflow: auto;
  }
}
</style>