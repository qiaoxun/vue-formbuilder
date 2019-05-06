<template>
  <el-form-item :label="currentField.label" :label-width="currentField.labelWidth + 'px'">
    <el-input :placeholder="currentField.isPlaceholderVisible ? currentField.placeholder : ''">
    </el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'TextInput',
  props: ['currentField']
}
</script>
