<script setup>
//assets
import { store_items_head } from '../../assets/data_list/list_heads';
// comps  
import dataList from '../../components/features/data list/data_list.vue';
//composable
import { use_apicalls_from_store } from '@/composables/store-apicalls';
// router
import { useRoute } from 'vue-router';
// store
import { use_store_store } from '../../stores/store_/store'
import { storeToRefs } from 'pinia';

const { requested_items } =  storeToRefs(use_store_store());
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

apicall_from_store( 'store','store-requested_items',{ token: true, queryObj : { ...route.query }, onSucSaveTheJsonOn: 'requested_items'})

</script>
<template>
    <dataList class="data_list"
      :data_loading="apicall_from_store_loading"

      :list_items="requested_items"
      :with_list_filter_search="true"
      :with_list_head="true"
      :raws_container_margin="'100px 0 0 0'"

      :list_filter_search="{size:'lg',filter_bool: true,filterArray:[],search_bool:false}"
      :list_head="{size:'lg',heads:store_items_head}"
      :list_raw="{size:'lg',resize:true,heads:store_items_head,utils:['a','b','c']}"

      @filter="filter_search"  
      @search="filter_search"
      @util="util"
      @raw="raw"
      @raw_item="raw_item"
      >
      <template #list_filter_search>
        <h1 class="dataList_head">store items</h1>
      </template>
      </dataList>
</template>
<style lang="scss" scoped>
@import '../../style/global.scss';
</style>