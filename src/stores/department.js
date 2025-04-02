import { defineStore } from "pinia";
// vue
import { ref } from "vue";

export const use_department_store= defineStore('department-store',()=>{
  
  // this array items have thier corespondant( same string ) urlRef on the "api-urls" Asset file
  const api_calls = ['getList','create']
  const department_store_apicalls_statusholder_obj = ref({})

  const page = ref(1)
  const perPage = ref(10)

  const departments = ref([])

  return {
    api_calls,
    department_store_apicalls_statusholder_obj,

    page,
    perPage,

    departments,
  }

})