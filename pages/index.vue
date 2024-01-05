<script setup>
useHead({
    title: 'The Book Of Terminology - Search Terminologies of Every Area',
    description: 'The Book Of Terminology provides a large content of terminologies in different areas.'
})
</script>
<template>
    <div class="flex flex-col items-center justify-center" style="height: 100vh">
        <h1 class="text-center">
            Welcome to Book of Terminology
        </h1>
        <NuxtLink to="/terminologies" class="bg-green-800/20 p-4 rounded-lg text-xl font-semibold hover:bg-green-800/50 transition duration-150 ease-in-out">Discover More!</NuxtLink>
    </div>
</template>