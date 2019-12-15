<template>
<el-form-item :label="currentField.label" :label-width="currentField.labelWidth + 'px'">
  <el-switch v-model="currentField.value" :active-text="currentField.activeText" :inactive-text="currentField.inActiveText">
  </el-switch>
</el-form-item>
</template>


<script>
export default {
  name: 'elswitch',
  props: ['currentField'],
}
</script>
