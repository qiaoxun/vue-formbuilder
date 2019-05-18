<template>
<el-form-item :label="currentField.label" :label-width="currentField.labelWidth + 'px'">
  <el-select v-model="value" placeholder="Select">
    <el-option v-for="item in currentField.options" :key="item.optionLabel" :value="item.optionValue" :label="item.optionLabel" :disabled="item.disabled">
    </el-option>
  </el-select>
</el-form-item>
</template>

<script>
import fetchData from '@/api/fetch-data';

export default {
  name: 'SelectList',
  props: ['currentField'],
  data() {
    return {
      value: ""
    }
  },
  mounted() {
    if (this.currentField.isFromUrl) {

      let dataUrl = this.currentField.advancedOptions.dataUrl;
      let valueField = this.currentField.advancedOptions.valueField;
      let labelField = this.currentField.advancedOptions.labelField;

      let promise = fetchData.fetchOptionsData(dataUrl, labelField, valueField);
      promise.then((data) => {
        this.currentField.options = data;
      });
    }
  }
}
</script>
