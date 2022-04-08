<template>
    <div class="tasks-list">
        tasks list {{ apiCall }}
    </div>

</template>

<script setup>
import { inject } from 'vue';

const apiCall = inject('apiCall');

</script>
