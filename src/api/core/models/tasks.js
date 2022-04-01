export const createTasksApi = (createStorage) => {
    const storage = createStorage({ modelName: 'tasks' });

    return {
        create: (task) => storage.create(task),

        read: (id) => storage.read(id),

        readAll: () => storage.readAll(),
    };
};
