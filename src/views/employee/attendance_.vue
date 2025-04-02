<script setup>
//assets
import { attendance_head } from '../../assets/data_list/list_heads';
// comps  
import dataList from '../../components/features/data list/data_list.vue';
import custom_btn_1 from '@/components/Reusable/button/custom_btn_1.vue';
//composable
import { use_apicalls_from_store } from '@/composables/store-apicalls';
// router
import { useRoute } from 'vue-router';
// store
import { use_attendance_store } from '../../stores/employee/attendace'
import { storeToRefs } from 'pinia';

const { attendances } =  storeToRefs(use_attendance_store());
const { apicall_from_store,apicall_from_store_loading } = use_apicalls_from_store();
const route = useRoute();

const filter_search  = ()=>{
  console.log('filter_search');
}
const util  = (evt)=>{
  console.log('util',evt);
}
const raw  = ()=>{
  console.log('raw');
}
const raw_item  = ()=>{
  console.log('raw_item');
}
// handling on reload based on the route queary parametart
apicall_from_store( 'attendance','attendance-getList',{ token: true, queryObj : { ...route.query }, onSucSaveTheJsonOn: 'attendances'})
</script>
<template>
    <dataList class="data_list"
      :data_loading="apicall_from_store_loading"

      :list_items="attendances"
      :with_list_filter_search="true"
      :with_list_head="true"
      :raws_container_margin="'100px 0 0 0'"

      :list_filter_search="{size:'lg',filter_bool: true,filterArray:[],search_bool:true}"
      :list_head="{size:'lg',heads:attendance_head}"
      :list_raw="{size:'lg',resize:true,heads:attendance_head,utils:['a','b','c']}"

      @filter="filter_search"  
      @search="filter_search"
      @util="util"
      @raw="raw"
      @raw_item="raw_item"
      >
      <template #list_filter_search>
        <h1 class="dataList_head" >attendace</h1>
        <custom_btn_1   class="custom_btn_1"
        :spinner="{color: '#fff',width: '1rem'}" 
        :loading_state="false" 
        :succMsg="false"
        @btn="$router.push({name:'create-user'})"
        > 
        create-user
        </custom_btn_1>
        <template v-for=" (val,key) in form" :key="key">
            <template  v-if="JSON.stringify(val).includes('validationFailed')" >
                <p v-if="val.validationFailed" style="color: tomato;">{{ val.validationFailed }}</p>
                <template v-for=" (v,k) in val" :key="k">
                    <p  style="color: tomato;" v-if="v.validationFailed">{{key}} {{ v.validationFailed }} </p>
                </template>
            </template>
        </template>
      </template>
      </dataList>
</template>
<style lang="scss" scoped>
@import '../../style/global.scss';
</style>