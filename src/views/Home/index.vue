<template>
    <main id="home-page" class="ts-container">
        <header class="header">
            <h1>Books API</h1>
            <div v-show="failed_animation" class="ts-notice is-negative">
                <div class="title">失敗訊息</div>
                <div class="content">{{ failed_message }}</div>
            </div>
            <button class="ts-button" v-on:click="open_modal">Create book</button>
            <form-modal
                method="POST"
                v-bind:show-modal="modal_shown"
                v-on:closed="close_modal"
            />
        </header>
        <p>
            <router-link to="/about">About</router-link>
        </p>
        <table-item v-for="item in list" v-bind:key="item.id" v-bind="{ ...item }" />
    </main>
</template>

<script>
export default { name: "Home" };
</script>

<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
// APIs
import { GetBookList } from "../../api/index";
// Components
import TableItem from "./Item.vue";
import FormModal from "../../components/ModalForm.vue";

const ajax_modules = () => {
    const list = ref([]);
    const failed_message = ref(null);
    const get_list = () => {
        GetBookList().then( (response = { result: [] }) => {
            list.value = response.result;
        }).catch( (e) => {
            failed_message.value = e.message;
            setTimeout(() => {
                failed_message.value = null;
            }, 3000);
        });
    };
    const failed_animation = computed( () => failed_message.value != null );
    return { list, get_list, failed_message, failed_animation };
};
const { list, get_list, failed_message, failed_animation } = ajax_modules();

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
