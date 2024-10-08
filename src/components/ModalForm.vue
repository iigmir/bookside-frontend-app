<template>
    <form v-on:submit.prevent="submit">
        <dialog class="ts-modal is-large" v-bind:open="shown">
            <div class="content">
                <div class="ts-content">
                    <div class="ts-header ts-grid is-middle-aligned">
                        <div class="column is-fluid">
                            <div class="ts-header">輸入新書</div>
                        </div>
                        <div class="column" v-on:click="$emit('closed')">
                            <button class="ts-close"></button>
                        </div>
                    </div>
                </div>
                <div class="ts-divider"></div>
                <div class="ts-content">
                    <input type="hidden" name="id" />
                    <div>
                        <label for="formisbn">ISBN</label>
                    </div>
                    <div class="ts-input">
                        <input id="formisbn" type="text" name="isbn" required />
                    </div>
                    <div>
                        <label for="formbody">Title</label>
                    </div>
                    <div class="ts-input">
                        <input id="formbody" type="text" name="book" required />
                        <!-- <textarea name="body" id="formbody" cols="30" rows="10" required></textarea> -->
                    </div>
                </div>
                <div class="ts-divider"></div>
                <div class="ts-content is-tertiary">
                    <div class="ts-wrap is-end-aligned">
                        <button class="ts-button" type="submit">確定</button>
                        <button class="ts-button is-outlined" v-on:click="$emit('closed')">取消</button>
                    </div>
                </div>
            </div>
        </dialog>
    </form>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps([
    "show-modal",
    "method",
    "id",
    "title",
    "body",
]);

const emits = defineEmits([
    "closed"
]);

const shown = computed(() => props.showModal );

const get_param = (formdata = new FormData()) => {
    const id = formdata.get("id") && { id: formdata.get("id") };
    return {
        ...id,
        title: formdata.get("title") ?? "",
        body: formdata.get("body") ?? "",
    };
};

const submit = (e) => {
    const formdata = new FormData(e.target);
    const ajax = fetch(import.meta.env.VITE_API_HOST + "/articles", {
        method: props.method,
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify( get_param(formdata) ),
    }).then( r => r.json() );
    ajax.then( (response) => {
        console.log(response);
        emits("closed");
    }).catch( (e) => {
        console.error(e);
        
    });
    // const params = get_param(formdata);
    // console.log(params);
};
</script>
