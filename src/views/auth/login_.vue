<script setup>
//comps
import R_input_one from '../../components/form/R-input-one.vue';
import RCheckbox from '@/components/form/R-checkbox.vue';
import custom_btn_1 from '@/components/Reusable/button/custom_btn_1.vue';
// composables
import { useUserInput } from '../../composables/user-input'
import { use_apicalls_from_store } from '../../composables/store-apicalls';

const { form,onSubmitDyn } = useUserInput(login)
const { apicall_from_store,apicall_from_store_response,apicall_from_store_loading } = use_apicalls_from_store()

function login (){ apicall_from_store('auth','auth-login',{ onSucSaveTheJsonOn: 'logged_in_user', data:form.value }) }

</script>

<template>
  <div class="login-page">
    <!-- Background dots layers -->
    <div class="dots-pattern"></div>

    <div class="login-container">
      <div class="login-card-wrapper">
        <div class="login-card">
          <div class="login-content">
            <h1>Login</h1>
            <!-- <img src="/src/assets/pictures/logo.PNG" alt="clinic logo" class="logo" loading="lazy" decoding="async"> -->
            <R_input_one class="input" 
            :id="`${1}`"
            :type="'string'"  
            :placeholder="'PhoneNumber'" 
            :validations="['rq']"
            :validateOn="'onSubmit'"
            :onSubmitDyn="onSubmitDyn"
            @inputVal="form.phoneNumber = $event"
            :pre-val="''"
            />
            <R_input_one class="input" 
            :id="`${2}`"
            :type="'password'"  
            :placeholder="'Password'" 
            :validations="['rq']" 
            :validateOn="'onSubmit'"
            :onSubmitDyn="onSubmitDyn"
            @inputVal="form.userPassword = $event "
            />
            <RCheckbox class="checkboxinput"
            :id="`${3}`"
            :inputname="'remember me'"
            :checkbox-options="['Remember me']"          
            :onSubmitDyn="onSubmitDyn"
            />

            <a href="#" class="forgot-password">Forgot your password?</a>
            
            <div style="text-align: center;">
              <custom_btn_1 :spinner="{color: '#fff',width: '1rem'}" 
              :loading_state="apicall_from_store_loading" 
              :err-msg-display="apicall_from_store_response.errMessage"
              @btn="onSubmitDyn = Math.random()"> 
              LOG IN 
              </custom_btn_1>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<style scoped lang="scss">
@import './style/login.scss';
</style>