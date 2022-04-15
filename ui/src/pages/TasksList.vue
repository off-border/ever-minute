<template>
    <div class="tasks-list">
        tasks list {{ apiCall }}
        <ButtonAdd/>
    </div>

</template>

<script setup>
import { inject } from 'vue';
import ButtonAdd from '../components/ButtonAdd.vue';

const apiCall = inject('apiCall');

</script>
