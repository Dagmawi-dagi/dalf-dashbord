<script setup>
// comps
import themeToggle from '../Reusable/theme_toggler.vue';

// stores
import { use_util_store } from '../../stores/util-store';
import { storeToRefs } from 'pinia';
// vue
const { dark_theme }  = storeToRefs( use_util_store() )
</script>

<template>
  <nav>
    <div class="container">
      <img @click="$router.push('/')" src="../../assets/pictures/logo.PNG" alt="logo" v-if="!dark_theme">
      <img @click="$router.push('/')" src="../../assets/pictures/logo.PNG" alt="logo" v-if="dark_theme" >

      <themeToggle/>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import './style/top-nav_2.scss';
</style>