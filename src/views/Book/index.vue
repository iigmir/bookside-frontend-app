<template>
    <main id="book-page" class="ts-container">
        <h1>Book</h1>
        <!-- /api/books/9780786401413 -->
        ISBN: <span v-if="isbn" class="isbn">{{ isbn }}</span>
    </main>
</template>

<script>export default { name: "Book" };</script>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { GetBookItem } from "../../api/index.js";

const route = useRoute();

const isbn = computed(() => route.params.isbn);

const ajax_modules = () => {
    const item = ref({});
    const get_book = (isbn = "") => {
        const ajax = GetBookItem(isbn);
        ajax.then( (response = { result: {} }) => {
            item.value = response.result;
        });
    };
    return { item, get_book };
};
const { item, get_book } = ajax_modules();

get_book(isbn.value);
</script>
