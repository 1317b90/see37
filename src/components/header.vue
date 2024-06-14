<script setup lang="ts">
import { ref } from "vue"
import {
  onBeforeUnmount,
} from 'vue'

let time = ref()
function getTime() {
  const now = new Date();
  const weekdays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  const dayOfWeek = weekdays[now.getDay()];
  time.value = dayOfWeek + " " + now.toLocaleString()
}

let timeInter = setInterval(getTime, 1000)

// 卸载前先把消耗性能的定时器干掉
onBeforeUnmount(() => {
  clearInterval(timeInter)
})

</script>

<template>
  <div id="headerDiv">
    <div id="leftLine"></div>
    <div id="rightLine"></div>
    <div id="light"></div>
    <span id="headerTitle">文山三七国际交易中心数据可视化</span>
    <div id="headerTime">
      {{ time }}
    </div>
  </div>
</template>

<style scoped>
#headerDiv {
  height: 60px;
  background-image: url("../assets/img/top.png");
  background-size: cover;
  background-position: center center;
  position: relative;
  text-align: center;
}

#light {
  position: absolute;
  bottom: -26px;
  background-image: url("../assets/img/guang.png");
  background-position: 80px center;
  width: 100%;
  height: 56px;
}

#leftLine,
#rightLine {
  position: absolute;
  width: 140px;
  height: 6px;
  background-image: url("../assets/img/juxing1.png");
}

#leftLine {
  left: 11%;
}

#rightLine {
  right: 11%;
  transform: rotate(180deg);
}


#headerTime {
  position: absolute;
  right: 30px;
  top: 32px;
  font-size: 20px;
  color: whitesmoke;
  letter-spacing: 2px;
}

#headerTitle {
  font-size: 38px;
  font-weight: 900;
  letter-spacing: 6px;
  width: 100%;
  background: linear-gradient(92deg,
      #0072ff 0%,
      #00eaff 48.8525390625%,
      #01aaff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
