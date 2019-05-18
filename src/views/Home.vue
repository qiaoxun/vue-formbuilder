<template>
<div>
  <el-container>
    <el-main>
      <div class="wrapper--forms">
        <el-form>
          <el-row>
            <draggable :list="forms" class="dragArea" :group="{ name:'formbuilder', pull:false, put:true }" :sort="true" ghost-class="sortable__ghost">
              <!-- The form elements starts (on the right) -->
              <!-- <div> -->
              <el-col v-for="(form, index) in forms" :key="index" v-bind="form" :span="form.span" class="form__group" :class="{ 'is--active': form === activeForm }">
                <span class="form__selectedlabel">{{ form.fieldType }}</span>

                <div @click="editElementProperties(form)">
                  <!-- <label class="form__label" v-model="form.label" v-show="form.hasOwnProperty('label')">{{ form.label }}</label> -->
                  <component :is="form.fieldType" :currentField="form" class="form__field">
                  </component>
                </div>

                <!-- Actions list -->
                <div class="form__actiongroup">
                  <el-button circle size="mini" icon="el-icon-rank" class="form__actionitem--move"></el-button>

                  <el-button-group class="form__actionlist">
                    <el-button size="mini" icon="el-icon-plus" @click="cloneElement(index, form)" v-show="!form.isUnique"></el-button>
                    <el-button size="mini" icon="el-icon-delete" @click="deleteElement(index)"></el-button>
                  </el-button-group>
                </div>
              </el-col>
              <!-- </div> -->
            </draggable>
          </el-row>
        </el-form>
      </div>

    </el-main>

    <el-aside class="wrapper--sidebar" width="30%">
      <el-tabs type="border-card" v-model="activeTabForFields">
        <el-tab-pane name="elements" label="Elements">
          <elements />
        </el-tab-pane>

        <el-tab-pane name="properties" label="Properties">
          <properties v-show="Object.keys($store.activeForm).length > 0"></properties>
        </el-tab-pane>
      </el-tabs>

      <!--{{ $store.activeForm }}-->
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
  store: ['forms', 'activeForm', 'activeTabForFields'],
  data() {
    return {
      sortElementOptions: FormBuilder.$data.sortElementOptions
    };
  },
  mounted() {
    console.log("form ->", this.forms)
    console.log("activeform ->", this.activeForm)
  },
  components: FormBuilder.$options.components,
  methods: {
    deleteElement(index) {
      FormBuilder.deleteElement(index)
    },
    cloneElement(index, form) {
      FormBuilder.cloneElement(index, form)
    },
    editElementProperties(form) {
      FormBuilder.editElementProperties(form)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dragArea {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    min-height: 10px;
    height: calc(60vh);
    z-index: 2;
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
</style>
