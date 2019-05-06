<template>
<el-form-item :label="currentField.label" :label-width="currentField.labelWidth + 'px'">
  <el-checkbox-group v-model="checkList">
    <el-checkbox v-for="(item, index) in currentField.options" :key="item.optionValue" :label="index">
      {{ item.optionValue }}
    </el-checkbox>
  </el-checkbox-group>
</el-form-item>
</template>


<script>
export default {
  name: 'Checkbox',
  props: ['currentField'],
  data() {
    return {
      checkList: [0]
    }
  }
}
</script>

<style>
.el-checkbox-group {
    font-size: 14px;
}
</style>
