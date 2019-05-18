<template>
<el-form-item :label="currentField.label" :label-width="currentField.labelWidth + 'px'">
  <el-input type="textarea" :rows="2" :placeholder="currentField.isPlaceholderVisible ? currentField.placeholder : ''" v-model="textarea">
  </el-input>
</el-form-item>
</template>


<script>
export default {
  name: 'LongTextInput',
  props: ['currentField'],
  data() {
    return {
      textarea: ''
    }
  }
}
</script>
