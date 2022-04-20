<template>
  <router-view />
</template>

<script setup>
import { provide } from 'vue';
import { createApi } from '../../core/api/api';
import { createApiCaller } from '../../core/api/caller-local';

const api = createApi(createApiCaller);

console.log('--- api, ', api);

provide('api', api);

</script>
