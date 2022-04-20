export const addTask = (tasksApi, { title, description }) =>
    tasksApi.create({ title, description });
