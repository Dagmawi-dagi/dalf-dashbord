<script setup>
//assets
import listHeads from '../../../assets/data_list/list_heads'
//comps
import data_list from '../../features/data list/data_list.vue';
import personalData from '../../employee/personal-data.vue';


defineProps({
  employee_archive: Object
})

const a  = (evt)=>{
  console.log(evt);
}

</script>
<template>
  <div class="employee-archive-container">

    <div class='info-container' style="margin-top: 0;">
      <h5  class="header" style="display: flex;">Employee personal data</h5>
      <personalData  :pateint="employee_archive?.employee" />
    </div>

    <div class='info-container'>
      <data_list class="data_list"
        :list_items="employee_archive?.attendance"
        :with_list_filter_search="true"
        :with_list_head="true"
        :raws_container_margin="'5px 0'"

        :list_filter_search="{size:'sm',filter_bool: false,filterArray:[],search_bool: false}"
        :list_head="{size:'sm',heads:listHeads.attendance_heads}"
        :list_raw="{size:'sm',resize:false,heads:listHeads.attendance_heads,utils:['a','b','c']}"

        @filter="a"  
        @search="a"
        @util="a"
        @raw="a"
        @raw_item="a"
      >
        <template #list_filter_search>
          <h5  class="header">attendance</h5>
        </template>
      </data_list>
    </div>


    <div class='info-container'>
      <data_list class="data_list"
        :list_items="employee_archive?.contract"
        :with_list_filter_search="true"
        :with_list_head="true"
        :raws_container_margin="'5px 0'"

        :list_filter_search="{size:'sm',filter_bool: false,filterArray:[],search_bool: false}"
        :list_head="{size:'sm',heads:listHeads.attendance_heads}"
        :list_raw="{size:'sm',resize:false,heads:listHeads.attendance_heads,utils:['a','b','c']}"

        @filter="a"  
        @search="a"
        @util="a"
        @raw="a"
        @raw_item="a"
      >
        <template #list_filter_search>
          <h5  class="header">contract</h5>
        </template>
      </data_list>
    </div>


    <div class='info-container'>
      <data_list class="data_list"
        :list_items="employee_archive?.disciplinary_record"
        :with_list_filter_search="true"
        :with_list_head="true"
        :raws_container_margin="'5px 0'"

        :list_filter_search="{size:'sm',filter_bool: false,filterArray:[],search_bool: false}"
        :list_head="{size:'sm',heads:listHeads.disciplinary_record_heads}"
        :list_raw="{size:'sm',resize:false,heads:listHeads.disciplinary_record_heads,utils:['a','b','c']}"

        @filter="a"  
        @search="a"
        @util="a"
        @raw="a"
        @raw_item="a"
      >
        <template #list_filter_search>
          <h5  class="header">disciplinary record</h5>
        </template>
      </data_list>
    </div>

    <div class='info-container'>
      <data_list class="data_list"
        :list_items="employee_archive?.payed_share"
        :with_list_filter_search="true"
        :with_list_head="true"
        :raws_container_margin="'5px 0'"

        :list_filter_search="{size:'sm',filter_bool: false,filterArray:[],search_bool: false}"
        :list_head="{size:'sm',heads:listHeads.payed_share_heads}"
        :list_raw="{size:'sm',resize:false,heads:listHeads.payed_share_heads,utils:['a','b','c']}"

        @filter="a"  
        @search="a"
        @util="a"
        @raw="a"
        @raw_item="a"
      >
        <template #list_filter_search>
          <h5  class="header">payed shares</h5>
        </template>
      </data_list>
    </div>

    <div class='info-container'>
      <data_list class="data_list"
        :list_items="employee_archive?.rest_leave"
        :with_list_filter_search="true"
        :with_list_head="true"
        :raws_container_margin="'5px 0'"

        :list_filter_search="{size:'sm',filter_bool: false,filterArray:[],search_bool: false}"
        :list_head="{size:'sm',heads:listHeads.rest_leave_heads}"
        :list_raw="{size:'sm',resize:false,heads:listHeads.rest_leave_heads,utils:['a','b','c']}"

        @filter="a"  
        @search="a"
        @util="a"
        @raw="a"
        @raw_item="a"
      >
        <template #list_filter_search>
          <h5  class="header">rest leave</h5>
        </template>
      </data_list>
    </div>

    <div class='info-container'>
      <data_list class="data_list"
        :list_items="{}"
        :with_list_filter_search="true"
        :with_list_head="true"
        :raws_container_margin="'5px 0'"

        :list_filter_search="{size:'sm',filter_bool: false,filterArray:[],search_bool: false}"
        :list_head="{size:'sm',heads:listHeads.skill_heads}"
        :list_raw="{size:'sm',resize:false,heads:listHeads.skill_heads,utils:['a','b','c']}"

        @filter="a"  
        @search="a"
        @util="a"
        @raw="a"
        @raw_item="a"
      >
        <template #list_filter_search>
          <h5  class="header">skill</h5>
        </template>
      </data_list>
    </div>


  </div>
</template>

<style scoped lang="scss">
@import './style/employee_archive.scss';
</style>