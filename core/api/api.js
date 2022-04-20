export const createApi = (createApiCaller) => {
    const apiCall = createApiCaller();

    console.log('--- apiCall, ', apiCall);

    return {
        addTask: (...args) => apiCall('tasks.add', ...args),
    };
};
