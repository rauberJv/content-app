<script setup>
useHead({
    title: 'The Book Of Terminology - Search Terminologies of Every Area',
    description: 'The Book Of Terminology provides a large content of terminologies in different areas.'
})
</script>
<template>
    <div class="flex flex-col items-center justify-center gap-4" style="height: 100vh">
        <h1 class="text-center mb-0">
            Welcome to Book of Terminology
        </h1>
        <ol class="list-decimal text-start text-xl list-inside">
            <li>
                Choose an area of your interest
            </li>
            <li>
                Select a category
            </li>
            <li>
                Enjoy terminologies
            </li>
        </ol>
        <NuxtLink to="/terminologies" class="bg-green-800/20 p-4 rounded-lg text-xl font-semibold hover:bg-green-800/50 transition duration-150 ease-in-out">Start your Journey!</NuxtLink>
    </div>
</template>