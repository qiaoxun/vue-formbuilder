<template>
<div>
  <el-form-item :label="currentField.label" :label-width="currentField.labelWidth + 'px'">
    <el-input :placeholder="currentField.isPlaceholderVisible ? currentField.placeholder : ''">
    </el-input>
  </el-form-item>
</div>
</template>

<script>
export default {
  name: 'TextInput',
  props: ['currentField', 'form']
}
</script>
<style>
.el-form-item {
  padding: 10px;
  margin-bottom: 0px;
}
</style>
