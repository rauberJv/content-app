<script setup>
import term from '~/components/term.vue';
import CategoryList from '~/components/CategoryList.vue';
const components = {
  'term': term,
  'category-list': CategoryList
}
</script>
<template>
    <ContentDoc>
      <template v-slot="{ doc }">
        <div class="w-full bg-blue-50 mx-auto p-4">
          <NuxtLink :to="doc.parentLink" class="underline">Return to {{ doc.parent }}</NuxtLink>
        </div>
        <div class="w-full flex flex-col items-start justify-start mx-auto p-4">
          <h1 class="text-4xl">{{ doc.headline }}</h1>
          <p class="text-xl">
            {{ doc.description }}
          </p>
        </div>
        <section class="w-full mx-auto mt-2 px-4">
          <article>
            <ContentRendererMarkdown :value="doc" :components="components" />
          </article>
        </section>
      </template>
      <template #not-found>
        <div class="w-full bg-blue-50 mx-auto mt-4 p-4">
          <NuxtLink to="/terminologies" class="underline">Return to Search</NuxtLink>
        </div>
        <h1 class="text-center">Content Not Found</h1>
      </template>
      <template #empty v-slot="{doc}">
        <div class="w-full bg-blue-50 mx-auto mt-4 p-4">
          <NuxtLink :to="doc.parentLink" class="underline">Return to {{ doc.parent }}</NuxtLink>
        </div>
        <p>This article is under construction</p>
      </template>
    </ContentDoc>
</template>
