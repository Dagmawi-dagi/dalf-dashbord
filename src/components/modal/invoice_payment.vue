<script setup>
// modal Id invoicepayment
import RInputOne from '../form/R-input-one.vue';
import RRadio from '../form/R-radio.vue';
import custom_btn_1 from '../Reusable/button/custom_btn_1.vue';
//vue 
import { ref } from 'vue'

defineProps({  
    invoice: Object
})

</script>

<template>
  <div class="inner_container">
        <RInputOne class="RInputOne" :id="'123442342134'"
        :disabled="true"
        :label="'issued_at_price'"
        :placeholder="'issued_at_price'"
        :pre-val="invoice.issued_at_price"
        :type="'text'"
        :validations="['rq']"
        :validate-on="'blur'"
        :onSubmitDyn="emergency_contact_onSubmitDyn"
        @inputVal="form.emergency_contact[i].name = $event"
        />
        <RRadio :id="'1234423421134'" class="RRadio"
        :inputname="'payment_type'"
        :radio-options="['cash','bank','deposit']"
        :default-radio="1"
        />
        <custom_btn_1 style="margin-top: 10px;display: inline-block;" class="custom_btn_1"
        :spinner="{color: '#fff',width: '1rem'}" 
        :loading_state="true" 
        @btn="createNew_emergency_contact"
        >
            pay
        </custom_btn_1>
    </div>
</template>
<style scoped lang="scss">
@import './style/invoice-payment.scss';
</style>