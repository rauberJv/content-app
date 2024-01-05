<script setup lang="ts">
export interface Category {
    key: string;
    value: string;
    link: string;
}
export interface Props {
    categories: Category[];
}
defineProps<Props>();
</script>
<template>
    <ul class="w-full">   
        <NuxtLink v-for="category in categories" :key="category.key" :to="category.link">
            <li class="bg-green-800/20 p-4 rounded-lg shadow-sm hover:bg-blue-50 text-xl transition duration-150 ease-in-out mt-4">
                <em class="font-semibold">
                    {{ category.key }}
                </em>
                <p>
                    {{ category.value }}
                </p>
            </li>
        </NuxtLink>
    </ul>
</template>