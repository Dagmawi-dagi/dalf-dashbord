<script setup>
// comps
import mainContainer from './components/main/main-container.vue';
import globalModal from './components/modal/modal_container.vue';
// composables
import { use_set_theme } from './composables/set-theme';
import { use_light_box } from './composables/light-box';
import { use_stores_refs } from './composables/stores-ref';
import { use_apicalls_from_store } from './composables/store-apicalls';
// stores
import { use_util_store } from './stores/util-store';
import { storeToRefs } from 'pinia';

const { global_vue_easy_lightbox,any_open_modal } = storeToRefs(use_util_store())

const { onhide,imgIndex } = use_light_box()
const { init_stores } = use_stores_refs()
const { apicall_from_store } = use_apicalls_from_store()

init_stores()
use_set_theme()
apicall_from_store('auth','auth-getProfile',{token: true, onSucSaveTheJsonOn : 'logged_in_user'})

</script>

<template>
  <mainContainer/>
  <globalModal v-if="any_open_modal.bool"/>
  <vue-easy-lightbox 
    :index="imgIndex" 
    @hide="onhide"
    :maxZoom="4" 
    :scroll-disabled="false" 
    :loop="true" 
    :visible="global_vue_easy_lightbox.display" 
    :imgs="global_vue_easy_lightbox.imgs" 
  />
</template>

<style lang="scss">
@import './style/base';
@import './style/global.scss';
@import './style/animations';
@import './style/variables';
@import './style/mixins';
@import './style/fonts.scss';
</style>
