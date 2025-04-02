import { defineStore } from "pinia";
// vue
import { ref } from "vue";

export const use_credit_store= defineStore('credit-store',()=>{
  
  // this array items have thier corespondant( same string ) urlRef on the "api-urls" Asset file
  const api_calls = ['getList']
  const credit_store_apicalls_statusholder_obj = ref({})
  const credits = ref([])

  const page = ref(1)
  const perPage = ref(10) 

  return {
    api_calls,
    credit_store_apicalls_statusholder_obj,

    credits,

    page,
    perPage,
  }

})