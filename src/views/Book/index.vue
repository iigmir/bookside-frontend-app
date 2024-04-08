<template>
    <main id="book-page" class="ts-container">
        <p>dnjfdfs</p>
        <!-- <span v-if="isbn">{{ isbn }}</span> -->
    </main>
</template>

<script>export default { name: "Book" };</script>

<script setup>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();

const isbn = computed(() => route.params.isbn);

console.log(isbn.value);
</script>
