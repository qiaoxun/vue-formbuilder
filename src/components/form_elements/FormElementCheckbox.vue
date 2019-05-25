<template>
<el-form-item :label="currentField.label" :label-width="currentField.labelWidth + 'px'">
  <el-checkbox-group v-model="checkList">
    <el-checkbox v-for="item in currentField.options" :key="item.optionValue" :label="item.optionLabel" :disabled="item.disabled">
    </el-checkbox>
  </el-checkbox-group>
</el-form-item>
</template>

<script>
import fetchData from '@/api/fetch-data';
export default {
  name: 'Checkbox',
  props: ['currentField'],
  data() {
    return {
      checkList: [0]
    }
  },
  mounted() {
    if (this.currentField.isFromUrl) {
      let dataUrl = this.currentField.dataUrl;
      let valueField = this.currentField.valueField;
      let labelField = this.currentField.labelField;
      let promise = fetchData.fetchOptionsData(dataUrl, labelField, valueField);
      promise.then((data) => {
        this.currentField.options = data;
      });
    }
  }
}
</script>

<style>
.el-checkbox-group {
  font-size: 14px;
}
</style>
