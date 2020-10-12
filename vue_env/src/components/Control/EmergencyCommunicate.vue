<template>
  <div class="emergencyCommunicateControl">
    <div class="head">
      应急小组沟通
      <p class="el-icon-close"></p>
    </div>
    <div class="body">
      <el-dropdown>
        <span class="el-dropdown-link">
          灭火行动组<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="handleItem">黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div><input placeholder="请输入搜索内容" /></div>
      <div><button>搜索</button></div>
      <!-- <div class="input">
        <input
          type="text"
          placeholder="输入内容"
          v-model="sendMessage"
        /><button @click="handleSubmit">发送</button>
      </div> -->
      <div class="time">{{ nowTime }}</div>
      <div class="message">
        <sound :from="'http://192.168.1.187:8888/api/v1/image/456f840c37f9bfe88830764ed4463139.amr'" ></sound>
        <!-- <p v-for="(item,index) in message" :key="index" >{{item.content}}</p> -->
        <!-- <template v-for="(item, index) in message">
          <template v-if="item.type == '0'">
            <sound
              v-if="item && item.id"
              :key="index"
              :from="'http://192.168.1.187:8888/api/v1/image/' + item.content"
            ></sound>
            
          </template>
          <template v-if="item.type == '3'">
            <div class="text" v-if="item && item.id" :key="index">
              <span>用户名</span>
              <p>{{ item.content }}</p>
            </div>
          </template>
        </template> -->
        
      </div>
    </div>
  </div>
</template>

<script>
import Sound from "../Sound";

export default {
  data() {
    return {
      nowTime: "",
      message: [],
    };
  },
  components: {
    Sound,
  },
  created() {
    this.nowTimes();
    this.polling();
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
    handleItem() {
      console.log("点击了");
    },
    polling() {
      let timer;
      const _this = this;
      const axios = require("axios").default;
      var data = {
        groupId: "d826663d2f6a4be1831acd6cadeb38cd",
        userId: "1314818838246883330",
      };
      axios
        .post(
          "http://192.168.1.187:8888/api/v1/es_chat_record/public/getChatAll",
          data
        )
        .then(function (response) {
          if (response) {
            data.readed = 0;
            _this.message = [];
            response.data.data.map((el, index) => {
              _this.$set(_this.message, index, el);
            });
            console.log(_this.message)
            // timer = setTimeout(() => {
            //   _this.polling();
            // }, 5000);
          } else {
            clearTimeout(timer); //清理定时任务
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
.emergencyCommunicateControl {
  width: 474px;
  height: 520px;
  background-color: #1b3c44;
  font-family: Microsoft YaHei;
  .head {
    width: 100%;
    height: 42px;
    border-bottom: 1px solid #1b3c44;
    color: #ffffff;
    font-size: 18px;
    text-align: center;
    line-height: 42px;
    p {
      font-size: 16px;
      float: right;
      margin: 0px;
      line-height: 42px;
    }
  }
  .body {
    border-top: 1px solid #9ba8ae;
    width: 100%;
    height: calc(100% - 21px);

    .time {
      width: 100%;
      text-align: center;
      color: #ffffff;
      font-size: 14px;
      border-top: 1px solid #0e1f23;
    }
    .input {
      display: flex;
      width: 100%;
    }
    .input input {
      flex: 2;
    }
    .message {
      width: 100%;
      height: 77%;
      overflow: auto;
      padding-left: 20px;
      span{
        color: #00FFFF;
      }
      p {
        color: #ffffff;
        margin: 0px;
      }
    }
  }
  .message > div {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .body > div:nth-child(1) {
    font-size: 14px;
    color: #00ffff;
    width: 35%;
    padding-left: 14px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    float: left;
    height: 54px;
    i {
      color: #ffffff;
      line-height: 54px;
      margin: 0px;
    }
  }
  .body > div:nth-child(2) {
    width: 45%;
    display: flex;

    align-items: center;
    float: left;
    height: 54px;
    input {
      width: 100%;
      height: 70%;
    }
  }
  .body > div:nth-child(3) {
    width: 20%;
    text-align: center;
    padding: 6px;
    display: flex;
    align-items: center;
    float: left;
    height: 54px;
    button {
      border-radius: 3px;
      width: 100%;
      height: 90%;
      align-items: center;
      border: 0px;
      font-size: 12px;
      background-color: #33c14b;
      color: #ffffff;
    }
  }
}
</style>