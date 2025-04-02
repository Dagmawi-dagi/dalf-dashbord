<script setup>
// <!-- here all the modal components we have for the app and render the conditionally using the util store -->
// modal comps
import modala from './modal-a.vue';
import invoice_payment from './invoice_payment.vue';
// store
import { use_util_store } from '@/stores/util-store';
import { storeToRefs } from 'pinia';

const { any_open_modal } = storeToRefs( use_util_store() )

</script>

<template>
  <div class="ModalContainer">
    <span class="close-modal" @click="any_open_modal.bool = false,any_open_modal.id = '',any_open_modal.AnythingTopass = null " >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </span>

    <modala v-if="any_open_modal.id === 'modala'"/>
    <invoice_payment v-if="any_open_modal.id === 'invoicepayment'"  :invoice="any_open_modal.AnythingTopass.invoice"/>
    
  </div>
</template>
<style scoped lang="scss">
@import './style/modal_container.scss';
</style>