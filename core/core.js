// import { createStorage } from '../storages/inMemoryStorage';
import { createTasksApi } from './app/models/tasks';
import { addTask } from './app/use-cases/addTask';
import { getTask } from './app/use-cases/getTask';

export const createAppCore = (createStorage) => {
    const models = {
        tasks: createTasksApi(createStorage),
    };

    const useCases = {
        addTask(...args) {
            return addTask(models.tasks, ...args);
        },

        getTask(...args) {
            return getTask(models.tasks, ...args);
        },
    };

    return {
        models,
        useCases,
    };
};
