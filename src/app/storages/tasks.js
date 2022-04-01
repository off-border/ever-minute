export const createTasksStorage = () => {
    let tasks = [];

    return {
        create: (task) => {
            const id = tasks.length;
            tasks[id] = { ...task, id };

            return id;
        },

        read: (id) => tasks[id],

        readAll: () => tasks,
    }
};