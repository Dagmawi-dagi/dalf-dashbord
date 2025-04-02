import { defineStore } from "pinia";
// vue
import { ref } from "vue";

export const use_user_store= defineStore('user-store',()=>{
  
  // this array items have thier corespondant( same string ) urlRef on the "api-urls" Asset file
  const api_calls = ['getList','createUser']
  const user_store_apicalls_statusholder_obj = ref({})

  const page = ref(1)
  const perPage = ref(10) 

  const user = ref(null)
  const users = ref([])

  return {
    api_calls,
    user_store_apicalls_statusholder_obj,

    page,
    perPage,

    user,
    users,
  }

})