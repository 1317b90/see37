<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getPrice } from '@/request/api'
import * as echarts from "echarts";

async function getData() {
  let data = [
    ['product', '文山三七市场', '豪州药市', '安国药市', '荷花池药市'],
    ["20头", 0, 0, 0, 0],
    ["40头", 0, 0, 0, 0],
    ["60头", 0, 0, 0, 0],
    ["80头", 0, 0, 0, 0],
    ["120头", 0, 0, 0, 0],
  ]

  // 文山三七市场
  await getPrice("1").then(res => {
    if (res.status === 200) {
      data[1][1] = res.data[1]["price"]
      data[2][1] = res.data[3]["price"]
      data[3][1] = res.data[4]["price"]
      data[4][1] = res.data[5]["price"]
      data[5][1] = res.data[6]["price"]
    }
  }
  ).catch(err => { console.log(err) })

  // 毫州药市
  await getPrice("2").then(res => {
    if (res.status === 200) {
      for (let i = 0; i < 5; i++) {
        data[i + 1][2] = res.data[i]["price"]
      }
    }
  }
  ).catch(err => { console.log(err) })

  // 安国药市
  await getPrice("3").then(res => {
    if (res.status === 200) {
      for (let i = 0; i < 5; i++) {
        data[i + 1][3] = res.data[i]["price"]
      }
    }
  }
  ).catch(err => { console.log(err) })

  // 荷花池药市
  await getPrice("4").then(res => {
    if (res.status === 200) {
      for (let i = 0; i < 5; i++) {
        data[i + 1][4] = res.data[i]["price"]
      }
    }
  }
  ).catch(err => { console.log(err) })
  return data
}

let data:any = null
let option = {
  legend: {
    top: 35,
    textStyle: {
      color: '#fff',
      fontSize: 14
    }
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
    splitLine: {
      show: false
    },

  },
  yAxis: {
    type: "value",
    splitLine: {
      show: false
    },

  },
  tooltip: {
    backgroundColor: "rgba(0,0,0,.6)",
    borderColor: "rgba(147, 235, 248, .8)",
    textStyle: {
      color: "#FFF",
    },
  },
  series: [{
    type: 'bar',
    barWidth: 14,
    itemStyle: {
      borderRadius: [10, 10, 10, 10],
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#4AC0FF' },
        { offset: 1, color: '#2987DC' }
      ]),
    }
  },
  {
    type: 'bar',
    barWidth: 14,
    itemStyle: {
      borderRadius: [10, 10, 10, 10],
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#84fab0" },
        { offset: 1, color: "#8fd3f4" }
      ]),
    }
  },
  {
    type: 'bar',
    barWidth: 14,
    itemStyle: {
      borderRadius: [10, 10, 10, 10],
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#fbc8d4' },
        { offset: 1, color: '#9795f0' }
      ]),
    }
  },
  {
    type: 'bar',
    barWidth: 14,
    itemStyle: {
      borderRadius: [10, 10, 10, 10],
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#b1f4cf' },
        { offset: 1, color: '#9890e3' }
      ]),
    }
  }
  ]
};

let chartsRef = ref()
let minHeads=ref<string[]>([])
let minValues=ref<number[]>([])

onMounted(() => {
  getData().then(data => {
    // 配置图表数据
    option.dataset.source = data
    let Echarts = echarts.init(chartsRef.value);
    Echarts.setOption(option)

    const dataHeads:Array<any> = data[0]
    const dataNums:Array<any> = data.slice(1)
    for (const d of dataNums) {
      const minValue = Math.min(...d.slice(1))

      const minIndex = d.indexOf(minValue)
      const minHead:string = dataHeads[minIndex]
      minHeads.value.push(minHead)
      minValues.value.push(minValue)
    }
  }).catch(err => { console.log(err) })
});

</script>

<template>

  <div id="noticeDiv" v-if="minHeads[0]">
    <table>
      <tr>
        <td rowspan="5" id="minPrice">最低价格</td>
        <td class="noticeTitle">20头</td>
        <td class="noticeTitle">40头</td>
        <td class="noticeTitle">60头</td>
        <td class="noticeTitle">80头</td>
        <td class="noticeTitle">120头</td>
      </tr>
      <tr>
        <td class="noticeText">{{ minHeads[0] }}</td>
        <td class="noticeText">{{ minHeads[1] }}</td>
        <td class="noticeText">{{ minHeads[2] }}</td>
        <td class="noticeText">{{ minHeads[3] }}</td>
        <td class="noticeText">{{ minHeads[4] }}</td>
      </tr>
      <tr>
        <td><span class="noticePrice">{{ minValues[0] }}</span><span class="noticeText">元/Kg</span></td>
        <td><span class="noticePrice">{{ minValues[1] }}</span><span class="noticeText">元/Kg</span></td>
        <td><span class="noticePrice">{{ minValues[2] }}</span><span class="noticeText">元/Kg</span></td>
        <td><span class="noticePrice">{{ minValues[3] }}</span><span class="noticeText">元/Kg</span></td>
        <td><span class="noticePrice">{{ minValues[4] }}</span><span class="noticeText">元/Kg</span></td>
      </tr>
    </table>
  </div>
  <div id="chartsDiv" ref="chartsRef"></div>
</template>

<style scoped>
#chartsDiv {
  height: 74%;
  width: 100%;
}

#noticeDiv {
  margin-left: 10px;
  height: 25%;
  width: 100%;
  padding: 10px 30px 0px 0px;
}

table {
  width: 100%;
}

td {
  text-align: center;
  vertical-align: middle;
  color: white;
}

#minPrice {
  writing-mode: vertical-rl;
  text-align: center;
  font-size: 21px;
  color: #7EB7FD;
  font-Weight: bold
}

.noticeTitle {
  font-size: 25px;
  font-Weight: bold
}

.noticeText {
  color: #7EB7FD;
}

.noticePrice {
  color: #87E6CC;
  font-Weight: bold;
  font-size: 18px;
}
</style>
