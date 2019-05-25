<template>
<el-form-item :label="currentField.label" :label-width="currentField.labelWidth + 'px'">
  <el-select v-if="update" v-model="value" placeholder="Select" :loading="loading" v-bind="attributesBinding">
    <el-option v-for="item in currentField.options" :key="item.optionLabel" :value="item.optionValue" :label="item.optionLabel" :disabled="item.disabled">
    </el-option>
  </el-select>
</el-form-item>
</template>

<script>
import fetchData from '@/api/fetch-data';
import qs from 'qs';

export default {
  name: 'SelectList',
  props: ['currentField'],
  data() {
    return {
      update: true,
      value: "",
      loading: false
    }
  },
  mounted() {
    if (this.currentField.isFromUrl) {

      let dataUrl = this.currentField.dataUrl;
      let valueField = this.currentField.valueField;
      let labelField = this.currentField.labelField;

      let promise = fetchData.fetchOptionsData(dataUrl, labelField, valueField);
      promise.then((data) => {
        this.currentField.options = data;
      });
    }
  },
  computed: {
    attributesBinding() {
      var attr = {};
      attr.disabled = this.currentField.disabled;
      attr.clearable = this.currentField.clearable;
      attr.multiple = this.currentField.multiple;
      attr.filterable = this.currentField.filterable;
      attr.remote = this.currentField.remote;
      if (attr.remote) {
        attr.remoteMethod = this.remoteMethod;
      }
      return attr;
    }
  },
  methods: {
    reload() {
      this.update = false
      this.$nextTick(() => {
        this.update = true
      });
    },
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true;
        let dataUrl = this.currentField.dataUrl;
        let valueField = this.currentField.valueField;
        let labelField = this.currentField.labelField;
        var param = {queryStr: query};
        let promise = fetchData.fetchOptionsData(dataUrl, labelField, valueField, qs.stringify(param));
        promise.then((data) => {
          this.currentField.options = data;
          this.loading = false;
        });
      } else {
        this.currentField.options = [];
      }
    }
  },
  watch: {
    'currentField.multiple'() {
      this.reload();
    }
  }
}
</script>
