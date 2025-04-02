<script setup>
//assets
import { newsletter_head } from '../../assets/data_list/list_heads';
// comps  
import dataList from '../../components/features/data list/data_list.vue';
import custom_btn_1 from '@/components/Reusable/button/custom_btn_1.vue';
//composable
import { use_apicalls_from_store } from '@/composables/store-apicalls';
// router
import { useRoute } from 'vue-router';
// store
import { use_newsletter_store } from '../../stores/compay_website/newsletter'
import { storeToRefs } from 'pinia';

const { newsletters } =  storeToRefs(use_newsletter_store());
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

// on create and reload
apicall_from_store( 'newsletter','newsletter-getList',{ token: true, queryObj : { ...route.query }, onSucSaveTheJsonOn: 'newsletters'})

</script>
<template>
    <dataList class="data_list"
      :data_loading="apicall_from_store_loading"

      :list_items="newsletters"
      :with_list_filter_search="true"
      :with_list_head="true"
      :raws_container_margin="'100px 0 0 0'"

      :list_filter_search="{size:'lg',filter_bool: true,filterArray:[],search_bool:true}"
      :list_head="{size:'lg',heads:newsletter_head}"
      :list_raw="{size:'lg',resize:true,heads:newsletter_head,utils:['a','b','c']}"

      @filter="filter_search"  
      @search="filter_search"
      @util="util"
      @raw="raw"
      @raw_item="raw_item"
      >
      <template #list_filter_search>
        <h1 class="dataList_head">newsletters</h1>

        <custom_btn_1   
        :spinner="{color: '#fff',width: '1rem'}" 
        :loading_state="false" 
        :succMsg="false"
        @btn="$router.push({name:'post-newsletter'})">
        post
        </custom_btn_1>
      </template>
      </dataList>
</template>
<style lang="scss" scoped>
@import '../../style/global.scss';

:deep(.btn){
  margin-bottom: 0;
  padding: 2px 10px;
  font-size: 96%;
  padding: 2px 7px;
  border-radius: 3px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
}

</style>