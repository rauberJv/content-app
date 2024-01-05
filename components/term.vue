<script setup lang="ts">
export interface Term {
    key: string;
    value: string;
}
export interface Props {
    terms: Term[]
}
defineProps<Props>();
</script>
<template>
    <dl>
        <template v-for="(term, index) in terms" :key="term.key">
            <dt class="font-semibold" :class="{'mt-4': index > 0}">{{ term.key }}</dt>
            <dd class="ml-2">{{ term.value }}</dd>
        </template>
    </dl>
</template>