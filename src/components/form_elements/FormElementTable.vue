<template>
<div>
  <el-card>
    <el-button size="small" type="primary" @click="handleAdd">Add</el-button>
    <el-button size="small" type="danger" @click="handleDelete">Delete</el-button>
    <el-table :data="currentField.tableDatas" style="width: 100%" highlight-current-row @row-dblclick="handleCurrentChange" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column v-for="(column, index) in currentField.tableColumns" :prop="column.prop" :label="column.label" :width="column.width" :key="index">
        <template slot-scope="scope">
          <el-input v-show="scope.row.edit" v-model="scope.row[column.prop]" size="small" />
          <div v-show="!scope.row.edit">
            {{ scope.row[column.prop] }}
          </div>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</div>
</template>

<script>
export default {
  name: 'TableComponent',
  props: ['currentField'],
  data() {
    return {
      multipleSelection: []
    }
  },
  methods: {
    handleCurrentChange(row) {
      console.log('row', row)
      row.edit = !row.edit;
    },
    handleDelete() {
      for (let i = 0; i < this.multipleSelection.length; i++) {
        let ele = this.multipleSelection[i];
        let index = this.currentField.tableDatas.findIndex(function(element) {
          return ele.id == element.id;
        });
        if (index >= 0)
          this.currentField.tableDatas.splice(index, 1);
      }
      this.multipleSelection = [];
    },
    handleAdd() {
      var columns = this.currentField.tableColumns;
      let newEle = {
        id: new Date().getTime(),
        edit: true
      }

      columns.forEach(function(ele) {
        newEle[ele.prop] = '';
      });

      this.currentField.tableDatas.push(newEle);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

  }
}
</script>
