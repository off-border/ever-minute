export const createApi = (createApiBus) => {
    const apiCall = createApiBus();

    return {
        addTask: (...args) => apiCall('tasks.add', ...args),
        getTask: (...args) => apiCall('tasks.get', ...args),
    };
};
