import { defineStore } from "pinia";
// vue
import { ref } from "vue";

export const use_newsletter_store= defineStore('newsletter-store',()=>{
  
  // this array items have thier corespondant( same string ) urlRef on the "api-urls" Asset file
  const api_calls = ['getList','create']
  const newsletter_store_apicalls_statusholder_obj = ref({})

  const page = ref(1)
  const perPage = ref(10) 

  const newsletters = ref([])
  const newNewsletter = ref()
  const subs = ref([])

  return {
    api_calls,
    newsletter_store_apicalls_statusholder_obj,

    page,
    perPage,

    newsletters,
    newNewsletter,
    subs
  }

})