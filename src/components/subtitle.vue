<script setup lang="ts">

const props = withDefaults(
  defineProps<{
    // 标题
    title: number | string;
  }>(),
  {
    title: "",
  }
);
</script>

<template>
  <div class="subtitleDiv">
    <div class="subtitleLeft"></div>
    <span class="subtitleInner">{{ title }} </span>
    <div class="subtitleRgiht"></div>
  </div>
</template>

<style scoped>
.subtitleDiv {
  /* margin-bottom: -50px; */
  padding-top: 20px;
  height: 38px;
  color: #31abe3;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.subtitleLeft,
.subtitleRgiht {
  width: 58px;
  height: 14px;
  background-image: url("@/assets/img/subtitle.png");
}

.subtitleRgiht {
  transform: rotate(180deg);
}

.subtitleInner {
  font-size: 18px;
  margin-left: 15px;
  margin-right: 15px;
  font-weight: 900;
  letter-spacing: 2px;
  background: linear-gradient(92deg, #0072ff 0%, #00eaff 48.85%, #01aaff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
