<template>
<div>
  <options-advanced-props/>
  <el-row>
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

    <el-col :span="8">
      <el-form-item label="Multiple">
        <el-switch v-model="activeForm.advancedOptions.multiple"></el-switch>
      </el-form-item>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="8">
      <el-form-item label="Filterable">
        <el-switch v-model="activeForm.advancedOptions.filterable"></el-switch>
      </el-form-item>
    </el-col>

    <el-col :span="8">
      <el-form-item label="Remote Search">
        <el-switch @change="remoteChange" v-model="activeForm.advancedOptions.remote"></el-switch>
      </el-form-item>
    </el-col>

    <el-col :span="8">
      <el-form-item label="Multiple">
        <el-switch v-model="activeForm.advancedOptions.multiple"></el-switch>
      </el-form-item>
    </el-col>
  </el-row>
</div>
</template>

<script>
import OptionsAdvancedProps from './OptionsAdvancedProps';

export default {
  name: 'SelectListAdvancedProp',
  store: ['activeForm'],
  components: {
    OptionsAdvancedProps
  },
  methods: {
    remoteChange(value) {
      if (value) {
        this.activeForm.advancedOptions.filterable = true;
        this.activeForm.isFromUrl = true;
      }
    }
  }
}

</script>
