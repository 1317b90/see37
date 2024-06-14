<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import mapJSON from "./config/mapJson.json";

// 获取地图DOM元素
let mapRef = ref();
let option = {
  tooltip: {
    show: false
  },
  legend: {
    show: false
  },
  visualMap: {
    seriesIndex: 0,
    right: 20,
    bottom: 20,
    pieces: [
      {
        gte: 700,
        label: "700吨以上"
      },
      {
        gte: 500,
        lte: 700,
        label: "500-700吨"
      },
      {
        gte: 300,
        lte: 500,
        label: "300-500吨"
      },
      {
        gte: 200,
        lte: 300,
        label: "200-300吨"
      },
      {
        lte: 200,
        label: "1-200吨"
      }
    ],
    inRange: {
      color: [
        "rgba(237,247,253,.8)",
        "rgba(183,225,246,.9)",
        "rgba(129,202,239,.9)",
        "rgba(56,172,229,.9)",
        "rgba(23,129,181,.9)",
        "rgba(16,90,126,0.9)"
      ]
    },
    textStyle: {
      color: "#fff"
    }
  },
  geo: {
    map: "532600",
    roam: false,
    selectedMode: false,
    zoom: 1,
    top: 45,
    show: false
  },
  series: [
    {
      name: "年产量(吨)",
      type: "map",
      map: "532600",
      data: [
        {
          name: "文山市",
          value: 583
        },
        {
          name: "砚山县",
          value: 483
        },
        {
          name: "西畴县",
          value: 231
        },
        {
          name: "麻栗坡县",
          value: 105
        },
        {
          name: "马关县",
          value: 442
        },
        {
          name: "丘北县",
          value: 3472
        },
        {
          name: "广南县",
          value: 611
        },
        {
          name: "富宁县",
          value: 129
        }
      ],
      selectedMode: false,
      zoom: 1,
      geoIndex: 1,
      top: 45,
      tooltip: {
        show: true,
        backgroundColor: "rgba(0,0,0,.6)",
        borderColor: "rgba(147, 235, 248, .8)",
        textStyle: {
          color: "#FFF"
        },
      },
      label: {
        show: false
      },
      emphasis: {
        label: {
          show: false
        },
        itemStyle: {
          areaColor: {
            type: "radial",
            x: 0.5,
            y: 0.5,
            r: 0.8,
            colorStops: [
              {
                offset: 0,
                color: "rgba(147, 235, 248, 0)"
              },
              {
                offset: 1,
                color: "rgba(56,155,183, .8)"
              }
            ],
            globalCoord: false
          },
          borderWidth: 1
        }
      },
      itemStyle: {
        borderColor: "rgba(147, 235, 248, .8)",
        borderWidth: 1,
        areaColor: {
          type: "radial",
          x: 0.5,
          y: 0.5,
          r: 0.8,
          colorStops: [
            {
              offset: 0,
              color: "rgba(147, 235, 248, 0)"
            },
            {
              offset: 1,
              color: "rgba(147, 235, 248, .2)"
            }
          ],
          globalCoord: false
        },
        shadowColor: "rgba(128, 217, 248, .3)",
        shadowOffsetX: -2,
        shadowOffsetY: 2,
        shadowBlur: 10
      }
    },
    {
      data: [
        {
          name: "文山市",
          value: [104.244277, 23.369216, 583]
        },
        {
          name: "砚山县",
          value: [104.343989, 23.612301, 483]
        },
        {
          name: "西畴县",
          value: [104.675711, 23.437439, 231]
        },
        {
          name: "麻栗坡县",
          value: [104.701899, 23.124202, 105]
        },
        {
          name: "马关县",
          value: [104.398619, 23.011723, 442]
        },
        {
          name: "丘北县",
          value: [104.194366, 24.040982, 3472]
        },
        {
          name: "广南县",
          value: [105.056684, 24.050272, 611]
        },
        {
          name: "富宁县",
          value: [105.62856, 23.626494, 129]
        }
      ],
      type: "effectScatter",
      coordinateSystem: "geo",
      legendHoverLink: false,
      showEffectOn: "render",
      rippleEffect: {
        scale: 4,
        color: "rgba(255,255,255, 1)",
        brushType: "fill"
      },
      tooltip: {
        show: false,
        backgroundColor: "rgba(0,0,0,.6)",
        borderColor: "rgba(147, 235, 248, .8)",
        textStyle: {
          color: "#FFF"
        }
      },
      label: {
        fontSize: 14,
        offset: [0, 7],
        position: "bottom",
        textBorderColor: "#fff",
        textShadowColor: "#000",
        textShadowBlur: 10,
        textBorderWidth: 0,
        color: "#FFF",
        show: true,
        formatter: "{b}"
      },
      itemStyle: {
        color: "rgba(255,255,255,1)",
        borderColor: "rgba(2255,255,255,2)",
        borderWidth: 4,
        shadowColor: "#000",
        shadowBlur: 10
      }
    }
  ]
}
// 注册地图
echarts.registerMap("532600", mapJSON as any);
onMounted(() => {
  let myMap = echarts.init(mapRef.value);
  myMap.setOption(option);
});

</script>

<template>
  <div id="mapDiv" ref="mapRef"></div>
</template>

<style scoped>
#mapDiv {
  padding-top: 30px;
  height: 95%;
  width: 100%;
}
</style>