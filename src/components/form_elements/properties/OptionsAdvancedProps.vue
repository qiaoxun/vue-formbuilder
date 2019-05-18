<template>
<div>
  <el-row>
    <el-col :span="6">
      <el-form-item label="Data From Url">
        <el-switch v-model="activeForm.isFromUrl">{{activeForm.htmlContent}}</el-switch>
      </el-form-item>
    </el-col>
    <el-col :span="18">
      <el-form-item label="Url" v-show="activeForm.isFromUrl">
        <el-input v-model="activeForm.advancedOptions.dataUrl"></el-input>
      </el-form-item>
    </el-col>
  </el-row>

  <el-row v-show="activeForm.isFromUrl">
    <el-col :span="4">
      <el-form-item label="Fetch Data" v-show="activeForm.advancedOptions.labelField">
        <el-button type="success" plain @click="fetchData">Fetch Data</el-button>
      </el-form-item>
    </el-col>
    <el-col :span="10">
      <el-form-item label="Label Field" v-show="activeForm.advancedOptions.labelField">
        <el-input v-model="activeForm.advancedOptions.labelField"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="10">
      <el-form-item label="Value Field" v-show="activeForm.advancedOptions.valueField">
        <el-input v-model="activeForm.advancedOptions.valueField"></el-input>
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
      let dataUrl = this.activeForm.advancedOptions.dataUrl;
      let valueField = this.activeForm.advancedOptions.valueField;
      let labelField = this.activeForm.advancedOptions.labelField;
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
    }
  }
}

</script>
