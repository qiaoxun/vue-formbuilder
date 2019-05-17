<template>
  <el-form-item :label="currentField.label" :label-width="currentField.labelWidth + 'px'">
    <el-input v-model="input" v-bind="attributesBinding">
      <template v-if="currentField.advancedOptions.prepend !== ''" slot="prepend">{{ currentField.advancedOptions.prepend }}</template>
      <template v-if="currentField.advancedOptions.append !== ''" slot="append">{{ currentField.advancedOptions.append }}</template>
    </el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'TextInput',
  props: ['currentField'],
  data() {
    return {
      input: ''
    }
  },
  computed: {
    attributesBinding() {
      var attr = {};
      if (this.currentField.advancedOptions.showWordLimit) {
        attr.maxlength = this.currentField.advancedOptions.maxlength;
        attr['show-word-limit'] = this.currentField.advancedOptions.showWordLimit
      }

      if (this.currentField.advancedOptions.clearable) {
        attr.clearable = this.currentField.advancedOptions.clearable;
      }

      if (this.currentField.advancedOptions.disabled) {
        attr.disabled = this.currentField.advancedOptions.disabled;
      }

      if (this.currentField.advancedOptions.showPassword) {
        attr['show-password'] = this.currentField.advancedOptions.showPassword;
      }

      if (this.currentField.isPlaceholderVisible) {
        attr.placeholder = this.currentField.placeholder;
      }

      return attr;
    }
  }
}
</script>
