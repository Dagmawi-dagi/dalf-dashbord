<script setup>
// comps
import RInputOne from '../form/R-input-one.vue';
import custom_btn_1 from '../Reusable/button/custom_btn_1.vue';
// composables
import { useUserInput } from '@/composables/user-input'
import { use_apicalls_from_store } from '@/composables/store-apicalls';
// Router
import { useRouter } from 'vue-router';
// store
import { use_pateint_store } from '../../stores/pateint/pateint';
import { use_util_store } from '../../stores/util-store';
import { storeToRefs } from 'pinia';

const router = useRouter();
const { apicall_from_store,apicall_from_store_loading } = use_apicalls_from_store();
const { onSubmitDyn,form } = useUserInput(search);
const { router_view_container } = storeToRefs(use_util_store())
const { page, perPage } = storeToRefs(use_pateint_store());

function search() {
  page.value = 1 // every time we seach a new search param we reinit the page value to initial

  //  since any of the "form" values are not required remove the ones that Don't have any value
  Object.keys(form.value).forEach(key => { if (!form.value[key])  delete form.value[key] });
  // scroll to Top on fresh search
  router_view_container.value.scrollTop = 0;

  apicall_from_store('pateint','pateint-searchPateint',{ token: true,list: true,fresh:true, more: false,  
    queryObj : { page: page.value, perPage: perPage.value,...form.value }, // send the search form as query object
    onSucSaveTheJsonOn: 'pateints',
  })
  .then( () => { router.push({name: "pateints", query: { ...form.value }})})
}
</script>

<template>
  <nav>
    <div class="container">
      <div class="company"  @click="$router.push('/')" >
        <img src="/src/assets/pictures/clinic logo.png" class="logo">
        <span class="name">My Clinic</span>
      </div>
      <div class="search-container">
        <RInputOne :id="'100'" :type="'text'" :validations="[]" :onSubmitDyn="onSubmitDyn" @input-val="form.first_name = $event" :label="'FirstName'" :label-display="'inline'" :placeholder="'FirstName'"  class="input" />
        <RInputOne :id="'200'" :type="'text'" :validations="[]" :onSubmitDyn="onSubmitDyn" @input-val="form.middle_name = $event" :label="'MiddleName'" :label-display="'inline'" :placeholder="'MiddleName'"  class="input" />
        <RInputOne :id="'300'" :type="'text'" :validations="[]" :onSubmitDyn="onSubmitDyn" @input-val="form.last_name = $event" :label="'LastName'" :label-display="'inline'" :placeholder="'LastName'"  class="input" />
        <RInputOne :id="'400'" :type="'text'" :validations="[]" :onSubmitDyn="onSubmitDyn" @input-val="form.MRN = $event" :label="'MRN'" :label-display="'inline'" :placeholder="'MRN'"  class="input" />
        <RInputOne :id="'500'" :type="'text'" :validations="[]" :onSubmitDyn="onSubmitDyn" @input-val="form.age = $event" :label="'Age'" :label-display="'inline'" :placeholder="'Age'"  class="input" />
      </div>
      <div class="search-btn-container">
        <custom_btn_1  class="search-btn" 
        :spinner="{color: '#fff',width: '1rem'}" 
        :loading_state="apicall_from_store_loading"
        @btn="onSubmitDyn = Math.random()"
        > 
        search pateint 
        </custom_btn_1>
        <!-- <custom_btn_1  class="search-btn" 
        :spinner="{color: '#fff',width: '1rem'}" 
        :loading_state="apicall_from_store_loading"
        @btn="onSubmitDyn = Math.random()"
        > 
        search employee 
        </custom_btn_1> -->
      </div>
     
    </div>
  </nav>
</template>
<style scoped lang="scss">
@import './style/top-nav_1.scss';
</style>