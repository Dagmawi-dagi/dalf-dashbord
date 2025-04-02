<script setup>
//comps
import create_user from '@/components/pages/user/create_user.vue';
import custom_btn_1 from '@/components/Reusable/button/custom_btn_1.vue';
// composables
import { useUserInput } from '@/composables/user-input';
import { use_apicalls_from_store } from '@/composables/store-apicalls';

const { onSubmitDyn,form } = useUserInput(createUser)
const { apicall_from_store,apicall_from_store_loading,apicall_from_store_response } = use_apicalls_from_store()

// api call handler
function createUser (){
    apicall_from_store('user','user-createUser',{ token: true,data: form.value})
}

</script>

<template>
    <div class="route-container">
        <create_user  :submit_dyn="onSubmitDyn"  @user="form = $event" />
        <custom_btn_1   
            :spinner="{color: '#fff',width: '1rem'}" 
            :loading_state="apicall_from_store_loading"
            :err-msg-display="apicall_from_store_response.errMessage" 
            @btn="onSubmitDyn = Math.random()"
        >
        Register  
        </custom_btn_1>
    </div>
</template>

<style scoped lang="scss">
@import './style/create-user.scss';
</style>