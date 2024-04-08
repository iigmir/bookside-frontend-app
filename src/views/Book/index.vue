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
import { useRouter, useRoute } from "vue-router";

const route = useRoute();

const isbn = computed(() => route.params.isbn);

const ajax_modules = () => {
    const api_host = computed( () => import.meta.env.VITE_API_HOST );
    const list = ref({});
    const get_book = () => {
        const api = api_host.value + "/books/" + isbn.value;
        const ajax = fetch(api).then(r=>r.json());
        ajax.then( (response = { result: {} }) => {
            list.value = response.result;
        });
    };
    return { list, get_book };
};
const { list, get_book } = ajax_modules();

get_book();
</script>
