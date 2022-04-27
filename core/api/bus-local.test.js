import { describe, it, expect } from 'vitest';
import { createApiBus } from './bus-local';

const setup = () => {
    const storage = {};
    global.localStorage = {
        getItem: (key) => storage[key],
        setItem: (key, value) => {
            storage[key] = value;
        },
    };

    const apiCall = createApiBus();

    return { apiCall };
};

describe('api: createApiBus()', () => {
    it('should return function', () => {
        const { apiCall } = setup();

        expect(typeof apiCall).toBe('function');
    });

    it('should add / read task', () => {
        const { apiCall } = setup();

        const taskId = apiCall('tasks.add', { title: 'test-title', description: 'test-description' });
        const savedTask = apiCall('tasks.get', { id: taskId });

        expect(savedTask).toEqual({ id: taskId, title: 'test-title', description: 'test-description' });
    });
});
