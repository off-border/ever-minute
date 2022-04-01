export const addTask = (tasksStore, { title, text }) => {
    tasksStore.create({ title, text });
};
