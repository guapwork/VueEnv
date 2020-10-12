<template>
  <div class="x-audio-wrap" @click="play">
    <div class="x-sector" :class="{ play: animate }">
      <div class="x-dot"></div>
    </div>
    <div class="x-time">{{ duration }}</div>
  </div>
</template>
<script>
import BenzAMRRecorder from "benz-amr-recorder";
export default {
  name: "m-audio",
  props: ["from"],
  data() {
    return {
      amr: null,
      animate: false,
      timer: null,
      duration: null,
      src:this.from
    };
  },
  mounted() {
    // const _this = this;
    // _this.amr = new BenzAMRRecorder();
    // _this.amr.initWithUrl(
    //   "http://192.168.1.187:8888/api/v1/image/456f840c37f9bfe88830764ed4463139.amr"
    // );
    // // _this.amr.addEventListener("canplaythrough", () => {
    // //   this.duration = this.format(this.audio.duration);
    // // });
    // _this.amr.onPlay = () => {
    //   this.animate = true;
    //   this.timer = setInterval(() => {
    //     this.animate = false;
    //     setTimeout(() => {
    //       this.animate = true;
    //     }, 50);
    //   }, 1250);
    // };
    // _this.amr.onStop = () => {
    //   this.animate = false;
    //   this.timer && clearInterval(this.timer);
    // };
    // _this.amr.onEnded = () => {
    //   this.animate = false;
    //   this.timer && clearInterval(this.timer);
    // };

    // // this.duration=this.format(this.amr.duration)
    // window.audioList = [];
    // window.audioList.push(_this.amr); //所有实例加入全局变量
    this.amr =  new BenzAMRRecorder();
  },
  methods: {
    // play() {
    //   window.audioList.forEach((audio) => {
    //     //开始前先关闭所有可能正在运行的实例
    //     audio.stop();
    //   });
    //   if (this.amr.stop) {
    //     this.amr.play();
    //     console.log(this.amr);
    //     console.log("play")
    //   } else {
    //     this.amr.stop();
    //   }
    // },
    play() {
      const _this = this;
      _this.amr.initWithUrl(_this.src).then(function () {
        // amr.isPlaying() 返回音频的播放状态 是否正在播放 返回boolean类型
        console.log(_this.amr.isPlaying());
        if (_this.amr.isPlaying()) {
          _this.amr.stop();
          console.log("onStop")
        } else {
          _this.amr.play();
          console.log("onPlaying")
        }
      });
    },

    format(s) {
      var t = "";
      if (s > -1) {
        var min = Math.floor(s / 60) % 60;
        var sec = s % 60;

        if (min < 10) {
          t += "0";
        }
        t += min + "'";
        if (sec < 10) {
          t += "0";
        }
        t += sec.toFixed(2);
      }
      t = t.replace(".", '"');
      return t;
    },
  },
};
</script>
<style lang="scss" scoped>
.x-audio-wrap {
  background-color: #ffffff;
  height: 30px;
  width: 110px;
  border-radius: 30px;
  // border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
  .x-sector {
    height: 7px;
    width: 7px;
    border-radius: 4px 10px;
    border-right: 2px solid #ddd;
    border-top: 2px solid #ddd;
    transform: rotate(45deg);
    position: relative;
    margin-left: 10px;
    .x-dot {
      height: 4px;
      width: 4px;
      border-radius: 4px;
      background: #ddd;
      position: absolute;
      top: 4px;
    }
  }
  .x-sector::before {
    content: "";
    height: 9px;
    width: 9px;
    border-radius: 4px 12px;
    border-right: 2px solid #ddd;
    border-top: 2px solid #ddd;
    transform: rotate(0deg);
    position: absolute;
    right: -7px;
    top: -7px;
  }
  .x-sector::after {
    content: "";
    height: 12px;
    width: 12px;
    border-radius: 4px 14px;
    border-right: 2px solid #ddd;
    border-top: 2px solid #ddd;
    transform: rotate(0deg);
    position: absolute;
    right: -13px;
    top: -13px;
  }

  .x-time {
    color: #999;
    font-size: 12px;
    margin-right: 10px;
  }
  &.inline {
    display: inline-flex;
  }
}

@keyframes play-dot {
  from {
    background: #ddd;
  }
  to {
    background: #5cadff;
  }
}
@keyframes play-sector {
  from {
    border-color: #ddd;
  }
  to {
    border-color: #5cadff;
  }
}
.x-sector.play {
  animation: play-sector 0.3s 0.1s ease-in-out;
}
.x-sector.play::before {
  animation: play-sector 0.3s 0.2s ease-in-out;
}
.x-sector.play::after {
  animation: play-sector 0.3s 0.3s ease-in-out;
}
.x-sector.play .x-dot {
  animation: play-dot 0.3s ease-in-out;
}
</style>
