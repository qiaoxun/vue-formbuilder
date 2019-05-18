<template>
<el-form-item :label="currentField.label" :label-width="currentField.labelWidth + 'px'">
  <el-time-select v-model="time" :picker-options="{
        start: '00:00',
        step: '00:15',
        end: '23:45'
      }" placeholder="Select time">
  </el-time-select>
</el-form-item>
</template>


<script>
export default {
  name: 'TimePicker',
  props: ['currentField'],
  data() {
    return {
      time: ''
    }
  }
}
</script>
