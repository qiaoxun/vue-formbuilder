<template>
<div>
  <el-row>
    <el-col :span="6">
      <el-form-item label="Remote Data Source">
        <el-switch v-model="activeField.isFromUrl">{{activeField.htmlContent}}</el-switch>
      </el-form-item>
    </el-col>
    <el-col :span="18">
      <el-form-item label="Url" v-show="activeField.isFromUrl" prop="dataUrl">
        <el-input v-model="activeField.dataUrl"></el-input>
      </el-form-item>
    </el-col>
  </el-row>

  <el-row v-show="activeField.isFromUrl">
    <el-col :span="4">
      <el-form-item label="Fetch Data" v-show="activeField.labelField">
        <el-button type="success" plain @click="fetchData">Fetch Data</el-button>
      </el-form-item>
    </el-col>
    <el-col :span="10">
      <el-form-item label="Label Field" v-show="activeField.labelField">
        <el-input v-model="activeField.labelField"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="10">
      <el-form-item label="Value Field" v-show="activeField.valueField">
        <el-input v-model="activeField.valueField"></el-input>
      </el-form-item>
    </el-col>
  </el-row>

</div>
</template>
<script>
import fetchData from '@/api/fetch-data';

export default {
  name: 'SelectListAdvancedProp',
  store: ['activeField'],
  methods: {
    fetchData() {
      let dataUrl = this.activeField.dataUrl;
      let valueField = this.activeField.valueField;
      let labelField = this.activeField.labelField;
      if (!dataUrl) {
        this.$message.error('Url can not be empty');
        return;
      }
      if (!valueField) {
        this.$message.error('Value Field can not be empty');
        return;
      }
      if (!labelField) {
        this.$message.error('Label Field can not be empty');
        return;
      }

      let promise = fetchData.fetchOptionsData(dataUrl, labelField, valueField);
      promise.then((data) => {
        this.activeField.options = data;
      });
      this.$message({
        showClose: true,
        message: 'Success.',
        type: 'success',
        duration: 1000
      });
    }
  }
}

</script>
