export const createApi = (createApiCaller) => {
    const apiCall = createApiCaller();
    return {
        addTask: (...args) => apiCall('tasks.add', ...args),
    };
};
