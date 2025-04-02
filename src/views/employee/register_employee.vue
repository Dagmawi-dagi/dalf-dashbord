<script setup>
// assets
import { gender} from '@/assets/select-inputs';
// comps
import RInputOne from '@/components/form/R-input-one.vue';
import selectInput from '@/components/form/select-Input.vue';
import Rcheckbox from '@/components/form/R-checkbox.vue';
import custom_btn_1 from '@/components/Reusable/button/custom_btn_1.vue';
import MazTabs from 'maz-ui/components/MazTabs';
import MazTabsBar from 'maz-ui/components/MazTabsBar';
import MazTabsContent from 'maz-ui/components/MazTabsContent';
import MazTabsContentItem from 'maz-ui/components/MazTabsContentItem';
import { ComboboxAnchor, ComboboxContent, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxItemIndicator, ComboboxLabel, ComboboxRoot, ComboboxTrigger, ComboboxViewport, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText, TagsInputRoot } from 'radix-vue'
import { Icon } from '@iconify/vue';
import create_user from '@/components/pages/user/create_user.vue';
// composbles
import { use_apicalls_from_store } from '@/composables/store-apicalls';
import { useUserInput } from '@/composables/user-input';
// store
import { use_department_store } from '@/stores/department';
import { storeToRefs } from 'pinia';
// vue
import { ref,watch } from 'vue';

const { departments } = storeToRefs( use_department_store() )
const { onSubmitDyn,form } = useUserInput(register_employee)
const { apicall_from_store, apicall_from_store_loading, apicall_from_store_response } = use_apicalls_from_store()
form.value.department = []
form.value.sym_user = {}

// get the departments
apicall_from_store( 'department','department-getList',{ token: true, onSucSaveTheJsonOn: 'departments'})
// for the tabs
const activeTab = ref(null)
const tabs = ref(['personal info','address info','adminstration'])
// under the input we need space for displaying validation errors for the inputs
// but we only need the space  if we have error to be displayed
// so on submit btn seTimeout to 400 for the input validation to arrive and create the space we need to display them
const showErrors =  ()=>{
    setTimeout(() => {
        const errMsgs = document.querySelectorAll('.info')
        errMsgs.forEach(el => {
            if(el.innerHTML.includes('err-msg'))  el.classList.add('err_space')
            else  el.classList.remove('err_space')
        });
    }, 300);
}
// for the combobox taginput
const searchTerm = ref('')
watch(form.value.department, () => { searchTerm.value = '' }, { deep: true })
const openCombobox = ref(undefined)
function filterFunction(list, searchTerm) {
  return list.filter((department) => {
    return department.department_name.toLowerCase().includes(searchTerm.toLowerCase());
  });
}

// register_employee api call handler
function register_employee (){
    let data = {...form.value}
    // before calling api we need to strip the _id only from the department array
    data.department = data.department.map(d => { return  d._id  })
    apicall_from_store('employee','employee-register',{ token:true, data})
}

</script>

<template>
    <div class="route-container">
        <h4 class="head">register employee</h4>
        <MazTabs class="tabs-container"  @update:model-value="activeTab = $event">
            <MazTabsBar :items="tabs" class="tabs_bar"/>
            <MazTabsContent >
                <MazTabsContentItem :tab="1" class="maz-py-4" >
                    <p class="info">first_name *
                        <RInputOne class="Rinput" :id="'1123123'"
                            :placeholder="'first name'"
                            :type="'text'"
                            :onSubmitDyn="onSubmitDyn"
                            :validations="['rq']"
                            :validateOn="'onSubmit'"
                            @inputVal="form.first_name = $event"
                        />  
                    </p>
                    <p class="info">middle_name *
                        <RInputOne class="Rinput" :id="'31123123'"
                            :placeholder="'middle name'"
                            :type="'text'"
                            :onSubmitDyn="onSubmitDyn"
                            :validations="['rq']"
                            :validateOn="'onSubmit'"
                            @inputVal="form.middle_name = $event"
                        />
                    </p>
                    <p class="info">last_name *
                        <RInputOne class="Rinput" :id="'21123123'"
                            :placeholder="'last name'"
                            :type="'text'"
                            :onSubmitDyn="onSubmitDyn"
                            :validations="['rq']"
                            :validateOn="'onSubmit'"
                            @inputVal="form.last_name = $event"
                        />
                    </p>

                    <p class="info">gender *
                        <selectInput class="selectInput" :id="'51123123'"
                        :items="gender"
                        :item_ref="'name'"
                        :subItems="'asd'"
                        :placeholder="'gender'"
                        :onSubmitDyn="onSubmitDyn"
                        :validations="['rq']"
                        @inputVal="form.gender = $event.validationFailed ?  $event : JSON.parse($event).name"
                        />
                    </p>
                </MazTabsContentItem>
                <MazTabsContentItem :tab="2" class="maz-py-4">
                    <p class="info">phone_number *
                        <RInputOne class="Rinput" :id="'91123123'"
                            :placeholder="'phone_number'"
                            :type="'text'"
                            :onSubmitDyn="onSubmitDyn"
                            :validations="['rq']"
                            :validateOn="'onSubmit'"
                            @inputVal="form.phone_number = $event"
                        />
                    </p>
                    <p class="info">email *
                        <RInputOne class="Rinput" :id="'101123123'"
                            :placeholder="'email'"
                            :type="'text'"
                            :onSubmitDyn="onSubmitDyn"
                            :validations="['rq']"
                            :validateOn="'onSubmit'"
                            @inputVal="form.email = $event"
                        />
                    </p>
                </MazTabsContentItem>
                <MazTabsContentItem :tab="3" class="maz-py-4">
                    <ComboboxRoot :filter-function="filterFunction" v-model="form.department"  v-model:search-term="searchTerm" multiple :open="openCombobox">
                        <ComboboxAnchor class="ComboboxAnchor">
                            <TagsInputRoot  class="TagsInputRoot" :model-value="form.department">
                                <TagsInputItem class="TagsInputItem" v-for="(item,i) in form.department" :key="i" :value="item">
                                    <TagsInputItemText class="TagsInputItemText">{{ item.department_name }}</TagsInputItemText>
                                    <TagsInputItemDelete> <Icon icon="lucide:x" /> </TagsInputItemDelete>
                                </TagsInputItem>
                                <ComboboxInput as-child>
                                    <TagsInputInput  id="'9000'" class="TagsInputInput" placeholder="department(s)..." @keydown.enter.prevent/>
                                </ComboboxInput>
                            </TagsInputRoot>
                            <ComboboxTrigger>
                                <Icon icon="radix-icons:chevron-down"  class="ComboboxIcon"/>
                            </ComboboxTrigger>
                        </ComboboxAnchor>

                        <ComboboxContent  class="ComboboxContent">
                            <ComboboxViewport class="ComboboxViewport">
                                <ComboboxEmpty class="ComboboxEmpty">{{ `No Results Found With  "${searchTerm}"` }}</ComboboxEmpty>
                                <ComboboxGroup>
                                    <ComboboxLabel class="ComboboxLabel"></ComboboxLabel>
                                    <ComboboxItem class="ComboboxItem" v-for="(option, index) in departments" :key="index" :value="option">
                                        <ComboboxItemIndicator class="ComboboxItemIndicator"> <Icon icon="radix-icons:check" /> </ComboboxItemIndicator>
                                        <span> {{ option.department_name }} </span>
                                    </ComboboxItem>
                                </ComboboxGroup>
                            </ComboboxViewport>
                        </ComboboxContent>
                    </ComboboxRoot>

                    <Rcheckbox :id="'213231209'" class="Rcheckbox"
                    :checkbox-options="['system_user']"
                    @input-val="
                    form.system_user = $event.includes('system_user'), 
                    $event.includes('system_user') ? tabs.push('create_system user'):tabs.pop(),
                    $event.includes('system_user') ? '': form.user = {} 
                    "
                    />

                    <Rcheckbox :id="'21323129'" class="Rcheckbox"
                    :checkbox-options="['has_share']"
                    @input-val="form.has_share = $event.includes('has_share') ? true : false"
                    />
                </MazTabsContentItem>
                <MazTabsContentItem :tab="4" class="maz-py-4" v-if="form.system_user">
                        <create_user  :submit_dyn="onSubmitDyn"  @user="form.sym_user = $event" />
                </MazTabsContentItem>
            </MazTabsContent>
        </MazTabs>
        <custom_btn_1   
            :spinner="{color: '#fff',width: '1rem'}" 
            :loading_state="apicall_from_store_loading"
            :err-msg-display="apicall_from_store_response.errMessage" 
            @btn="onSubmitDyn = Math.random(),showErrors()"
        >
        Register  
        </custom_btn_1>
        <!-- <p>{{ extractValidationErrors(form) }}</p> -->
        <template v-for=" (val,key) in form" :key="key">
            <template  v-if="JSON.stringify(val).includes('validationFailed')" >
                <p v-if="val.validationFailed" style="color: tomato;">{{ val.validationFailed }}</p>
                <template v-for=" (v,k) in val" :key="k">
                    <p  style="color: tomato;" v-if="v.validationFailed">{{key}} {{ v.validationFailed }} </p>
                </template>
            </template>
        </template>
    </div>
</template>

<style scoped lang="scss"> 
@import './style/register_employee.scss';
</style>