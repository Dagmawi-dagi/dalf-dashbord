import { defineStore } from "pinia";
// vue
import { ref } from "vue";

export const use_deposite_store= defineStore('deposite-store',()=>{
  
  // this array items have thier corespondant( same string ) urlRef on the "api-urls" Asset file
  const api_calls = ['getList']
  const deposite_store_apicalls_statusholder_obj = ref({})
  const deposites = ref([])

  const page = ref(1)
  const perPage = ref(10) 

  return {
    api_calls,
    deposite_store_apicalls_statusholder_obj,

    deposites,

    page,
    perPage,
  }

})