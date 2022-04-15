import { createStorage } from '../storages/inMemoryStoragee';
import { createAppCore } from '../app/coree';

export const createApi = () => {
    const core = createAppCore(createStorage);

    const apiMap = {
        'tasks.add': core.useCases.addTask,
        'tasks.get': core.useCases.getTask,
    };

    const apiCall = (methodName, ...args) => {
        const method = apiMap[methodName];
        if (!method) {
            return { error: `unknown api method ${methodName}` };
        }
        return method(...args);
    };

    return apiCall;
};