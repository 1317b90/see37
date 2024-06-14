interface dataInter {
    name: string;
    value:any; // 假设 qty 可能是字符串或数字
}
const data: dataInter[] = []
export let option = {
    title: {
        top: "center",
        left: "center",
        text: "0",
        textStyle: {
            rich: {
                value: {
                    color: "#ffffff",
                    fontSize: 24,
                    fontWeight: "bold",
                    lineHeight: 20,
                    padding: [4, 0, 4, 0]
                },
                name: {
                    color: "#ffffff",
                    lineHeight: 20,
                },
            },
        },
    },
    tooltip: {
        trigger: "item",
        backgroundColor: "rgba(0,0,0,.6)",
        borderColor: "rgba(147, 235, 248, .8)",
        textStyle: {
            color: "#FFF",
        },
        formatter: "{b} {c}吨 {d}%",
    },
    series: [
        {
            name: "name",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 6,
                borderColor: "rgba(255,255,255,0)",
                borderWidth: 2,
            },
            label: {
                show: true,
                formatter: "   {b|{b}}   \n   {c|{c}吨}   {per|{d}%}  ",
                rich: {
                    b: {
                        color: "#fff",
                        fontSize: 15,
                        fontWeight: "bold",
                        lineHeight: 26,
                    },
                    c: {
                        color: "#31ABE3",
                        fontSize: 14,
                    },
                    per: {
                        color: "#31ABE3",
                        fontSize: 14,
                    },
                },
            },
            emphasis: {
                show: false,
            },
            legend: {
                show: false,
            },
            tooltip: { show: true },

            labelLine: {
                show: true,
                length: 20,
                length2: 36,
                smooth: 0.2,
                lineStyle: {},
            },
            data: data
        },
    ],
}