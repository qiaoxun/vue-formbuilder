<template>
<div class="block">
  <el-carousel :height="currentField.controlHeight + 'px'">
    <el-carousel-item :height="currentField.controlHeight + 'px'" v-for="(item, index) in currentField.items" :key="index">
      <el-image style="width: 100%; height: 100%" :src="item.url" fit="fill"></el-image>
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>
export default {
  name: 'Button',
  props: ['currentField']
}
</script>
<style scoped>

</style>
