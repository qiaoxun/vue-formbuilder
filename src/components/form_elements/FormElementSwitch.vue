<template>
<el-form-item :label="currentField.label" :label-width="currentField.labelWidth + 'px'">
  <el-switch v-model="value" :active-text="currentField.activeText" :inactive-text="currentField.inActiveText">
  </el-switch>
</el-form-item>
</template>


<script>
export default {
  name: 'elswitch',
  props: ['currentField'],
  data() {
    return {
      value: true
    }
  }
}
</script>
