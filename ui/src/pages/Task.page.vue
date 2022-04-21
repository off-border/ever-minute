<template>
    <div class="tasks-list">
        tasks {{ id }}
        <br>
        {{ task }}
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { inject } from 'vue';

const api = inject('api');
const { id } = useRoute().params;
const task = await api.getTask({ id });

</script>
