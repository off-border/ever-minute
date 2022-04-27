import { createStorage } from '../storages/localStorage';
import { createAppCore } from '../core';

export const createApiBus = () => {
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
