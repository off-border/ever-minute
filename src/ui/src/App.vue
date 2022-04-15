<template>
  <router-view />
</template>

<script setup>
import { provide } from 'vue';
import { createApi } from '../../api/api';

const apiCall = createApi();
provide('apiCall', apiCall);

</script>
