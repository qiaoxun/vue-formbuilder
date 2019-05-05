<template>
  <el-form-item :label="currentField.label" :label-width="currentField.labelWidth + 'px'">
    <el-select v-model="value" placeholder="Select">
      <el-option
        v-for="item in currentField.options"
        :key="item.optionValue"
        :value="item.optionValue"
        :label="item.optionValue">
      </el-option>
    </el-select>
  </el-form-item>
</template>


<script>
  export default {
    name: 'SelectList',
    props: ['currentField'],
    data(){
    	return {
    		value: ""
    	}
    }
  }
</script>
