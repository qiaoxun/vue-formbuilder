<template>
  <el-form-item :label="currentField.label" :label-width="currentField.labelWidth + 'px'">
    <el-radio v-model="radio"
    			    v-for="(item, index) in currentField.options"
        		  :key="item.optionValue"
        		  :label="item.optionLabel">
      {{ item.optionValue }}
     </el-radio>
  </el-form-item>
</template>


<script>
  export default {
    name: 'RadioButton',
    props: ['currentField'],
    data() {
    	return {
    		radio: '1'
    	}
    }
  }
</script>
