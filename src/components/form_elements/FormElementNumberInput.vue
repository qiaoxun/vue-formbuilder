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
      attr.disabled = this.currentField.disabled;
      attr.step = this.currentField.step;
      attr['step-strictly'] = this.currentField.stepStrictly;
      if (this.currentField.hasMinValue) {
        attr.min = this.currentField.min;
      }
      if (this.currentField.hasMaxValue) {
        attr.max = this.currentField.max;
      }
      return attr;
    }
  }
}
</script>
