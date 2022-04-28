import { expect } from 'vitest';
import { createLocalApi } from './api-local';

const setup = () => {
    const storage = {
        tasks: {
            'stored-task-id': {
                id: 'stored-task-id',
                title: 'stored-task-title',
                description: 'stored-task-description',
            },
        },
    };
    global.localStorage = {
        getItem: (key) => storage[key],
        setItem: (key, value) => {
            storage[key] = value;
        },
    };

    const localApi = createLocalApi();

    return {
        localApi,
        storage,
    };
};

describe('api: local', () => {
    describe('addTask()', () => {
        it('add task to storage', async () => {
            const { localApi } = setup();

            const taskId = await localApi.addTask({ title: 'task-title', description: 'task-description' });
            const addedTask = await localApi.getTask({ id: taskId });

            expect(addedTask).toEqual({
                id: taskId,
                title: 'task-title',
                description: 'task-description',
            });
        });
    });

    describe('getTask()', () => {
        it('get rask from storage', async () => {
            const { localApi } = setup();

            const addedTask = await localApi.getTask({ id: 'stored-task-id' });

            expect(addedTask).toEqual({
                id: 'stored-task-id',
                title: 'stored-task-title',
                description: 'stored-task-description',
            });
        });
    });
});
