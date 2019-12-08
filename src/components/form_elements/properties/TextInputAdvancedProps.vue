<template>
<div>
  <el-row>
    <el-col :span="8">
      <el-form-item label="Password">
        <el-switch @change="passwordChange" v-model="activeField.showPassword"></el-switch>
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item label="Disabled">
        <el-switch v-model="activeField.disabled"></el-switch>
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item label="Clearable">
        <el-switch v-model="activeField.clearable"></el-switch>
      </el-form-item>
    </el-col>
  </el-row>

  <el-row>
    <el-col :span="12">
      <el-form-item label="Prepend">
        <el-input v-model="activeField.prepend"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="Append">
        <el-input v-model="activeField.append"></el-input>
      </el-form-item>
    </el-col>
  </el-row>

  <el-row>
    <el-col :span="12">
      <el-form-item label="Show Word Limit">
        <el-switch @change="showWordLimitChange" v-model="activeField.showWordLimit"></el-switch>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="Word Limit" v-show="activeField.showWordLimit">
        <el-input-number :min="1" v-model="activeField.maxlength"></el-input-number>
      </el-form-item>
    </el-col>
  </el-row>

</div>
</template>
<script>
export default {
  name: 'RatingAdvancedProp',
  store: ['activeField'],
  data() {
    return {
      name: ''
    }
  },
  methods: {
    passwordChange(value) {
      if (value) {
        this.activeField.showWordLimit = false;
      }
    },
    showWordLimitChange(value) {
      if (value) {
        this.activeField.showPassword = false;
      }
    }
  }
}
</script>
