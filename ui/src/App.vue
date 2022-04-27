<template>
  <router-view />
</template>

<script setup>
import { provide } from 'vue';
import { createApi } from '../../core/api/api';
import { createApiBus } from '../../core/api/caller-local';

const api = createApi(createApiBus);

console.log('--- api, ', api);

provide('api', api);

</script>
