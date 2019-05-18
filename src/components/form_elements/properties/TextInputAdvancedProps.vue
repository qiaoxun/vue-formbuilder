<template>
<div>
  <el-row>
    <el-col :span="8">
      <el-form-item label="Password">
        <el-switch @change="passwordChange" v-model="activeForm.advancedOptions.showPassword"></el-switch>
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item label="Disabled">
        <el-switch v-model="activeForm.advancedOptions.disabled"></el-switch>
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item label="Clearable">
        <el-switch v-model="activeForm.advancedOptions.clearable"></el-switch>
      </el-form-item>
    </el-col>
  </el-row>

  <el-row>
    <el-col :span="12">
      <el-form-item label="Prepend">
        <el-input v-model="activeForm.advancedOptions.prepend"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="Append">
        <el-input v-model="activeForm.advancedOptions.append"></el-input>
      </el-form-item>
    </el-col>
  </el-row>

  <el-row>
    <el-col :span="12">
      <el-form-item label="Show Word Limit">
        <el-switch @change="showWordLimitChange" v-model="activeForm.advancedOptions.showWordLimit"></el-switch>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="Word Limit" v-show="activeForm.advancedOptions.showWordLimit">
        <el-input-number :min="1" v-model="activeForm.advancedOptions.maxlength"></el-input-number>
      </el-form-item>
    </el-col>
  </el-row>

</div>
</template>
<script>
export default {
  name: 'RatingAdvancedProp',
  store: ['activeForm'],
  data() {
    return {
      name: ''
    }
  },
  methods: {
    passwordChange(value) {
      if (value) {
        this.activeForm.advancedOptions.showWordLimit = false;
      }
    },
    showWordLimitChange(value) {
      if (value) {
        this.activeForm.advancedOptions.showPassword = false;
      }
    }
  }
}
</script>
