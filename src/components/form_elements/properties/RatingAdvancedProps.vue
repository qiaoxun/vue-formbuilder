<template>
<div>
  <el-row>
    <el-col :span="24">
      <el-form-item label="Colors">
        <el-row :gutter="3">
          <el-col :span="7" v-for="(color, index) in activeForm.advancedOptions.colors" :key="index">
            <el-input v-model="activeForm.advancedOptions.colors[index]"></el-input>
          </el-col>
        </el-row>
      </el-form-item>
    </el-col>
  </el-row>

  <el-row>
    <el-col :span="12">
      <el-form-item label="Show Text">
        <el-switch @change="showTextChange" v-model="activeForm.advancedOptions.showText"></el-switch>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="Disabled">
        <el-switch v-model="activeForm.advancedOptions.disabled"></el-switch>
      </el-form-item>
    </el-col>
  </el-row>

  <el-row>
    <el-col :span="24">
      <el-form-item label="Texts" v-show="activeForm.advancedOptions.showText">
        <el-row :gutter="3">
          <el-col :span="4" v-for="(text, index) in activeForm.advancedOptions.texts" :key="index">
            <el-input v-model="activeForm.advancedOptions.texts[index]"></el-input>
          </el-col>
        </el-row>
      </el-form-item>
    </el-col>
  </el-row>

  <el-row>
    <el-col :span="12">
      <el-form-item label="Show Score">
        <el-switch @change="showScoreChange" v-model="activeForm.advancedOptions.showScore"></el-switch>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="Score Unit" v-show="activeForm.advancedOptions.showScore">
        <el-input v-model="activeForm.advancedOptions.scoreUnit"></el-input>
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
    showTextChange(value) {
      if (value && this.activeForm.advancedOptions.showScore) {
        this.activeForm.advancedOptions.showScore = false;
      }
    },
    showScoreChange(value) {
      if (value && this.activeForm.advancedOptions.showText) {
        this.activeForm.advancedOptions.showText = false;
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.properties__optionslist {
    margin-bottom: 5px;
    list-style: none;
    list-style-type: none;
}
.properties__optionsul {
  padding: 0px;
}
</style>
