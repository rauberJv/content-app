<script setup>
</script>
<template>
  <main>
    <ContentDoc>
      <template v-slot="{ doc }">
        <div class="w-full bg-blue-50 flex flex-col items-center justify-start lg:w-6/12 mx-auto">
          <h1 class="text-4xl">{{ doc.headline }}</h1>
          <p class="text-xl">
            {{ doc.description }}
          </p>
        </div>
        <section class="w-full lg:w-6/12 mx-auto mt-4">
          <article>
            <ContentRenderer :value="doc" />
          </article>
        </section>
        <div class="w-full bg-blue-50 lg:w-6/12 mx-auto mt-4">
          <NuxtLink :to="doc.parentLink">Return to {{ doc.parent }}</NuxtLink>
        </div>
      </template>
      <template #not-found>
        <h1>not found</h1>
        <NuxtLink to="/terminologies">Return</NuxtLink>
      </template>
      <template #empty>
        <p>This article is under construction</p>
        <NuxtLink to="/terminologies">Return</NuxtLink>
      </template>
    </ContentDoc>
  </main>
</template>
