import { createTasksStorage } from './storages/tasks';
import { addTask } from './use-cases/addTask';




export const createAppCore = () => {
    const storages = {
        tasks: createTasksStorage(),
    };

    const useCases = {
        addTask(...args) {
            return addTask(storages.tasks, ...args)
        }
    }

    return {
        storages,
        useCases,
    };
};
