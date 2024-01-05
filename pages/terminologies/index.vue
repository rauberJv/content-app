<script setup>
const { data: parentArticles } = await useAsyncData("search", 
    () => queryContent('/')
        .where({isParent: {$eq: true}})
        .sort({headline: 1})
        .only(['headline', 'description','_path']).find());
</script>
<template>
    <div class="w-full bg-blue-50 mx-auto p-4">
      <NuxtLink to="/" class="underline">Return to home</NuxtLink>
    </div>
    <div class="w-full flex flex-col items-stretch justify-start gap-4 p-4">
        <h1 class="m-0 text-4xl">
            Areas of Interest
        </h1>
        <p class="text-xl">
            Select an area of your interest below and dive into his different sub-areas and terminologies.
        </p>
        <NuxtLink v-for="article in parentArticles" :to="article._path" 
            class="p-4 bg-green-800/20 rounded-md shadow-sm hover:bg-blue-50 text-xl transition duration-150 ease-in-out">
            <i>{{article.headline}}</i>
            <p class="">Click to discover more about {{ article.headline }}</p>
        </NuxtLink>
    </div>
</template>