<template>
    <el-form-item :label-width="currentField.labelWidth + 'px'">
    	<el-button type="primary" class="form__button">{{ currentField.buttonText }}</el-button>
    </el-form-item>
</template>

<script>
  export default {
    name: 'Button',
    props: ['currentField']
  }
</script>
