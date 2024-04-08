<template>
    <article class="table-item ts-box">
        <section class="title ts-content is-dense">
            <h2>{{ book }}</h2>
        </section>
        <section class="ts-content">
            <a v-bind:href="get_book_link(isbn)" target="_blank">
                {{ isbn }}
            </a>, by {{ author }}
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

const get_book_link = (isbn) => `https://www.google.com/search?tbm=bks&q=isbn:${isbn}`
// const get_book_link = (isbn) => `https://openlibrary.org/search?isbn=${isbn}`
// const get_book_link = (isbn) => `https://en.wikipedia.org/wiki/Special:BookSources/${isbn}`;
</script>

<style scoped>
.table-item {
    margin-bottom: 1rem;
}
.title h2 {
    font-style: italic;
}
</style>
