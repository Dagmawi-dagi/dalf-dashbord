<script setup>
// comps
import RInputOne from '@/components/form/R-input-one.vue';
import custom_btn_1 from '@/components/Reusable/button/custom_btn_1.vue';
import selectInput from '@/components/form/select-Input.vue';
// composavles
import { useUserInput } from '@/composables/user-input';
import { use_apicalls_from_store } from '@/composables/store-apicalls';
//store
import { use_department_store } from '@/stores/department';
import { storeToRefs } from 'pinia';

const { onSubmitDyn,form } = useUserInput(create_department);
const { apicall_from_store,apicall_from_store_loading,apicall_from_store_response } = use_apicalls_from_store();
const { departments } = storeToRefs(use_department_store())

apicall_from_store( 'department','department-getList',{ token: true, onSucSaveTheJsonOn: 'departments'})

function create_department() {
    apicall_from_store('department','department-create',{token: true, data: form.value})
}   

</script>
<template>
    <div class="route-container">
        <h4 class="head">create-department</h4>
        <RInputOne :id="'06567218'" class="RInputOne" 
        :type="'text'" 
        :placeholder="'department name'"   
        :label="'department name'"
        :onSubmitDyn="onSubmitDyn"
        :validations="['rq']"
        @inputVal="form.department_name = $event"
        />
        <selectInput class="selectInput" :id="'114980'"
        :items="departments"
        :item_ref="'department_name'"
        :subItems="'asd'"
        :placeholder="'parent_reference'"
        :onSubmitDyn="onSubmitDyn"
        :validations="[]"
        @inputVal="form.parent_reference = $event ? JSON.parse($event)._id  : $event "
        />
        <custom_btn_1  
        :spinner="{color: '#fff',width: '1rem'}" 
        :loading_state="apicall_from_store_loading" 
        :err-msg-display="apicall_from_store_response.errMessage"
        @btn="onSubmitDyn = Math.random()"
        >
        create department 
        </custom_btn_1>

    </div>
</template>

<style scoped lang="scss">
@import './style/create-department.scss';
</style>