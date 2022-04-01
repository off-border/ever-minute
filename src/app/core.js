import { createStorage } from './storages/inMemoryStorage';
import { createTasksStorage } from './models/tasks';
import { addTask } from './use-cases/addTask';

export const createAppCore = () => {
    const models = {
        tasks: createTasksStorage(createStorage),
    };

    const useCases = {
        addTask(...args) {
            return addTask(models.tasks, ...args);
        },
    };

    return {
        models,
        useCases,
    };
};
