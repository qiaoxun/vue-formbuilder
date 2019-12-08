<template>
<div class="el-tabs__inner">
  <el-form :model="fieldProperties" :rules="rules" :label-position="labelPosition" ref="fieldProperties">
    <el-row>
      <el-col :span="12">
        <el-form-item label="Label Name" v-show="activeField.hasOwnProperty('label')">
          <el-input v-model="activeField.label">{{activeField.label}}</el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Label Width - px" v-show="activeField.hasOwnProperty('label')">
          <el-input-number v-model="activeField.labelWidth" :min="30" :max="1000" controls-position="right"></el-input-number>
        </el-form-item>
      </el-col>
    </el-row>

    <el-form-item label="Height - px" v-show="activeField.hasOwnProperty('fieldType') && activeField['fieldType'] == 'Carousel'">
      <el-input-number v-model="activeField.controlHeight" controls-position="right"></el-input-number>
    </el-form-item>

    <!-- Show only when 'isPlacehodlerVisible' key exist -->
    <el-form-item label="Placeholder" v-show="activeField.hasOwnProperty('isPlaceholderVisible') && activeField['isPlaceholderVisible'] == true">
      <el-row>
        <el-col :span="5">
          <el-switch v-model="activeField.isPlaceholderVisible"></el-switch>
        </el-col>
        <el-col :span="19 ">
          <el-input v-show="activeField.isPlaceholderVisible" v-model="activeField.placeholder">
            {{activeField.placeholder}}
          </el-input>
        </el-col>
      </el-row>
    </el-form-item>

    <el-row>
      <el-col :span="12">
        <el-form-item label="Required field?" v-show="activeField.hasOwnProperty('isRequired')">
          <el-switch v-model="activeField.isRequired"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Layout - Max value is 24" v-show="activeField.hasOwnProperty('span')">
          <el-input-number v-model="activeField.span" :min="1" :max="24" controls-position="right"></el-input-number>
        </el-form-item>
      </el-col>
    </el-row>

    <el-form-item label="Button text" v-show="activeField.hasOwnProperty('buttonText')">
      <el-input v-model="activeField.buttonText">
        {{activeField.buttonText}}
      </el-input>
    </el-form-item>

    <el-form-item label="Code view" v-show="activeField.hasOwnProperty('fieldText')">
      <el-input v-model="activeField.fieldText" type="textarea" :rows="10">
        {{activeField.fieldText}}
      </el-input>
    </el-form-item>


    <!-- <el-form-item label="Helpblock" v-show="activeField.hasOwnProperty('isHelpBlockVisible')">
      <el-switch v-model="activeField.isHelpBlockVisible"></el-switch>
      <el-input v-show="activeField.isHelpBlockVisible" v-model="activeField.helpBlockText">
        {{activeField.helpBlockText}}
      </el-input>
    </el-form-item> -->
    <el-row>
      <el-col :span="12">
        <el-form-item label="Active Text" v-show="activeField.hasOwnProperty('activeText')">
          <el-input v-model="activeField.activeText">{{activeField.activeText}}</el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Inactive Text" v-show="activeField.hasOwnProperty('inActiveText')">
          <el-input v-model="activeField.inActiveText">{{activeField.inActiveText}}</el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-form-item label="uploadURL" v-show="activeField.hasOwnProperty('uploadURL')">
      <el-input v-model="activeField.uploadURL">{{activeField.uploadURL}}</el-input>
    </el-form-item>

    <el-form-item label="Items" v-show="activeField.hasOwnProperty('items')">
      <li v-for="(item, index) in activeField.items" :key="index" class="properties__optionslist">
        <el-row :gutter="5">
          <el-col :span="20">
            <el-input v-model="item.url">{{item.url}}</el-input>
          </el-col>
          <el-col :span="4">
            <el-button @click="deleteOption(activeField.items, index)" v-show="activeField.items.length > 1">
              <i class="el-icon-error"></i>
            </el-button>
          </el-col>
        </el-row>
      </li>
      <el-button type="text" @click="addItem(activeField.items)">
        <i class="el-icon-plus"></i>
        Add more
      </el-button>
    </el-form-item>

    <el-form-item label="Options" v-if="!activeField.isFromUrl && activeField.options">
      <ul class="properties__optionsul">
        <li class="properties__optionslist">
          <el-row :gutter="5">
            <el-col :span="10">
              Label
            </el-col>
            <el-col :span="10">
              Value
            </el-col>
            <el-col :span="4">
            </el-col>
          </el-row>
        </li>
        <li v-for="(item, index) in activeField.options" :key="index" class="properties__optionslist">
          <el-row :gutter="5">
            <el-col :span="10">
              <el-input v-model="item.optionLabel">{{item.optionLabel}}</el-input>
            </el-col>
            <el-col :span="10">
              <el-input v-model="item.optionValue">{{item.optionValue}}</el-input>
            </el-col>
            <el-col :span="4">
              <el-button @click="deleteOption(activeField.options, index)" v-show="activeField.options.length > 1">
                <i class="el-icon-error"></i>
              </el-button>
            </el-col>
          </el-row>
        </li>
      </ul>
      <el-button type="text" @click="addOption(activeField.options)">
        <i class="el-icon-plus"></i>
        Add more
      </el-button>
    </el-form-item>

    <el-form-item label="Table Columns" v-show="activeField.fieldType === 'TableComponent'">
      <ul class="properties__optionsul">
        <li class="properties__optionslist">
          <el-row :gutter="5">
            <el-col :span="7">
              Prop
            </el-col>
            <el-col :span="7">
              Label
            </el-col>
            <el-col :span="7">
              Width
            </el-col>
            <el-col :span="3">
            </el-col>
          </el-row>
        </li>
        <li v-for="(column, index) in activeField.tableColumns" :key="index" class="properties__optionslist">
          <el-row :gutter="5">
            <el-col :span="7">
              <el-input v-model="column.prop">{{column.prop}}</el-input>
            </el-col>
            <el-col :span="7">
              <el-input v-model="column.label">{{column.label}}</el-input>
            </el-col>
            <el-col :span="7">
              <el-input @change="columnWidth" v-model="column.width">{{column.width}}</el-input>
            </el-col>
            <el-col :span="3">
              <el-button @click="deleteColumn(activeField.tableColumns, index, column.prop)" v-show="activeField.tableColumns.length > 1">
                <i class="el-icon-error"></i>
              </el-button>
            </el-col>
          </el-row>
        </li>
      </ul>
      <el-button type="text" @click="addColumn(activeField.tableColumns)">
        <i class="el-icon-plus"></i>
        Add more
      </el-button>
    </el-form-item>

    <el-form-item label="Html Content" v-show="activeField.hasOwnProperty('htmlContent')">
      <el-input :rows="10" type="textarea" v-model="activeField.htmlContent">{{activeField.htmlContent}}</el-input>
    </el-form-item>

    <el-button v-show="activeField.hasOwnProperty('advancedOptions')" @click="advancedPropsVisible = true" style="width: 100%;" type="success">
      Advanced Options
    </el-button>
    <el-dialog :close-on-click-modal="false" title="Advanced Options" :visible.sync="advancedPropsVisible">
      <el-form ref="OptionsForm"  :rules="dialogRules">
        <rating-advanced-props v-if="activeField.fieldType === 'Rating'"></rating-advanced-props>
        <text-input-advanced-props v-if="activeField.fieldType === 'TextInput'"></text-input-advanced-props>
        <html-advanced-props v-if="activeField.fieldType === 'HtmlComponent'"></html-advanced-props>
        <number-input-advanced-props v-if="activeField.fieldType === 'NumberInput'"></number-input-advanced-props>
        <select-list-advanced-props v-if="activeField.fieldType === 'SelectList'"></select-list-advanced-props>
        <options-advanced-props v-if="activeField.fieldType === 'RadioButton' || activeField.fieldType === 'Checkbox'"></options-advanced-props>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmForm">Confirm</el-button>
      </div>
    </el-dialog>

  </el-form>
</div>
</template>

<script>
import RatingAdvancedProps from './RatingAdvancedProps'
import TextInputAdvancedProps from './TextInputAdvancedProps.vue'
import HtmlAdvancedProps from './HtmlAdvancedProps.vue'
import NumberInputAdvancedProps from './NumberInputAdvancedProps.vue'
import OptionsAdvancedProps from './OptionsAdvancedProps.vue'
import SelectListAdvancedProps from './SelectListAdvancedProps.vue'

export default {
  name: 'Properties',
  components: {
    RatingAdvancedProps,
    TextInputAdvancedProps,
    HtmlAdvancedProps,
    NumberInputAdvancedProps,
    OptionsAdvancedProps,
    SelectListAdvancedProps
  },
  store: ['activeField'], // Get the form data from Home
  data() {
    return {
      labelPosition: 'top',
      fieldProperties: {},
      rules: {},
      advancedPropsVisible: false,
      dialogRules: {
        dataUrl: [
           { required: true, message: 'Please input url', trigger: 'change' }
        ]
      }
    }
  },
  mounted() {
    console.log("activeField ->", this.activeField)
    console.log("activeField.hasOwnProperty('span') ->", this.activeField.hasOwnProperty('span'))
  },
  methods: {
    deleteOption(option, index) {
      this.$delete(option, index)
    },
    addOption(option) {
      let count = option.length + 1;
      option.push({
        optionLabel: "Option Label " + count,
        optionValue: "Option " + count
      })
    },
    addItem(item) {
      item.push({
        url: ''
      });
    },
    deleteColumn(column, index, prop) {
      this.$delete(column, index)
      this.activeField.tableDatas.forEach(function(ele) {
        delete ele[prop];
      })
    },
    addColumn(tableColumns) {
      tableColumns.push({
        prop: '',
        label: '',
        width: 180
      });
    },
    columnWidth(value) {
      if (value && isNaN(value)) {
        this.$message.error('Column width should be a number!');
      }
    },
    confirmForm() {
      this.$refs['OptionsForm'].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
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
    padding: 0;
}
</style>
