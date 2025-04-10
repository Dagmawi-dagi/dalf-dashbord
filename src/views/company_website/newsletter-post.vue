<script setup>
// libs
import axios from 'axios';
// composables
import { use_apicalls_from_store } from '../../composables/store-apicalls';

const { apicall_from_store,apicall_from_store_loading } = use_apicalls_from_store();
function postNewsletter (FD, form$){ 
  console.log(form$.data);
  apicall_from_store('newsletter','newsletter-create',{ onSucSaveTheJsonOn: 'newNewsletter', data:form$.data, token: true }) 
}
</script>

<template>
  <div class="blank-router-view-container">
    <div class="vueform-container">
      <Vueform :endpoint="postNewsletter">
        <StaticElement
          name="h3"
          tag="h3"
          content="create news letter post"
          align="center"
        />
        <TextElement
          name="subject"
          label="mail subject"
          info="subject"
          :rules="[
            'required',
          ]"
          size="sm"
        />
        <EditorElement
          name="content"
          label="content"
          info="mail content"
          :rules="[
            'required',
          ]"
          size="sm"
        />
        <TagsElement
          name="recipientsIds"
          :close-on-select="false"
          :search="true"
          label="recipients"
          input-type="search"
          autocomplete="off"
          :items="async function(query, input){
             const res = await axios.get('http://localhost:8888/api/newsletter/subscriber')
             let mappedData = res.data.data.map(({ id, name }) => ({ value: id, label: name }))
              // mappedData.unshift({ value: 'all', label: 'All' })
              return mappedData
          }"
          info="email Recipients"
          :rules="[
            'required',
          ]"
          size="sm"
        />
        <ButtonElement
          name="submit"
          button-label="send news letter"
          :submits="true"
          size="sm"
          align="center"
          :loading="apicall_from_store_loading"
        />
      </Vueform>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import './styles/newsletter-post.scss';
</style>