<script setup>
//comps
import RInputOne from '@/components/form/R-input-one.vue';
import custom_btn_1 from '@/components/Reusable/button/custom_btn_1.vue';
//composbles
import { useUserInput } from '@/composables/user-input'
import { use_apicalls_from_store } from '@/composables/store-apicalls';

const { form, onSubmitDyn } = useUserInput(add_item_to_store);
const {apicall_from_store ,apicall_from_store_loading, apicall_from_store_response } = use_apicalls_from_store()
// submit function
function add_item_to_store  () { apicall_from_store('store','store-create',{  token: true, data: form.value})}
</script>
<template>
    <div class="route-container">
        <h4 class="head">add item to store</h4>
        <RInputOne :id="'065678'"  class="RInputOne" 
        :type="'text'" 
        :placeholder="'item_name'"   
        :label="'item name'"
        :onSubmitDyn="onSubmitDyn"
        :validations="['rq']"
        @inputVal="form.item_name = $event"
        />
        <RInputOne :id="'0656728'"  class="RInputOne" 
        :type="'text'" 
        :placeholder="'item type'"   
        :label="'item type'"
        :onSubmitDyn="onSubmitDyn"
        :validations="['rq']"
        @inputVal="form.item_type = $event"
        />
        <RInputOne :id="'0656728'"  class="RInputOne" 
        :type="'number'" 
        :placeholder="'quantity'"   
        :label="'quantity'"
        :onSubmitDyn="onSubmitDyn"
        :validations="['rq']"
        @inputVal="form.quantity = $event"
        />

        <custom_btn_1  
        :spinner="{color: '#fff',width: '1rem'}" 
        :loading_state="apicall_from_store_loading" 
        :succMsg="apicall_from_store_response.status === 'success'"
        :errMsgDisplay="apicall_from_store_response.errMessage"
        @btn="onSubmitDyn = Math.random()"
        > 
        add item to store 
        </custom_btn_1>
    </div>
</template>

<style scoped lang="scss"> 
@import './style/add-item.scss';
</style>