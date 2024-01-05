<script setup>
const route = useRoute();
const { q: searchText } = route.query;
const capitalize = ([firstLetter, ...restOfWord]) => firstLetter.toUpperCase() + restOfWord.join("")

const {data: articles} = await useAsyncData('search', () => queryContent('/').where({description: {$icontains: searchText}, isParent: true}).find()); 
</script>
<template>
    <div class="w-full lg:w-6/12 mx-auto py-4 px-4">
        <div class="flex flex-col items-start justify-center" v-if="articles.length > 0">
            <span class="font-semibold text-lg">Found [{{ articles.length }}] results</span>
            <div class="mt-4">
                <NuxtLink v-for="article in articles" :to="article._path" class="underline">{{ article.title }}</NuxtLink>
            </div>
        </div>
        <div v-else class="text-center">
            <p class="font-semibold text-lg">
                No articles found
            </p>
            <NuxtLink class="underline" to="/terminologies">Return to Search</NuxtLink>
        </div>
    </div>
</template>