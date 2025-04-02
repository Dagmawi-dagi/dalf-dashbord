<script setup>
import spacer_ from '../components/Reusable/spacer_.vue'
</script>

<template>
  <div style="text-align: center;">
    <h4> route for  <span style=" color:lightseagreen ">"{{ $route.fullPath }}"</span>  not found</h4>
    <spacer_ :m="'10px'" />
    <Router-link :to="{name: 'home'}" > back to home </Router-link>
  </div>
</template>
