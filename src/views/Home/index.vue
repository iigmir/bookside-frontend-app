<template>
    <main id="home-page" class="ts-container">
        <header class="header">
            <h1>Books API</h1>
            <button class="ts-button" v-on:click="open_modal">Create book</button>
            <form-modal
                method="POST"
                v-bind:show-modal="modal_shown"
                v-on:closed="close_modal"
            />
            <router-link to="/about">About</router-link>
        </header>
        <table-item v-for="item in list" v-bind:key="item.id" v-bind="{ ...item }" />
    </main>
</template>

<script>
export default { name: "Home" };
</script>

<script setup>
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";
// Components
import TableItem from "./Item.vue";
import FormModal from "../../components/ModalForm.vue";

const ajax_modules = () => {
    const api_host = computed( () => import.meta.env.VITE_API_HOST );
    const list = ref([]);
    const get_list = () => {
        const api = api_host.value + "/books";
        const ajax = fetch(api).then(r=>r.json());
        ajax.then( (response = { result: [] }) => {
            list.value = response.result;
        });
    };
    return { list, get_list };
};
const { list, get_list } = ajax_modules();

const modal_modules = () => {
    const modal_shown = ref(false);
    const set_modal_shown = (input = false) => { modal_shown.value = input; };
    const open_modal = () => set_modal_shown(true);
    const close_modal = () => set_modal_shown(false);
    const toggle_modal = () => set_modal_shown(!modal_shown.value);
    return {
        modal_shown,
        open_modal,
        close_modal,
        toggle_modal,
    };
};
const { modal_shown, open_modal, close_modal, toggle_modal } = modal_modules();

// Actions
get_list();
</script>

<style scoped>
.header {
    h1 {
        margin: 0;
    }
    margin-bottom: 1.5rem;
}
</style>
