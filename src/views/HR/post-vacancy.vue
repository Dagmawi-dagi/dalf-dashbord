<script setup>
// composables
import { use_apicalls_from_store } from '../../composables/store-apicalls';

const { apicall_from_store,apicall_from_store_loading } = use_apicalls_from_store()

function postNewVacancy (FormData, form$){ 
    apicall_from_store('vacancy','vacancy-create',{ onSucSaveTheJsonOn: 'newVacancy', data:form$.data , token:true}) 
}

</script>

<template>
    <div class="blank-router-view-container">
        <div class="vueform-container">
            <Vueform :endpoint="postNewVacancy">
                <StaticElement
                name="h3"
                tag="h3"
                content="create vacancy post"
                align="center"
                />
                <StaticElement
                name="p"
                tag="p"
                content="<div>position name</div>"
                :columns="{
                    container: 4,
                }"
                />
                <TextElement
                name="position_name"
                :columns="{
                    container: 8,
                }"
                :rules="[
                    'required',
                ]"
                />
                <StaticElement
                name="p_1"
                tag="p"
                content="<div>company</div>"
                :columns="{
                    container: 4,
                }"
                />
                <TextElement
                name="company"
                :columns="{
                    container: 8,
                }"
                :rules="[
                    'required',
                ]"
                />
                <StaticElement
                name="p_3"
                tag="p"
                content="<div>salary</div>"
                :columns="{
                    container: 4,
                }"
                />
                <TextElement
                name="salary"
                :columns="{
                    container: 8,
                }"
                :rules="[
                    'required',
                ]"
                />
                <StaticElement
                name="p_2"
                tag="p"
                content="<div>location</div>"
                :columns="{
                    container: 4,
                }"
                />
                <TagsElement
                name="locations"
                :close-on-select="false"
                :search="true"
                :items="[
                    {
                    value: 'mekelle',
                    label: 'mekelle',
                    },
                    {
                    value: 'quiha',
                    label: 'quiha',
                    },
                    {
                    value: 'ayder',
                    label: 'ayder',
                    },
                ]"
                input-type="search"
                autocomplete="off"
                :columns="{
                    container: 8,
                }"
                :create="true"
                :add-option-on="[
                    'enter',
                    ',',
                ]"
                :rules="[
                    'required',
                ]"
                />
                <TextareaElement
                name="description"
                label="description"
                :rules="[
                    'required',
                ]"
                />
                <EditorElement
                name="requirements"
                label="requirements"
                :rules="[
                    'required',
                ]"
                />
                <DateElement
                name="deadline"
                label="deadline"
                size="sm"
                :rules="[
                    'required',
                ]"
                />
                <ButtonElement
                name="preview"
                button-label="preview vacancy"
                align="left"
                size="sm"
                :columns="{
                    container: 6,
                }"
                />
                <ButtonElement
                name="post"
                button-label="post vacancy"
                :submits="true"
                align="right"
                size="sm"
                :columns="{
                    container: 6,
                }"
                :loading="apicall_from_store_loading"
                />
            </Vueform>
        </div>
    </div>
</template>
<style scoped lang="scss">
@import './styles/post-vacancy.scss';
</style>