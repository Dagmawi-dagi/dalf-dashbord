import { defineStore } from 'pinia';
//vue
import { ref } from 'vue';

export const use_pateint_store = defineStore('pateint-store',()=>{

  // this array items have thier corespondant( same string ) urlRef on the "apiUrls" Asset file
  const api_calls = ['getArchive','searchPateint','registerPateint']
  const pateint_store_apicalls_statusholder_obj = ref({})

  const pateint_archive = ref(null)
  const pateints = ref([])
  const registered_pateint = ref({})

  const page = ref(1)
  const perPage = ref(10) 

  return{
    api_calls,
    pateint_store_apicalls_statusholder_obj,

    page,
    perPage,

    pateints,
    pateint_archive,
    registered_pateint,
  }
})