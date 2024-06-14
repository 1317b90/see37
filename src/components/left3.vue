<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getSupplyHead, getSupplyMouth, getSupplyRoot } from '@/request/api'
import * as echarts from "echarts";
import { option } from "./config/leftPieOption";

let chartsRef = ref()


async function getData() {
  let dataCount = {
    "10头三七": 0,
    "20头三七": 0,
    "30头三七": 0,
    "40头三七": 0,
    "60头三七": 0,
    "80头三七": 0,
    "120头三七": 0,
    "无数头三七": 0,
    "统货三七": 0,
    "三七剪口": 0,
    "三七大根": 0,
  }
  await getSupplyHead().then(res => {
    if (res.status === 200) {
      const items = res.data.items
      for (const item of items) {
        switch (item.taprootSpec) {
          case "1":
            dataCount["10头三七"] += Number(item.qty)
            break;
          case "2":
            dataCount["20头三七"] += Number(item.qty)
            break;
          case "10":
            dataCount["30头三七"] += Number(item.qty)
            break;
          case "3":
            dataCount["40头三七"] += Number(item.qty)
            break;
          case "4":
            dataCount["60头三七"] += Number(item.qty)
            break;
          case "5":
            dataCount["80头三七"] += Number(item.qty)
            break;
          case "6":
            dataCount["120头三七"] += Number(item.qty)
            break;
          case "9":
            dataCount["无数头三七"] += Number(item.qty)
            break;
          case "11":
            dataCount["统货三七"] += Number(item.qty)
            break;
        }
      }
    }
  }
  ).catch(err => { console.log(err) })

  await getSupplyMouth().then(res => {
    if (res.status === 200) {
      const items = res.data.items
      for (const item of items) {
        dataCount["三七剪口"] += Number(item.qty)
      }
    }
  }
  ).catch(err => { console.log(err) })

  await getSupplyRoot().then(res => {
    if (res.status === 200) {
      const items = res.data.items
      for (const item of items) {
        dataCount["三七大根"] += Number(item.qty)
      }
    }
  }
  ).catch(err => { console.log(err) })
  return dataCount
}
// 获取平台数据
onMounted(() => {
  getData().then(dataCount => {
    let dataSum = 0
    let data = []
    for (let [key, value] of Object.entries(dataCount)) {
      data.push({
        "name": key,
        "value": Math.round((value) / 10) / 100
      })
      dataSum += value
    }
    dataSum=Math.round(dataSum / 10) / 100
    option.title.text = [`{value|${dataSum}}`, "{name|总库存量(吨)}"].join("\n")
    option.series[0].data = data
    let Echarts = echarts.init(chartsRef.value);
    Echarts.setOption(option);
  })
});


</script>

<template>
  <div id="chartsDiv" ref="chartsRef"></div>
</template>

<style scoped>
#chartsDiv {
  height: 95%;
  width: 100%;
}
</style>
