<script setup>
const searchText = ref('');
const performSearch = () => {
    navigateTo(`/terminologies/search?q=${searchText.value}`);
}
const { data: parentArticles } = await useAsyncData("search", 
    () => queryContent('/')
        .where({isParent: {$eq: true}})
        .sort({headline: 1})
        .only(['headline', 'description','_path']).find());
</script>
<template>
    <div class="w-full min-h-screen flex flex-col items-stretch justify-start gap-4 p-4">
        <NuxtLink v-for="article in parentArticles" :to="article._path" 
            class="p-4 bg-green-800/20 rounded-md shadow-sm hover:bg-blue-50 text-xl transition duration-150 ease-in-out">
            <i>{{article.headline}}</i>
            <p class="">Click to discover more about {{ article.headline }}</p>
        </NuxtLink>
        <!-- <input type="text" id="searchText" class="border border-r-0 px-4 py-2 rounded-l-full w-10/12 md:w-8/12 lg:w-6/12" v-model="searchText" placeholder="e.g. Technology, Pharmacy,..">
        <button class="border border-l-0 px-4 py-2 rounded-r-full bg-blue-50 font-semibold" @click="performSearch()">
            GO!
        </button> -->
    </div>
</template>