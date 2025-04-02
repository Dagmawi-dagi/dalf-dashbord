<script setup>
//comps
import MazTabs from 'maz-ui/components/MazTabs'
import MazTabsBar from 'maz-ui/components/MazTabsBar'
import MazTabsContent from 'maz-ui/components/MazTabsContent'
import MazTabsContentItem from 'maz-ui/components/MazTabsContentItem'
import custom_btn_1 from '../Reusable/button/custom_btn_1.vue'
//vue
import { onMounted } from 'vue';

defineProps({
  employee: Object,
})

const tabs = ['personal info ','address info']
//on omunted the indicator for active tab is not being shown .... give it some width and height
//on omunted the indicator for active tab is not being shown .... give it some width and height
onMounted(()=>{
  const active_tab_indicator =  document.querySelectorAll('.m-tabs-bar__indicator')[0]
  const active_tab = document.querySelector('.--active.m-tabs-bar__item')
  active_tab_indicator.style.width = `${active_tab.clientWidth}px`;
  active_tab_indicator.style.height = `${active_tab.clientHeight}px`;
})

const a =  (evt)=>{
  console.log(evt);
}

</script>

<template>
  <MazTabs class="tabs-container">
    <MazTabsBar :items="tabs" class="tabs_bar"/>
    <MazTabsContent>
      <MazTabsContentItem :tab="1" class="maz-py-4" >
        <p class="info">first_name  <span class="info-content">{{ employee?.first_name }}</span></p>
        <p class="info">middle_name <span class="info-content">{{ employee?.middle_name }}</span></p>
        <p class="info">last_name <span class="info-content">{{ employee?.last_name }}</span></p>
        <p class="info">department <span class="info-content">{{ employee?.department }}</span></p>
        <p class="info">has_share <span class="info-content">{{ employee?.has_share }}</span></p>
        <p class="info">system_user <span class="info-content">{{ employee?.system_user }}</span></p>
        <p class="info">status <span class="info-content">{{ employee?.status }}</span></p>
      </MazTabsContentItem>
      <MazTabsContentItem :tab="2" class="maz-py-4">
        <p class="info">email <span class="info-content">{{ employee?.email }}</span></p>
        <p class="info">phone_number <span class="info-content">{{ employee?.phone_number }}</span></p>
      </MazTabsContentItem>
    </MazTabsContent>
  </MazTabs>
    <custom_btn_1  :spinner="{color: '#fff',width: '1rem'}" :loading_state="true" @btn="a($event)"> Edit </custom_btn_1>
</template>

<style scoped lang="scss">
@import './style/personal-data.scss';
</style>