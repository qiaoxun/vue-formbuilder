<template>
<div>
  <el-row>
    <el-col :span="8">
      <el-form-item label="Disabled">
        <el-switch v-model="activeForm.disabled"></el-switch>
      </el-form-item>
    </el-col>

    <el-col :span="8">
      <el-form-item label="Step">
        <el-input-number v-model="activeForm.step" controls-position="right"></el-input-number>
      </el-form-item>
    </el-col>

    <el-col :span="8">
      <el-form-item label="Step Strictly">
        <el-switch v-model="activeForm.stepStrictly"></el-switch>
      </el-form-item>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="12">
      <el-form-item label="Min Value">
        <el-row>
          <el-col :span="6">
            <el-switch v-model="activeForm.hasMinValue"></el-switch>
          </el-col>
          <el-col :span="18">
            <el-input-number v-show="activeForm.hasMinValue" v-model="activeForm.mix" controls-position="right"></el-input-number>
          </el-col>
        </el-row>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="Max Value">
        <el-row>
          <el-col :span="6">
            <el-switch v-model="activeForm.hasMaxValue"></el-switch>
          </el-col>
          <el-col :span="18">
            <el-input-number v-show="activeForm.hasMaxValue" v-model="activeForm.max" controls-position="right"></el-input-number>
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
