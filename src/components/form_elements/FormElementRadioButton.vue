<template>
<el-form-item :label="currentField.label" :label-width="currentField.labelWidth + 'px'">
  <el-radio v-model="radio" v-for="item in currentField.options" :key="item.optionValue" :label="item.optionValue" :disabled="item.disabled">
  </el-radio>
</el-form-item>
</template>

<script>
import fetchData from '@/api/fetch-data';
export default {
  name: 'RadioButton',
  props: ['currentField'],
  data() {
    return {
      radio: '1'
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
