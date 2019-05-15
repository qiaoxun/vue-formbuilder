<template>
<div class="el-tabs__inner">
  <el-form :model="fieldProperties" :rules="rules" :label-position="labelPosition" ref="fieldProperties">
		<el-row>
			<el-col :span="12">
				<el-form-item label="Label Name" v-show="activeForm.hasOwnProperty('label')">
					<el-input v-model="activeForm.label">{{activeForm.label}}</el-input>
				</el-form-item>
			</el-col>
			<el-col :span="12">
				<el-form-item label="Label Width - px" v-show="activeForm.hasOwnProperty('label')">
					<el-input-number v-model="activeForm.labelWidth" :min="30" :max="1000" controls-position="right"></el-input-number>
				</el-form-item>
			</el-col>
		</el-row>

    <el-form-item label="Height - px" v-show="activeForm.hasOwnProperty('fieldType') && activeForm['fieldType'] == 'Carousel'">
      <el-input-number v-model="activeForm.controlHeight" controls-position="right"></el-input-number>
    </el-form-item>

    <!-- Show only when 'isPlacehodlerVisible' key exist -->
    <el-form-item label="Placeholder" v-show="activeForm.hasOwnProperty('isPlaceholderVisible')">
      <el-switch v-model="activeForm.isPlaceholderVisible"></el-switch>
      <el-input v-show="activeForm.isPlaceholderVisible" v-model="activeForm.placeholder">
        {{activeForm.placeholder}}
      </el-input>
    </el-form-item>

    <el-form-item label="Layout - Max value is 24" v-show="activeForm.hasOwnProperty('span')">
      <el-input-number v-model="activeForm.span" :min="1" :max="24" controls-position="right"></el-input-number>
    </el-form-item>

    <el-form-item label="Button text" v-show="activeForm.hasOwnProperty('buttonText')">
      <el-input v-model="activeForm.buttonText">
        {{activeForm.buttonText}}
      </el-input>
    </el-form-item>

    <el-form-item label="Code view" v-show="activeForm.hasOwnProperty('fieldText')">
      <el-input v-model="activeForm.fieldText" type="textarea" :rows="10">
        {{activeForm.fieldText}}
      </el-input>
    </el-form-item>

    <el-form-item label="Required field?" v-show="activeForm.hasOwnProperty('isRequired')">
      <el-switch v-model="activeForm.isRequired"></el-switch>
    </el-form-item>

    <!-- <el-form-item label="Helpblock" v-show="activeForm.hasOwnProperty('isHelpBlockVisible')">
      <el-switch v-model="activeForm.isHelpBlockVisible"></el-switch>
      <el-input v-show="activeForm.isHelpBlockVisible" v-model="activeForm.helpBlockText">
        {{activeForm.helpBlockText}}
      </el-input>
    </el-form-item> -->
    <el-row>
      <el-col :span="12">
        <el-form-item label="activeText" v-show="activeForm.hasOwnProperty('activeText')">
          <el-input v-model="activeForm.activeText">{{activeForm.activeText}}</el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="inActiveText" v-show="activeForm.hasOwnProperty('inActiveText')">
          <el-input v-model="activeForm.inActiveText">{{activeForm.inActiveText}}</el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-form-item label="uploadURL" v-show="activeForm.hasOwnProperty('uploadURL')">
      <el-input v-model="activeForm.uploadURL">{{activeForm.uploadURL}}</el-input>
    </el-form-item>

    <el-form-item label="Items" v-show="activeForm.hasOwnProperty('items')">
      <li v-for="(item, index) in activeForm.items" :key="index" class="properties__optionslist">
        <el-row :gutter="5">
          <el-col :span="20">
            <el-input v-model="item.url">{{item.url}}</el-input>
          </el-col>
          <el-col :span="4">
            <el-button v-show="activeForm.items.length > 1">
              <i class="el-icon-error"></i>
            </el-button>
          </el-col>
        </el-row>
      </li>
      <el-button type="text" @click="addItem(activeForm.items)">
        <i class="el-icon-plus"></i>
        Add more
      </el-button>
    </el-form-item>

    <el-form-item label="Options" v-show="activeForm.options">
      <ul class="properties__optionsul">
        <li class="properties__optionslist">
          <el-row :gutter="5">
            <el-col :span="10">
              Value
            </el-col>
            <el-col :span="10">
              Text
            </el-col>
            <el-col :span="4">
            </el-col>
          </el-row>
        </li>
        <li v-for="(item, index) in activeForm.options" :key="index" class="properties__optionslist">
          <el-row :gutter="5">
            <el-col :span="10">
              <el-input v-model="item.optionLabel">{{item.optionLabel}}</el-input>
            </el-col>
            <el-col :span="10">
              <el-input v-model="item.optionValue">{{item.optionValue}}</el-input>
            </el-col>
            <el-col :span="4">
              <el-button @click="deleteOption(activeForm.options, index)" v-show="activeForm.options.length > 1">
                <i class="el-icon-error"></i>
              </el-button>
            </el-col>
          </el-row>
        </li>
      </ul>
      <el-button type="text" @click="addOption(activeForm.options)">
        <i class="el-icon-plus"></i>
        Add more
      </el-button>
      <el-button type="text" @click="addOption(activeForm.options)">
        <i class="el-icon-plus"></i>
        From Ajax
      </el-button>
    </el-form-item>

    <el-form-item label="Table Columns" v-show="activeForm.fieldType === 'TableComponent'">
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
        <li v-for="(column, index) in activeForm.tableColumns" :key="index" class="properties__optionslist">
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
              <el-button @click="deleteColumn(activeForm.tableColumns, index, column.prop)" v-show="activeForm.tableColumns.length > 1">
                <i class="el-icon-error"></i>
              </el-button>
            </el-col>
          </el-row>
        </li>
      </ul>
      <el-button type="text" @click="addColumn(activeForm.tableColumns)">
        <i class="el-icon-plus"></i>
        Add more
      </el-button>
    </el-form-item>

  </el-form>
</div>
</template>

<script>
import axios_fetch from '@/api/index';

export default {
  name: 'Properties',
  store: ['activeForm'], // Get the form data from Home
  data() {
    return {
      labelPosition: 'top',
      fieldProperties: {},
      rules: {}
    }
  },
  mounted() {
    console.log("activeform11 ->", this.activeForm)
    console.log("activeForm.hasOwnProperty('span') ->", this.activeForm.hasOwnProperty('span'))
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
      item.push({url: ''});
    },
    deleteColumn(column, index, prop) {
      console.log('column', column)
      this.$delete(column, index)
    },
    addColumn(tableColumns) {
      tableColumns.push({
        prop: '',
        label: '',
        width: 180
      });
    },
    columnWidth(value) {
      if (value && isNaN(value)){
        this.$message.error('Column width should be a number!');
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
