<script setup>
// assets
import sideBarNavs from '../../assets/side-bar-navs';
// comps
import accordion from '../Reusable/Accordion/accordion_.vue';
import compSpacer from '../Reusable/spacer_.vue';
import loggedInUser from '../user/logged-in-user.vue'
// composables
import { use_break_point } from '../../composables/break-point';
// stores
import { use_util_store } from '../../stores/util-store';
import { storeToRefs } from 'pinia';
//vue
import { ref } from 'vue'
const { side_bar_open } = storeToRefs( use_util_store())
const { tablet,mobilePhone } = use_break_point()
const  active_acc  = ref()
</script>

<template>
  <div class="container" :class="{ position:  tablet || mobilePhone , open: side_bar_open, close: !side_bar_open  }"  >
    <loggedInUser/>
    <compSpacer :space="'13px 0'" />
    <accordion v-for="(obj, i) in sideBarNavs" :key="i" 
      :id="`${i}`"
      :items='obj.routes' 
      :head="obj.role"
      :accordion_open="active_acc === obj.role"
      :border="true"
      :toggler_icon="false" 
      :sub_ref="'sub_routes'"
      :item_ref="'name'"
      @accActive="active_acc === obj.role ? active_acc = '' :  active_acc = $event" 
      @handleAccChoice="$router.push({name: $event.route_name})"
    />
  </div>

  <span class="sideNavToggler"  @click="side_bar_open = !side_bar_open"  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
      <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
    </svg>
  </span>

</template>

<style lang="scss" scoped>
@import './style/side-bar.scss';
</style>