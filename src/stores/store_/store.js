import { defineStore } from "pinia";
// vue
import { ref } from "vue";

export const use_store_store= defineStore('store-store',()=>{
  
  // this array items have thier corespondant( same string ) urlRef on the "api-urls" Asset file
  const api_calls = ['getList','create','requested_items']
  const store_store_apicalls_statusholder_obj = ref({})

  const page = ref(1)
  const perPage = ref(10) 

  const items = ref([])
  const requested_items = ref([])

  return {
    api_calls,
    store_store_apicalls_statusholder_obj,

    page,
    perPage,

    items,
    requested_items
  }

})