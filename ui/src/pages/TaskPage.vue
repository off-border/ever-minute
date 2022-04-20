<template>
    <div class="tasks-list">
        tasks {{ id }}
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { inject } from 'vue';

const Router = useRouter();

</script>
