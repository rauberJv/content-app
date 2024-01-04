<script setup>
const searchText = ref('');
const performSearch = () => {
    navigateTo(`/terminologies/search?q=${searchText.value}`);
}
</script>
<template>
    <div class="w-full min-h-screen flex items-center justify-center">
        <input type="text" id="searchText" class="border border-r-0 px-4 py-2 rounded-l-full w-10/12 md:w-8/12 lg:w-6/12" v-model="searchText" placeholder="e.g. Technology, Pharmacy,..">
        <button class="border border-l-0 px-4 py-2 rounded-r-full bg-blue-50 font-semibold" @click="performSearch()">
            GO!
        </button>
    </div>
    <ContentQuery
        path="/terminologies"
        :only="['title']"
        v-slot="{data}"
        >
    <pre>{{ data }}</pre>
    </ContentQuery>
</template>