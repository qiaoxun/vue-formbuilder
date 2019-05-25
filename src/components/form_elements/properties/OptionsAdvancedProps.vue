<template>
<div>
  <el-row>
    <el-col :span="6">
      <el-form-item label="Remote Data Source">
        <el-switch v-model="activeForm.isFromUrl">{{activeForm.htmlContent}}</el-switch>
      </el-form-item>
    </el-col>
    <el-col :span="18">
      <el-form-item label="Url" v-show="activeForm.isFromUrl" prop="dataUrl">
        <el-input v-model="activeForm.dataUrl"></el-input>
      </el-form-item>
    </el-col>
  </el-row>

  <el-row v-show="activeForm.isFromUrl">
    <el-col :span="4">
      <el-form-item label="Fetch Data" v-show="activeForm.labelField">
        <el-button type="success" plain @click="fetchData">Fetch Data</el-button>
      </el-form-item>
    </el-col>
    <el-col :span="10">
      <el-form-item label="Label Field" v-show="activeForm.labelField">
        <el-input v-model="activeForm.labelField"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="10">
      <el-form-item label="Value Field" v-show="activeForm.valueField">
        <el-input v-model="activeForm.valueField"></el-input>
      </el-form-item>
    </el-col>
  </el-row>

</div>
</template>
<script>
import fetchData from '@/api/fetch-data';

export default {
  name: 'SelectListAdvancedProp',
  store: ['activeForm'],
  methods: {
    fetchData() {
      let dataUrl = this.activeForm.dataUrl;
      let valueField = this.activeForm.valueField;
      let labelField = this.activeForm.labelField;
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
        this.activeForm.options = data;
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
