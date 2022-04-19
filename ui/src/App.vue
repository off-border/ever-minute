<template>
  <router-view />
</template>

<script setup>
import { provide } from 'vue';
import { createApi } from '../../core/api/api';
import { createApiCaller } from '../../core/api/api-caller-local';

const api = createApi(createApiCaller);

provide('api', api);

</script>
