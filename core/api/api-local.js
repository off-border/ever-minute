import { createAppCore } from '../core';
import { createStorage } from '../storages/localStorage';

export const createLocalApi = () => {
    const core = createAppCore(createStorage);

    return {
        addTask: (...args) => core.useCases.addTask(...args),
        getTask: (...args) => core.useCases.getTask(...args),
    };
};
