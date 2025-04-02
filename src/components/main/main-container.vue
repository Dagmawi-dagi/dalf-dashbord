<script setup>
// comps
// import topNav_1 from '../Nav/top-nav_1.vue';
import topNav_2 from '../Nav/top-nav_2.vue';
import sideBar from '../Nav/side-bar.vue';
import scrollTop from '../Reusable/scroll-top.vue';
import spinner_ from '../Reusable/spinner_.vue';
// composables
import { use_break_point } from '../../composables/break-point';
// directives
import { vInfinitScroll } from '../../directives/infinit-scroll';
// router
import { RouterView } from 'vue-router';
// stores
import { use_util_store } from '../../stores/util-store';
import { storeToRefs } from 'pinia';
// vue
import { computed } from 'vue';
const { side_bar_open,router_view_container,route_resovled } = storeToRefs( use_util_store())
const { desktop,laptop,mobilePhone,tablet } = use_break_point()

const expand = computed(()=>{
  if( (desktop.value || laptop.value) && !side_bar_open.value  ) return true
  if( (mobilePhone.value || tablet.value) ) return true
  return false
})

</script>

<template>
  <template  v-if="$route.name === 'login' && route_resovled">
    <RouterView /> 
  </template>

  <template  v-else-if="$route.name != 'login' && route_resovled">
    <!-- <topNav_1/> -->
    <topNav_2/>
    <div class="main">
      <sideBar/>
      <!-- if the route implemets infinit scroll -->
      <div v-if="$route.meta.other_info?.infinit_scroll" class="router-view" :class="{ expand }"  ref="router_view_container" 
        v-infinit-scroll="{ 
          custom_el: $route.meta.other_info?.infinit_scroll.custom_el, 
          store_ref:  $route.meta.other_info?.infinit_scroll.store_ref, 
          url_ref: $route.meta.other_info?.infinit_scroll.url_ref, 
          onSucSaveTheJsonOn: $route.meta.other_info?.infinit_scroll.onSucSaveTheJsonOn, 
          distance: $route.meta.other_info?.infinit_scroll.distance,
          router: $router, // for some reason
          route: $route, // for some reason
        }"
        >
        <RouterView /> 
        <!-- spinner -->
        <spinner_ v-if="$route.meta.other_info?.infinit_scroll && vInfinitScroll.infinitScrollLoading.value" 
          style="margin: 1rem auto; margin-bottom: 1rem;" 
          :color="'var(--dark-red)'" 
          :width="'2.2rem'"   
        />
        <scrollTop :containerRef="router_view_container"  :from-top="50" />
      </div>

      <div v-else class="router-view" :class="{ expand }"  ref="router_view_container" >
        <RouterView /> 
        <scrollTop :containerRef="router_view_container"  :from-top="50" />
      </div>

    </div>
  </template>

</template>

<style scoped lang="scss">
  @import './style/main-container.scss';
</style>