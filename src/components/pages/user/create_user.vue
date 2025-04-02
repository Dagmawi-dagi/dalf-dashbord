<script setup>
//comps
import RInputOne from '@/components/form/R-input-one.vue';
//vue
import { ref, watch } from 'vue';

const emits = defineEmits(['user'])
const props =  defineProps({ submit_dyn: Number})

const form = ref({})

const showErrors =  ()=>{
    const errMsgs = document.querySelectorAll('.info')
    if(errMsgs){
        errMsgs.forEach(el => {
            if(el.innerHTML.includes('err-msg'))  el.classList.add('err_space')
            else el.classList.remove('err_space')
        });
    }
    // emit the form to be added to the main form
    emits('user',form.value)
}

watch(()=> props.submit_dyn ,()=>{ showErrors() })
</script>

<template>
    <div>
        <h1 class="head">Create system User</h1>
        <p class="info"> userName *
            <RInputOne class="Rinput" :id="`2312312`"
                :placeholder="'userName'"
                :type="'text'"
                :validations="['rq']"
                :onSubmitDyn="submit_dyn"
                @inputVal="form.userName = $event"
            />
        </p>
        <p class="info"> email *
            <RInputOne class="Rinput" :id="`123421`"
                :placeholder="'email'"
                :type="'email'"
                :validations="['rq']"
                :onSubmitDyn="submit_dyn"
                @inputVal="form.email = $event"
            />
        </p>
        <p class="info"> phoneNumber *
            <RInputOne class="Rinput" :id="`99008`"
                :placeholder="'phoneNumber'"
                :type="'text'"
                :validations="['rq']"
                :onSubmitDyn="submit_dyn"
                @inputVal="form.phoneNumber = $event"
            />
        </p>
        <p class="info"> password *
            <RInputOne class="Rinput" :id="`98099809`"
                :placeholder="'password'"
                :type="'text'"
                :validations="['rq']"
                :pre-val="'12345678'"
                :onSubmitDyn="submit_dyn"
                @inputVal="form.userPassword = $event"
            />
        </p>
    </div>    
</template>

<style scoped lang="scss">
@import './style/create_user.scss';
</style>