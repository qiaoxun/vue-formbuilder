<template>
  <el-form-item :label="currentField.label" :label-width="currentField.labelWidth + 'px'" :required="this.currentField.isRequired">
    <el-input v-model="input" v-bind="attributesBinding">
      <template v-if="currentField.prepend !== ''" slot="prepend">{{ currentField.prepend }}</template>
      <template v-if="currentField.append !== ''" slot="append">{{ currentField.append }}</template>
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
      if (this.currentField.showWordLimit) {
        attr.maxlength = this.currentField.maxlength;
        attr['show-word-limit'] = this.currentField.showWordLimit
      }

      if (this.currentField.clearable) {
        attr.clearable = this.currentField.clearable;
      }

      if (this.currentField.disabled) {
        attr.disabled = this.currentField.disabled;
      }

      if (this.currentField.showPassword) {
        attr['show-password'] = this.currentField.showPassword;
      }

      if (this.currentField.isPlaceholderVisible) {
        attr.placeholder = this.currentField.placeholder;
      }

      return attr;
    }
  }
}
</script>
