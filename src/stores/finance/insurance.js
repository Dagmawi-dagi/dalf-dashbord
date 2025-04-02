import { defineStore } from "pinia";
// vue
import { ref } from "vue";

export const use_insurance_store= defineStore('insurance-store',()=>{
  
  // this array items have thier corespondant( same string ) urlRef on the "api-urls" Asset file
  const api_calls = ['create','getList','get_insurance_invoices']
  const insurance_store_apicalls_statusholder_obj = ref({})
  const insurances = ref([])
  const insurance_invoices = ref([])

  const page = ref(1)
  const perPage = ref(10) 

  return {
    api_calls,
    insurance_store_apicalls_statusholder_obj,

    insurances,
    insurance_invoices,

    page,
    perPage,
  }

})