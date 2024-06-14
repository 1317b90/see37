<script setup lang="ts">
import { onMounted, ref, reactive, onBeforeMount } from "vue";
import * as echarts from "echarts";

const xData = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
// 在地面积
const yData1 = [4.94, 6.99, 14.77, 26.15, 11.14, 9.11, 9.5, 13.1, 6.9, 6.6, 4.9, 5.57]
// 采收面积
const yData2 = [16.06, 29.23, 52.18, 45.23, 21.88, 24.55, 25.2, 22.7, 16.1, 12.13, 12.5, 12.06]
// 产量
const yData3 = [6959.4, 10005.9, 18473, 33861, 16628.4, 13529, 14163, 19676, 10266, 10568, 9729, 11022.9]

let chartsRef = ref()
let option = {
  axisLabel: {
    color: "#7EB7FD",
    fontWeight: "500",
  },
  tooltip: {
    trigger: "axis",
    backgroundColor: "rgba(0,0,0,.6)",
    borderColor: "rgba(147, 235, 248, .8)",
    textStyle: {
      color: "#FFF",
    },
    formatter: function (params: any) {
      // 添加单位
      var result = params[0].name + "<br>";
      params.forEach(function (item: any) {
        if (item.value) {
          if (item.seriesName == "产量") {
            result += item.marker + " " + item.seriesName + " : " + item.value + "吨</br>";
          } else {
            result += item.marker + " " + item.seriesName + " : " + item.value + "万亩</br>";
          }
        } else {
          result += item.marker + " " + item.seriesName + " :  - </br>";
        }
      });
      return result;
    },
  },
  legend: {
    data: ["在地面积", "采收面积", "产量"],
    textStyle: {
      color: "#fff",
    },
    top: "20",
  },

  xAxis: {
    data: xData,
    axisTick: {
      show: false,
    },
  },
  yAxis: [
    {
      splitLine: { show: false },
    },
    {
      splitLine: { show: false },
    },
  ],
  series: [
    {
      name: "采收面积",
      type: "bar",
      barWidth: 18,
      itemStyle: {
        borderRadius: 5,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "#956FD4" },
          { offset: 1, color: "#3EACE5" },
        ]),
      },
      data: yData1,
    },
    {
      name: "在地面积",
      type: "bar",
      barGap: "-100%",
      barWidth: 18,
      itemStyle: {
        borderRadius: 5,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "#667eea" },
          // { offset: 0.2, color: "rgba(156,107,211,0.5)" },
          { offset: 1, color: "#764ba2" },
        ]),
      },
      z: -12,
      data: yData2,
    },
    {
      name: "产量",
      type: "line",
      smooth: true,
      showAllSymbol: true,
      symbol: "emptyCircle",
      symbolSize: 8,
      yAxisIndex: 1,
      itemStyle: {
        color: "#58AFFC",
      },
      data: yData3,
    },
  ],

};
// 获取平台数据
onMounted(() => {

  let Echarts = echarts.init(chartsRef.value);
  //设置配置项
  Echarts.setOption(option);

});


</script>

<template>
  <div id="chartsDiv" ref="chartsRef"></div>
</template>

<style scoped>
#chartsDiv {
  height: 90%;
  width: 95%;
}
</style>
