<template>
<el-form-item :label="currentField.label" :label-width="currentField.labelWidth + 'px'">
  <el-rate v-model="currentField.rateValue" :colors="currentField.colors" :texts="currentField.texts"
  :show-text="currentField.showText"
  :disabled="currentField.disabled"
  :show-score="currentField.showScore"
  :score-template="'{value} ' + currentField.scoreUnit"
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
