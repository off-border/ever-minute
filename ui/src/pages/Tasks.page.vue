<template>
    <div class="tasks-list">
        tasks list {{ api.addTask }}
        <ButtonAdd @click="addTask" />
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { inject } from 'vue';
import ButtonAdd from '../components/ButtonAdd.vue';

const api = inject('api');
const Router = useRouter();

const addTask = async () => {
    const taskId = api.addTask({
        title: 'new task',
        description: 'new task description',
        status: 'new task status',
    });

    Router.push({ name: 'task', params: { id: taskId } });
};

</script>
