export const createTasksApi = (createStorage) => {
    const storage = createStorage({ modelName: 'tasks' });

    return {
        ...storage,
    };
};
