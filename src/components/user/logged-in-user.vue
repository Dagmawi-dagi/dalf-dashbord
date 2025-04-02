<script setup>
// comps
import theme_toggler from '../Reusable/theme_toggler.vue';
import { AvatarFallback, AvatarImage, AvatarRoot } from 'radix-vue';
//composables
import {serverUrl} from '../../util/server';
// store
import { use_auth_store } from '../../stores/auth';
import { storeToRefs } from 'pinia';

defineProps({ user: Object})
const { logged_in_user } = storeToRefs( use_auth_store() )
</script>

<template>
  <div class="userContainer" @click="$router.push({name: 'user-profile' })" >
    <AvatarRoot class="AvatarRoot">
      <AvatarImage class="AvatarImage" alt="avatar" :src="`${serverUrl}/${logged_in_user?.avatar.split('-')[0]}/users/${logged_in_user?.avatar}`"/>
      <AvatarFallback class="AvatarFallback" :delay-ms="600">
        <span style="text-transform: uppercase;"> {{ `${logged_in_user?.userName}`.split('')[0] +`${logged_in_user?.userName}`.split('')[1] }} </span> 
      </AvatarFallback>
    </AvatarRoot>
    <div class="user" >
      <span> employee name</span>
      <span> {{logged_in_user?.userName}} </span>
    </div>

    <!-- <theme_toggler/> -->
  </div>
</template>
<style scoped lang="scss">
  @import './style/logged-in-user.scss';
</style>