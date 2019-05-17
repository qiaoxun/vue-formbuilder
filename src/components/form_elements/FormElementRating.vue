<template>
<el-form-item :label="currentField.label" :label-width="currentField.labelWidth + 'px'">
  <el-rate v-model="currentField.advancedOptions.rateValue" :colors="currentField.advancedOptions.colors" :texts="currentField.advancedOptions.texts"
  :show-text="currentField.advancedOptions.showText"
  :disabled="currentField.advancedOptions.disabled"
  :show-score="currentField.advancedOptions.showScore"
  :score-template="'{value} ' + currentField.advancedOptions.scoreUnit"
  allow-half>
  </el-rate>
</el-form-item>
</template>


<script>
export default {
  name: 'Rating',
  props: ['currentField'],
  data() {
    return {
      value: null
    }
  },
  mounted() {
    console.log('currentField', this.currentField)
  }
}
</script>

<style>
.el-rate {
  padding-top: 12px;
}
</style>
