import { defineStore } from "pinia";
// vue
import { ref } from "vue";

export const use_attendance_store= defineStore('attendance-store',()=>{
  
  // this array items have thier corespondant( same string ) urlRef on the "api-urls" Asset file
  const api_calls = ['getList','create']
  const attendance_store_apicalls_statusholder_obj = ref({})

  const page = ref(1)
  const perPage = ref(10) 

  const attendances = ref([])

  return {
    api_calls,
    attendance_store_apicalls_statusholder_obj,

    page,
    perPage,

    attendances,
  }

})