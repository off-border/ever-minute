<template>
  <router-view />
</template>

<script setup>
import { provide } from 'vue';
import { createLocalApi } from '../../core/api/api-local';

const api = createLocalApi();

console.log('--- api, ', api);

provide('api', api);

</script>
