<script setup>
//comps
import MazTabs from 'maz-ui/components/MazTabs';
import MazTabsBar from 'maz-ui/components/MazTabsBar';
import MazTabsContent from 'maz-ui/components/MazTabsContent';
import MazTabsContentItem from 'maz-ui/components/MazTabsContentItem';
import custom_btn_1 from '../../components/Reusable/button/custom_btn_1.vue';
import RInputOne from '@/components/form/R-input-one.vue';
import chooseFile from '@/components/form/choose-file.vue';
// composables
import { useUserInput } from '../../composables/user-input';
import { use_apicalls_from_store } from '../../composables/store-apicalls';
//vue
import { onMounted,ref } from 'vue';
// store
import { use_auth_store } from '../../stores/auth';
import { storeToRefs } from 'pinia';

const { logged_in_user } = storeToRefs( use_auth_store() )
const { form,onSubmitDyn } = useUserInput(update_profile)
const { apicall_from_store,apicall_from_store_response,apicall_from_store_loading } = use_apicalls_from_store()

const tabs = ['Account','PhoneNumber','Password']
//onMounted the indicator for active tab is not being shown .... give it some width and height
onMounted(()=>{
  const active_tab_indicator =  document.querySelector('.m-tabs-bar__indicator')
  const active_tab = document.querySelector('.--active.m-tabs-bar__item')
  active_tab_indicator.style.width = `${active_tab.clientWidth}px`;
  active_tab_indicator.style.height = `${active_tab.clientHeight}px`;
})

// update the profile based on the current active tab
const activetab = ref(1)
function update_profile(){
    console.log(activetab.value);
    // update the Account
    if (activetab.value === 1){
        const formdata =new FormData()
        formdata.append('userName',form.value.userName)
        formdata.append('email',form.value.email)
        if (form.value.avatar) formdata.append('avatar',form.value.avatar)
        apicall_from_store('auth','auth-updateMe',{token: true, onSucSaveTheJsonOn : 'logged_in_user',data:formdata})
    }
    // update the phoneNumber 
    else if (activetab.value === 2){ 
        apicall_from_store('auth','auth-updatePhoneNumber',{token: true, onSucSaveTheJsonOn : 'logged_in_user',
        data:{currentPassword: form.value.currentPassword,newPhoneNumber: form.value.newPhoneNumber}
        })
    }
    // update the password
    else if (activetab.value === 3){ 
        apicall_from_store('auth','auth-updatePassword',{token: true, onSucSaveTheJsonOn : 'logged_in_user',
        data:{currentPassword: form.value.currentPassword,newPassword: form.value.newPassword}
        })
    }
}

</script>

<template>
    <div class="container">
        <MazTabs class="tabs-container" @update:model-value="activetab = $event, form = {}">
            <MazTabsBar :items="tabs" class="tabs_bar" />
            <MazTabsContent class="tabs-content-container">
                <MazTabsContentItem :tab="1" class="maz-py-4">
                    <template v-if="activetab == 1" >
                        <RInputOne :id="'1'"  :type="'text'" :placeholder="'username'"   class="RInputOne" 
                        :label="'user Name'"
                        :preVal="logged_in_user.userName"
                        :onSubmitDyn="onSubmitDyn"
                        :validations="['rq']"
                        @inputVal="form.userName = $event"
                        />
                        <RInputOne :id="'2'" :type="'email'" :placeholder="'email'"  class="RInputOne" 
                        :label="'Email'"
                        :preVal="logged_in_user.email"
                        :onSubmitDyn="onSubmitDyn"
                        :validations="['rq']"
                        @inputVal="form.email = $event"
                        />
                        <chooseFile :id="'4'" :single="true" class="chooseFile"
                        :validations="['type=img']" 
                        :btntext="'profile photo'" 
                        @inputVal="form.avatar = $event"
                        />
                    </template>
                </MazTabsContentItem>

                <MazTabsContentItem :tab="2" class="maz-py-4">
                    <template v-if="activetab == 2">
                        <RInputOne :id="'3'" :type="'text'" :placeholder="'phonenumber'"  class="RInputOne" 
                        :label="'Phone Number'"
                        :preVal="logged_in_user.phoneNumber"
                        :onSubmitDyn="onSubmitDyn"
                        :validations="['rq']"
                        @inputVal="form.newPhoneNumber = $event"
                        />
                        <RInputOne :id="'5'" :type="'password'" :placeholder="'current password'"  class="RInputOne" 
                        :label="'current password'"
                        :onSubmitDyn="onSubmitDyn"
                        :validations="['rq']"
                        @inputVal="form.currentPassword = $event"
                        />
                    </template>
                </MazTabsContentItem>

                <MazTabsContentItem :tab="3" class="maz-py-4">
                    <template v-if="activetab == 3">
                        <RInputOne :id="'5'" :type="'password'" :placeholder="'current password'"  class="RInputOne" 
                        :label="'current password'"
                        :onSubmitDyn="onSubmitDyn"
                        :validations="['rq']"
                        @inputVal="form.currentPassword = $event"
                        />
                        <RInputOne :id="'6'" :type="'password'" :placeholder="'new password'"  class="RInputOne" 
                        :label="'new password'"
                        :onSubmitDyn="onSubmitDyn"
                        :validations="['rq']"
                        @inputVal="form.newPassword = $event"
                        />
                        <RInputOne :id="'6'" :type="'password'" :placeholder="'confirm new password'"  class="RInputOne" 
                        :label="'confirm new password'"
                        :onSubmitDyn="onSubmitDyn"
                        :validations="['rq',{same:{ ref: `'new password'`,val: form.newPassword  } }]"
                        />
                    </template>
                </MazTabsContentItem>
            </MazTabsContent>
        </MazTabs>

        <custom_btn_1  
        :spinner="{color: '#fff',width: '1rem'}" 
        :loading_state="apicall_from_store_loading" 
        :succMsg="apicall_from_store_response.status === 'success'"
        :errMsgDisplay="apicall_from_store_response.errMessage"
        @btn="onSubmitDyn = Math.random()"
        > 
        save changes 
        </custom_btn_1>

    </div>
</template>

<style scoped >
@import './style/user-profile.scss';
</style>