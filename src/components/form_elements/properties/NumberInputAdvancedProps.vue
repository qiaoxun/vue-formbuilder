<template>
<div>
  <el-row>
    <el-col :span="8">
      <el-form-item label="Disabled">
        <el-switch v-model="activeForm.advancedOptions.disabled"></el-switch>
      </el-form-item>
    </el-col>

    <el-col :span="8">
      <el-form-item label="Step">
        <el-input-number v-model="activeForm.advancedOptions.step"></el-input-number>
      </el-form-item>
    </el-col>

    <el-col :span="8">
      <el-form-item label="Step Strictly">
        <el-switch v-model="activeForm.advancedOptions.stepStrictly"></el-switch>
      </el-form-item>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="12">
      <el-form-item label="Min Value">
        <el-row>
          <el-col :span="6">
            <el-switch v-model="activeForm.advancedOptions.hasMinValue"></el-switch>
          </el-col>
          <el-col :span="18">
            <el-input-number v-show="activeForm.advancedOptions.hasMinValue" v-model="activeForm.advancedOptions.mix"></el-input-number>
          </el-col>
        </el-row>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="Max Value">
        <el-row>
          <el-col :span="6">
            <el-switch v-model="activeForm.advancedOptions.hasMaxValue"></el-switch>
          </el-col>
          <el-col :span="18">
            <el-input-number v-show="activeForm.advancedOptions.hasMaxValue" v-model="activeForm.advancedOptions.max"></el-input-number>
          </el-col>
        </el-row>
      </el-form-item>
    </el-col>
  </el-row>
</div>
</template>
<script>
export default {
  name: 'RatingAdvancedProp',
  store: ['activeForm']
}
</script>
