<template>
<el-form-item label="Html Content" v-show="activeField.hasOwnProperty('htmlContent')">
  <el-input :rows="16" type="textarea" v-model="activeField.htmlContent">{{activeField.htmlContent}}</el-input>
</el-form-item>
</template>
<script>

export default {
  name: 'HtmlAdvancedProp',
  store: ['activeField']
}

</script>
