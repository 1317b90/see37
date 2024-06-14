<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getStatistics } from '@/request/api'

const data = ref({
    "buyers": "0",
    "sellers": "0",
    "users": "0",
    "aot1": "0",
    "aot2": "万"
})

// 获取平台数据
onMounted(() => {
    getStatistics().then(res => {
    if (res.status === 200) {
        data.value=res.data
        const aotString=res.data.transactionAmount.toString()
        data.value.aot1=aotString.substring(0, 4)
        data.value.aot2=aotString.substring(4)+"万"
    }

    }).catch(err => {
        console.log(err)
    })

});



</script>

<template>
    <div id="left1Div">
        <div id="left1a" class="leftRound">
            <p class="number">{{ data.buyers }}</p>
            <p class="numberTitle">买家数</p>
        </div>

        <div id="left1b" class="leftRound">
            <p class="number">{{ data.sellers }}</p>
            <p class="numberTitle">卖家数</p>
        </div>

        <div id="left1c" class="leftRound">
            <p class="number">{{ data.users }}</p>
            <p class="numberTitle">平台用户数</p>
        </div>

        <div id="left1d" class="leftRound">
            <div id="aotNumberDiv">
                <p class="aotNumber">{{ data.aot1 }}</p>
                <p class="aotNumber">{{ data.aot2 }}</p>
            </div>
            <p id="aotNumberTitle" class="numberTitle">平台交易额</p>

        </div>

    </div>
</template>

<style scoped>
#left1Div {
    width: 100%;
    height: 95%;
    display: flex;
    padding: 35px 20px 0px 20px;
}

.leftRound {
    height: 110px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
}

#left1a {
    background-image: url("@/assets/img/left1B.png");
    color: #00fdfa;
    flex: 1;
}

#left1b {
    background-image: url("@/assets/img/left1G.png");
    color: #07f7a8;
    flex: 1;
}

#left1c {
    background-image: url("@/assets/img/left1Y.png");
    color: #e3b337;
    flex: 1;
}

#left1d {

    background-image: url("@/assets/img/left1R.png");
    color: #f5023d;
    flex: 1;
}

#aotNumberDiv {
    margin-top: 30px;
}

#aotNumberTitle {
    margin-top: 35px;
}

.number {
    text-align: center;
    line-height: 110px;
    font-size: 22px;
    /* margin: 50px auto 30px; */
}


.aotNumber {
    text-align: center;
    font-size: 17px;
}

.numberTitle {
    margin-top: 10px;
    text-align: center;
    font-size: 17px;
}
</style>
