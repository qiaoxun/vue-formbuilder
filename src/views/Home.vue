<template>
<div>
  <el-container>
    <el-main class="el-main-left">
      <div class="wrapper--forms">
        <el-form :model="validateForm" ref="dynamic_form">
          <el-row>
            <el-button style="margin-bottom: 10px;" type="primary" @click="addSection">Add Section</el-button>
          </el-row>

          <el-row v-if="forms.length === 0">
            <div class="empty-section">Please add Sections</div>
          </el-row>

          <template v-for="(eachFormObj, eachFormIndex) in forms">
            <div :key="`div-${eachFormIndex}`" class="section-block">
              <div class="add-section">
                <el-row>
                  <el-col :span="18">
                    <el-input placeholder="Please input section title" v-model="eachFormObj.title" style="width: 100%;"></el-input>
                  </el-col>
                  <el-col :span="6">
                    <el-button type="danger" round style="float: right" @click="deleteSection(eachFormIndex, eachFormObj.title)">Delete Section</el-button>
                  </el-col>
                </el-row>
              </div>
              <div class="section-content">
                <el-row>
                  <draggable :list="eachFormObj.fields" class="dragArea" :group="{ name:'formbuilder', pull:false, put:true }" :sort="true" ghost-class="sortable__ghost">
                    <!-- The form elements starts (on the right) -->
                    <!-- <div> -->
                    <el-col v-for="(field, index) in eachFormObj.fields" :key="index" v-bind="field" :span="field.span" class="form__group" :class="{ 'is--active': field === activeField }">
                      <span class="form__selectedlabel">{{ field.fieldType }}</span>

                      <div @click="editElementProperties(field)">
                        <!-- <label class="form__label" v-model="form.label" v-show="form.hasOwnProperty('label')">{{ form.label }}</label> -->
                        <component :is="field.fieldType" :currentField="field" :eachFormIndex="eachFormIndex" class="form__field">
                        </component>
                      </div>

                      <!-- Actions list -->
                      <div class="form__actiongroup">
                        <el-button circle size="mini" icon="el-icon-rank" class="form__actionitem--move"></el-button>

                        <el-button-group class="form__actionlist">
                          <el-button size="mini" icon="el-icon-plus" @click="cloneElement(index, field, eachFormObj.fields)" v-show="!field.isUnique"></el-button>
                          <el-button size="mini" icon="el-icon-delete" @click="deleteElement(index, eachFormObj.fields)"></el-button>
                        </el-button-group>
                      </div>
                    </el-col>
                    <!-- </div> -->
                  </draggable>
                </el-row>
              </div>
            </div>
          </template>
          <el-form-item v-if="forms.length !== 0">
            <el-button type="primary" @click="submitForm('numberValidateForm')">Submit</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-main>

    <el-aside class="wrapper--sidebar" width="30%">
      <el-tabs type="border-card" v-model="activeTabForFields">
        <el-tab-pane name="elements" label="Elements">
          <elements />
        </el-tab-pane>

        <el-tab-pane name="properties" label="Properties">
          <properties v-show="Object.keys($store.activeField).length > 0"></properties>
        </el-tab-pane>
      </el-tabs>

      <!--{{ $store.activeField }}-->
    </el-aside>
  </el-container>
</div>
</template>

<script>
import {
  FormBuilder
} from '@/components/form_elements/formbuilder';

export default {
  name: 'Home',
  store: ['forms', 'validateForm', 'activeField', 'activeTabForFields'],
  data() {
    return {
      sortElementOptions: FormBuilder.$data.sortElementOptions
    };
  },
  mounted() {
    console.log("form ->", this.forms)
    console.log("activeField ->", this.activeField)
  },
  components: FormBuilder.$options.components,
  methods: {
    deleteElement(index, form) {
      FormBuilder.deleteElement(index, form)
    },
    cloneElement(index, field, form) {
      FormBuilder.cloneElement(index, field, form)
      console.log('forms', this.forms)
    },
    editElementProperties(field) {
      console.log("form ->", this.forms)
      console.log("activeField ->", this.activeField)
      FormBuilder.editElementProperties(field)
    },
    addSection() {
      const formObj = {
        title: "",
        fields: []
      };
      this.forms.push(formObj);
    },
    deleteSection(formIndex, formTitle) {
      this.$confirm(`Are you sure to delete the section ${formTitle}?`, 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          this.$delete(this.forms, formIndex);
        });
    },
    submitForm() {
      this.dealWithValidateForm();
      console.log("form ->", this.forms)
      console.log("validateForm ->", this.validateForm)
      this.$refs['dynamic_form'].validate((valid) => {
        console.log('valid', valid)
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    dealWithValidateForm() {
      var eachFormName = 'eachFormName';
      for (let i = 0; i < this.forms.length; i++) {
        const formObj = this.forms[i]
        // this.validateForm[eachFormName + i] = []
        for (let j = 0; j < formObj.fields.length; j++) {
          const field = formObj.fields[j]
          // this.validateForm[eachFormName + i].push({key: field.key, value: field.value})
          //this.validateForm[field.key] = field.value
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.empty-section {
  text-align: center;
  font-size: 40px;
  background: linear-gradient(to bottom,#FFF,#409EFF);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

.dragArea {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    min-height: 10px;
    height: calc(30vh);
    z-index: 2;
}

.el-main-left {
  height: calc(90vh);
}

.form__selectedlabel {
    display: none;
    background: #ECF5FF;
    padding: 3px 5px;
    color: black;
    font-size: 10px;
    position: absolute;
    top: -17px;
    right: 15px;
}

.form__actionitem--move {
    position: absolute;
    right: -14px;
    top: 50%;
    transform: translateY(-50%);
    visibility: hidden;

    &:active,
    &:focus,
    &:hover {
        border-color: #409EFF;
        background: #ECF5FF;
    }
}

.form__actionlist {
    position: absolute;
    margin-top: 10px;
    visibility: hidden;
    z-index: 3;
    right: 0;
    border-radius: 2px;
}

.form__group {
    margin-bottom: 25px;
    border: 1px solid transparent;
    position: relative;

    &:hover {
        border-color: #409EFF;

        .form__actionitem--move {
            visibility: visible;
        }
    }

    &.is--active {
        border-color: #409EFF;
        background: #ECF5FF;

        .form__actionlist {
            visibility: visible;
        }
        .form__selectedlabel {
            display: inline-block;
        }
    }
}

.section-block {
    border: 1px solid #ebebeb;
    border-radius: 3px;
}

.section-block .add-section {
    padding: 10px
}

.section-block .section-content {
    background-color: #fafafa;
    border-top: 1px solid #eaeefb;
}

</style>
