import { defineStore } from 'pinia';
//vue
import { ref } from 'vue';

export const use_auth_store = defineStore('auth-store',()=>{
  // this array items have thier corespondant( same string ) urlRef on the "apiUrls" Asset file
  const api_calls = ['login','getProfile','updatePassword','updateMe','updatePhoneNumber']
  const auth_store_apicalls_statusholder_obj = ref({})
  // if we have token call getProfile Api and get set the response on  logged_in_user
  // we need this for rout page that need logged in user (token).... on response if the  logged_in_user is null meaning there is no logged in user
  const logged_in_user = ref(null)

  return{
    api_calls,
    auth_store_apicalls_statusholder_obj,

    logged_in_user,
  }
})