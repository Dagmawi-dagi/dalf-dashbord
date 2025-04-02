import { defineStore } from "pinia";
// vue
import { ref } from "vue";

export const use_invoice_store= defineStore('invoice-store',()=>{
  
  // this array items have thier corespondant( same string ) urlRef on the "api-urls" Asset file
  const api_calls = ['getList']
  const invoice_store_apicalls_statusholder_obj = ref({})
  const invoices = ref([])

  const page = ref(1)
  const perPage = ref(10) 

  return {
    api_calls,
    invoice_store_apicalls_statusholder_obj,

    invoices,

    page,
    perPage,
  }

})