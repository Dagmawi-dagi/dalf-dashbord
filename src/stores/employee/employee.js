import { defineStore } from 'pinia';
//vue
import { ref } from 'vue';

export const use_employee_store = defineStore('employee-store',()=>{

  // this array items have thier corespondant( same string ) urlRef on the "apiUrls" Asset file
  const api_calls = ['getArchive','register','getList']
  const employee_store_apicalls_statusholder_obj = ref({})

  const employee_archive = ref(null)
  const employee = ref(null)
  const employees = ref(null)

  return{
    api_calls,
    employee_store_apicalls_statusholder_obj,

    employee_archive,
    employee,
    employees
  }
})