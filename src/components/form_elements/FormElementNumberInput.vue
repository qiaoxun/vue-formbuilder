<template>
  <el-form-item :label="currentField.label" :label-width="currentField.labelWidth + 'px'">
    <el-input-number v-model="number" controls-position="right" ></el-input-number>
  </el-form-item>
</template>


<script>
  export default {
    name: 'NumberInput',
    props: ['currentField'],
    data() {
    	return {
    		number: 0
    	}
    }
  }
</script>
