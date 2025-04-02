//stores
import { use_user_store } from '../stores/user';
import { use_auth_store } from '../stores/auth';
import { use_pateint_store } from '../stores/pateint/pateint';
import { use_vacancy_store } from '../stores/HR/vacancy';
import { use_store_store } from '@/stores/store_/store';
import { use_department_store } from '@/stores/department';
import { use_employee_store } from '@/stores/employee/employee';
import { use_attendance_store } from '@/stores/employee/attendace';
import { use_blog_store } from '@/stores/compay_website/blog';
import { use_newsletter_store } from '@/stores/compay_website/newsletter';

export const use_stores_refs = ()=>{
  // stores reference 
  // you must add any newly created store after created
  const stores = {
    // user
    'auth': use_auth_store(),
    'user': use_user_store(),
    // pateint
    'pateint': use_pateint_store(),
    // store
    'store':use_store_store(),
    // employee
    'department': use_department_store(),
    'employee': use_employee_store(),
    'attendance' : use_attendance_store(),
    //HR
    'vacancy': use_vacancy_store(),
    // compnay website
    'blog': use_blog_store() ,
    'newsletter': use_newsletter_store()
  }
  
  // init the stores ApiCalls status holder reactive Object
  // should be inited on App.vue is started
  const init_stores = ()=>{
    // for every Api calls from any store we have an obj that stores the ApiCall State ( fetching,succ,err )
    // init every stores Apicalls Status holder
    for (const key in stores) {
      const store = stores[key]
      store['api_calls'].forEach(callId => {
        store[`${key}_store_apicalls_statusholder_obj`][callId] = {
          fetching: false,
          succ: false,
          err: null,
        }
      });
    }
  }

  // reset ApiCall Status holder Object when ever you want
  const reset_apicall_status_holder = (storeName,ApiCallHolder)=>{
    const store = stores[storeName]
    if(ApiCallHolder === 'all'){
      store.apiCalls.forEach(callId => {
        store[`${storeName}_store_apicalls_statusholder_obj`][callId] = {
          fetching: false,
          succ: false,
          err: null,
        }
      });
      return
    }
      store[`${storeName}_store_apicalls_statusholder_obj`][ApiCallHolder].fetching = false
      store[`${storeName}_store_apicalls_statusholder_obj`][ApiCallHolder].succ = false
      store[`${storeName}_store_apicalls_statusholder_obj`][ApiCallHolder].err = null
  }

  return{
    stores,
    init_stores,
    reset_apicall_status_holder
  }

}