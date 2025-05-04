<script setup>
// refs
import { blog_catagories } from '../../assets/other_refs'
// composables
import { use_apicalls_from_store } from '../../composables/store-apicalls';

const { apicall_from_store,apicall_from_store_loading } = use_apicalls_from_store()

function extractFirstWords(html, wordCount = 20) {
    // Create a temporary element to parse the HTML
    let tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    // Extract the text content (without tags)
    let text = tempElement.textContent || tempElement.innerText || "";
    // Split the text into words and get the first 'wordCount' words
    let words = text.trim().split(/\s+/).slice(0, wordCount);
    return words.join(" ");
}

function postNewBlogPost (FormData, form$){ 
    const formData = FormData
    formData.append('content_short', extractFirstWords(form$.data.content))
    apicall_from_store('blog','blog-create',{ onSucSaveTheJsonOn: 'newly_posted_blog', data:formData , token:true }) 
}

</script>

<template>
    <div class="blank-router-view-container">
        <div class="vueform-container">
            <Vueform :endpoint="postNewBlogPost" >
                <StaticElement
                name="h3"
                tag="h3"
                content="Create Blog Post"
                align="center"
                />
                <TextElement
                name="title"
                label="title"
                info="blog title"
                :rules="[
                    'required',
                ]"
                />
                <EditorElement
                name="content"
                label="content"
                info="blog content"
                :rules="[
                    'required',
                ]"
                />
                <TagsElement
                name="category"
                :close-on-select="false"
                :search="true"
                :items="blog_catagories"
                label="category"
                input-type="search"
                autocomplete="off"
                info="blog category"
                :create="true"
                :add-option-on="[
                    'enter',
                    ',',
                ]"
                :rules="[
                'required',
                ]"
                />
                <FileElement
                name="coverImg"
                label="coverImg"
                :urls="{}"
                info="blog cover Img"
                :drop="true"
                accept="image/*" 
                view="image"
                :clickable="false"
                :url="false"
                :upload-temp-endpoint="false" 
                :rules="[
                'required',
                ]"
                />
                <ButtonElement
                name="primaryButton"
                button-label="preview"
                :columns="{
                    container: 6,
                }"
                size="sm"
                />
                <ButtonElement
                name="post"
                button-label="post"
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
@import './styles/post-blog.scss';
</style>