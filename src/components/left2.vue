<script setup lang="ts">
import { onMounted, ref, reactive, onBeforeMount } from "vue";
import { getPurchase } from '@/request/api'

import * as echarts from "echarts";
import { option } from "./config/leftPieOption";

let chartsRef = ref()

interface Item {
  name: string;
  qty: number;
}
// 获取平台数据
onMounted(() => {
  getPurchase().then(res => {
    if (res.status === 200) {
      let dataSum = 0
      let dataObj = {}
      let items: Item[]=res.data.items
      items.reduce((item: any, { name, qty }) => {
        const newqty = Math.round(Number(qty) / 10) / 100
        item[name] = (item[name] || 0) + newqty
        dataSum += newqty
        return item
      }, dataObj)

      option.title.text = [`{value|${dataSum}}`, "{name|总求购量(吨)}"].join("\n")
      option.series[0].data = Object.entries(dataObj).map(([name, value]) => ({
        name,
        value
      }));
      let Echarts = echarts.init(chartsRef.value);
      //设置配置项
      Echarts.setOption(option);
    }
  }).catch(err => {
    console.log(err)
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
