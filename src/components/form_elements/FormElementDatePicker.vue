<template>
  <el-form-item :label="currentField.label" :label-width="currentField.labelWidth + 'px'">
    <el-date-picker
      v-model="date"
      type="date"
      placeholder="Pick a day">
    </el-date-picker>
  </el-form-item>
</template>


<script>
  export default {
    name: 'DatePicker',
    props: ['currentField'],
    data() {
    	return {
    		date: ''
    	}
    }
  }
</script>
