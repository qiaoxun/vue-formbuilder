<template>
<el-form-item label="Html Content" v-show="activeForm.hasOwnProperty('htmlContent')">
  <el-input :rows="16" type="textarea" v-model="activeForm.htmlContent">{{activeForm.htmlContent}}</el-input>
</el-form-item>
</template>
<script>

export default {
  name: 'HtmlAdvancedProp',
  store: ['activeForm']
}

</script>
