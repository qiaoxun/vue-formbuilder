<template>
<div>
  <el-row>
    <el-col :span="8">
      <el-form-item label="Password">
        <el-switch @change="passwordChange" v-model="activeForm.showPassword"></el-switch>
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item label="Disabled">
        <el-switch v-model="activeForm.disabled"></el-switch>
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item label="Clearable">
        <el-switch v-model="activeForm.clearable"></el-switch>
      </el-form-item>
    </el-col>
  </el-row>

  <el-row>
    <el-col :span="12">
      <el-form-item label="Prepend">
        <el-input v-model="activeForm.prepend"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="Append">
        <el-input v-model="activeForm.append"></el-input>
      </el-form-item>
    </el-col>
  </el-row>

  <el-row>
    <el-col :span="12">
      <el-form-item label="Show Word Limit">
        <el-switch @change="showWordLimitChange" v-model="activeForm.showWordLimit"></el-switch>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="Word Limit" v-show="activeForm.showWordLimit">
        <el-input-number :min="1" v-model="activeForm.maxlength"></el-input-number>
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
        this.activeForm.showWordLimit = false;
      }
    },
    showWordLimitChange(value) {
      if (value) {
        this.activeForm.showPassword = false;
      }
    }
  }
}
</script>
