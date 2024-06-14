<template>
  <dv-full-screen-container>
    <div id="header">
      <Header />
    </div>
    <div id="content">
      <!-- 左边 -->
      <div id="leftDiv">
        <dv-border-box13 ref="borderRef" id="left1" class="leftClass">
          <Subtitle title="平台用户数据" />
          <Left1 />
        </dv-border-box13>

        <dv-border-box13 ref="borderRef" id="left2" class="leftClass">
          <Subtitle title="平台三七求购总览" />
          <Left2 />
        </dv-border-box13>

        <dv-border-box13 ref="borderRef" id="left3" class="leftClass">
          <Subtitle title="平台三七供应总览" />
          <Left3 />
        </dv-border-box13>
      </div>

      <!-- 中间 -->
      <div id="centerDiv">
        <dv-border-box13 ref="borderRef" id="center1" class="centerClass">
          <Subtitle title="文山各地区三七年产量分布地图" />
          <Map />
        </dv-border-box13>
        <dv-border-box13 ref="borderRef" id="center2" class="centerClass">
          <Subtitle title="文山历年三七产量数据" />
          <Center2 />
        </dv-border-box13>
      </div>

      <!-- 右边 -->
      <div id="rightDiv">
        <dv-border-box13 ref="borderRef" id="right1" class="rightClass">
          <Subtitle title="今日三七市场价格" />
          <Right1 />
        </dv-border-box13>
        <dv-border-box13 ref="borderRef" id="right2" class="rightClass">
          <Subtitle title="文山三七市场价格波动" />
          <Right2 />
        </dv-border-box13>

      </div>

    </div>

  </dv-full-screen-container>
</template>

<script setup lang="ts">
import Header from "./components/header.vue";
import Subtitle from "./components/subtitle.vue";
import Left1 from "./components/left1.vue";
import Left2 from "./components/left2.vue";
import Left3 from "./components/left3.vue";
import Map from "./components/map.vue";
import Center2 from "./components/center2.vue";

import Right1 from "./components/right1.vue";
import Right2 from "./components/right2.vue";


</script>


<style scoped>
/* 顶部标题 */
#header {
  width: 100%;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 30px;
}

/* 可视化区域 */
#content {
  display: flex;
  padding: 20px 20px 50px 20px;
  height: 100%;
  width: 100%;
}

.leftClass {
  width: 100%;
}

.rightClass {
  width: 100%;
}

.centerClass {
  width: 100%;
}

/* 左边区域 */
#leftDiv {
  height: 100%;
  width: 100%;
  flex: 1;
}

/* 中间区域 */
#centerDiv {
  height: 100%;
  width: 100%;
  flex: 1;
  margin-left: 30px;
  margin-right: 30px;
}

/* 右边区域 */
#rightDiv {
  height: 100%;
  width: 100%;
  flex: 1;
}



#left1 {
  height: 26%;
}

#left2 {
  height: 33%;
}

#left3 {
  height: 33%;
}

#center1 {
  height: 59%;
}

#center2 {
  height: 33%;
}

#right1 {
  height: 42%;
}

#right2 {
  height: 50%;
}

</style>
