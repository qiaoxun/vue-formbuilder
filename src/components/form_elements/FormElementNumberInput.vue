<template>
<el-form-item :label="currentField.label" :label-width="currentField.labelWidth + 'px'">
  <el-input-number v-model="number" controls-position="right" v-bind="attributesBinding">
  </el-input-number>
</el-form-item>
</template>


<script>
export default {
  name: 'NumberInput',
  props: ['currentField'],
  data() {
    return {
      number: 0
    }
  },
  computed: {
    attributesBinding() {
      var attr = {};
      attr.disabled = this.currentField.advancedOptions.disabled;
      attr.step = this.currentField.advancedOptions.step;
      attr['step-strictly'] = this.currentField.advancedOptions.stepStrictly;
      if (this.currentField.advancedOptions.hasMinValue) {
        attr.min = this.currentField.advancedOptions.min;
      }
      if (this.currentField.advancedOptions.hasMaxValue) {
        attr.max = this.currentField.advancedOptions.max;
      }
      return attr;
    }
  }
}
</script>
