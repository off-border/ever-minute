<template>
  <router-view />
</template>

<script setup>
// import { defineComponent } from 'vue';
import { provide } from 'vue';
import { createApi } from './api/api';

const apiCall = createApi();

provide('apiCall', apiCall);

// export default defineComponent({
//     name: 'App',
// });
</script>
