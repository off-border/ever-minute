import { createStorage } from './storages/inMemoryStorage';
import { createTasksStorage } from './models/tasks';
import { addTask } from './use-cases/addTask';

export const createAppCore = () => {
    const storages = {
        tasks: createTasksStorage(createStorage),
    };

    const useCases = {
        addTask(...args) {
            return addTask(storages.tasks, ...args);
        },
    };

    return {
        storages,
        useCases,
    };
};
