<template>
    <article class="table-item ts-box">
        <section class="title ts-content is-dense">
            <h2>{{ book }}</h2>
        </section>
        <section class="ts-content">
            {{ isbn }}
        </section>
    </article>
</template>

<script setup>
import { defineProps } from "vue";

defineProps([
    "isbn",
    "book",
    "author"
]);
</script>

<style scoped>
.table-item {
    margin-bottom: 1rem;
}
.title h2 {
    font-style: italic;
}
</style>
