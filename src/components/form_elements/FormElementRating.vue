<template>
  <el-form-item :label="currentField.label" :label-width="currentField.labelWidth + 'px'">
    <el-rate
      v-model="value"
      :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
    </el-rate>
  </el-form-item>
</template>


<script>
  export default {
    name: 'Rating',
    props: ['currentField'],
    data() {
    	return {
    		value: null
    	}
    }
  }
</script>

<style>
.el-rate {
  padding-top: 12px;
}
</style>
