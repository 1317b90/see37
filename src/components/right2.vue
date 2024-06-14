<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getQuotation } from '@/request/api'
import * as echarts from "echarts";

let data: any = null
let option = {
  grid: {
    left: '60',
    top: "80"

  },
  legend: {
    padding: [30, 40, 0, 40],
    textStyle: {
      color: '#fff',
      fontSize: 14
    },
    selected: {
      '180头': false,

    }
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: "rgba(0,0,0,.6)",
    borderColor: "rgba(147, 235, 248, .8)",
    textStyle: {
      color: "#FFF",
    },
  },
  dataset: {
    source: data
  },
  axisLabel: {
    color: "#7EB7FD",
    fontWeight: "500",
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    splitLine: {
      show: false
    },
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: false
    },
    name: "单位:元/Kg",
    nameLocation: 'center',
    nameTextStyle: {
      color: "#FFF",
    },
    nameGap: 30,
  },
  dataZoom: [
    {
      start: 72,
      end: 100
    },
    {
      start: 0,
      end: 10
    }
  ],

  series:
    [{
      type: 'line',
      showSymbol: false,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#4AC0FF' },
          { offset: 1, color: '#2987DC' }
        ]),

      },
      lineStyle: {
        shadowColor: "#4AC0FF", //透明的颜色
        opacity: 1, //透明度
        shadowBlur: 8, //阴影大小
        type: "solid", //实线
        width: 1.3,
      },
    },
    {
      type: 'line',
      showSymbol: false,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "#84fab0" },
          { offset: 1, color: "#8fd3f4" }
        ]),
      },
      lineStyle: {
        shadowColor: "#84fab0",
        opacity: 1,
        shadowBlur: 8,
        type: "solid",
        width: 1.3,
      },
    },
    {
      type: 'line',
      showSymbol: false,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#fbc8d4' },
          { offset: 1, color: '#9795f0' }
        ]),
      },
      lineStyle: {
        shadowColor: "#fbc8d4",
        opacity: 1,
        shadowBlur: 8,
        type: "solid",
        width: 1.3,
      },
    },
    {
      type: 'line',
      showSymbol: false,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#f093fb' },
          { offset: 1, color: '#f5576c' }
        ]),
      },
      lineStyle: {
        shadowColor: "#f093fb",
        opacity: 1,
        shadowBlur: 8,
        type: "solid",
        width: 1.3,
      },
    },
    {
      type: 'line',
      showSymbol: false,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#b1f4cf' },
          { offset: 1, color: '#9890e3' }
        ]),
      },
      lineStyle: {
        shadowColor: "#b1f4cf",
        opacity: 1,
        shadowBlur: 8,
        type: "solid",
        width: 1.3,
      },
    },
    {
      type: 'line',
      showSymbol: false,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#30cfd0' },
          { offset: 1, color: '#330867' }
        ]),
      },
      lineStyle: {
        shadowColor: "#30cfd0",
        opacity: 1,
        shadowBlur: 8,
        type: "solid",
        width: 1.3,
      },
    },
    {
      type: 'line',
      showSymbol: false,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#2af598' },
          { offset: 1, color: '#009efd' }
        ]),
      },
      lineStyle: {
        shadowColor: "#2af598",
        opacity: 1,
        shadowBlur: 8,
        type: "solid",
        width: 1.3,
      },
    },
    {
      type: 'line',
      showSymbol: false,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#6a11cb' },
          { offset: 1, color: '#2575fc' }
        ]),
      },
      lineStyle: {
        shadowColor: "#6a11cb",
        opacity: 1,
        shadowBlur: 8,
        type: "solid",
        width: 1.3,
      },
    },
    {
      type: 'line',
      showSymbol: false,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#f3e7e9' },
          { offset: 1, color: '#fcb69f' }
        ]),
      },
      lineStyle: {
        shadowColor: "#f3e7e9",
        opacity: 1,
        shadowBlur: 8,
        type: "solid",
        width: 1.3,
      },

    },
    {
      type: 'line',
      showSymbol: false,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#ffecd2' },
          { offset: 1, color: '#fcb69f' }
        ]),
      },
      lineStyle: {
        shadowColor: "#ffecd2",
        opacity: 1,
        shadowBlur: 8,
        type: "solid",
        width: 1.3,
      },
    },
    {
      type: 'line',
      showSymbol: false,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#ff5858' },
          { offset: 1, color: '#f09819' }
        ]),
      },
      lineStyle: {
        shadowColor: "#ff5858",
        opacity: 1,
        shadowBlur: 8,
        type: "solid",
        width: 1.3,
      },
    },
    ]
};

let chartsRef = ref()

onMounted(() => {
  getQuotation("1").then(res => {
    if (res.status === 200) {
      let product = [["product", "剪口", "10头", "20头", "30头", "40头", "60头", "80头", "120头", "180头", "无数头", "大根"]]
      let data = product.concat(res.data)
      option.dataset.source = data
      let Echarts = echarts.init(chartsRef.value);
      Echarts.setOption(option)
    }
  }
  ).catch(err => { console.log(err) })

});



</script>

<template>
  <div id="chartsDiv" ref="chartsRef"></div>
</template>

<style scoped>
#chartsDiv {
  height: 90%;
  width: 100%;
}
</style>
