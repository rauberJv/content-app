<script setup>
useHead({
    title: 'The Book Of Terminology - Search Terminologies of Every Area',
    description: 'The Book Of Terminology provides a large content of terminologies in different areas.'
})
</script>
<template>
    <div class="flex flex-col items-center justify-center gap-4 p-4">
        <h1 class="text-center mb-0">
            <em>The Book of Terminology</em>
        </h1>
        <p class="py-4 md:w-8/12 mx-auto lg:w-6/12">
            Welcome to <b>The Book of Terminology</b>, where we simplify terms from diverse fields like marketing, medicine, technology, and automotive mechanics. Our site is a treasure trove for understanding specialized language, making complex topics accessible and engaging. Dive in and enhance your knowledge with ease!
        </p>
        <NuxtLink to="/terminologies" class="bg-green-800/20 p-4 rounded-lg text-xl font-semibold hover:bg-green-800/50 transition duration-150 ease-in-out">Start your Journey!</NuxtLink>
    </div>
</template>