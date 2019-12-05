<template>
<div>
  <el-row>
    <el-col :span="24">
      <el-form-item label="Colors">
        <el-row :gutter="3">
          <el-col :span="7" v-for="(color, index) in activeField.colors" :key="index">
            <el-input v-model="activeField.colors[index]"></el-input>
          </el-col>
        </el-row>
      </el-form-item>
    </el-col>
  </el-row>

  <el-row>
    <el-col :span="12">
      <el-form-item label="Show Text">
        <el-switch @change="showTextChange" v-model="activeField.showText"></el-switch>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="Disabled">
        <el-switch v-model="activeField.disabled"></el-switch>
      </el-form-item>
    </el-col>
  </el-row>

  <el-row>
    <el-col :span="24">
      <el-form-item label="Texts" v-show="activeField.showText">
        <el-row :gutter="3">
          <el-col :span="4" v-for="(text, index) in activeField.texts" :key="index">
            <el-input v-model="activeField.texts[index]"></el-input>
          </el-col>
        </el-row>
      </el-form-item>
    </el-col>
  </el-row>

  <el-row>
    <el-col :span="12">
      <el-form-item label="Show Score">
        <el-switch @change="showScoreChange" v-model="activeField.showScore"></el-switch>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="Score Unit" v-show="activeField.showScore">
        <el-input v-model="activeField.scoreUnit"></el-input>
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
    showTextChange(value) {
      if (value && this.activeField.showScore) {
        this.activeField.showScore = false;
      }
    },
    showScoreChange(value) {
      if (value && this.activeField.showText) {
        this.activeField.showText = false;
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
