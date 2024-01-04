<script setup>
const route = useRoute();
const { q: searchText } = route.query;
const capitalize = ([firstLetter, ...restOfWord]) => firstLetter.toUpperCase() + restOfWord.join("")

const {data: articles} = await useAsyncData('search', () => queryContent('/').where({description: {$icontains: searchText}, isParent: true}).find()); 
</script>
<template>
    <div>
        <NuxtLink v-for="article in articles" :to="article._path">{{ article.title }}</NuxtLink>
    </div>
</template>