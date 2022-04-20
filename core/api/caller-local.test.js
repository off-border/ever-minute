import { describe, it, expect } from 'vitest';
import { createApiCaller } from './caller-local';

const setup = () => {
    const apiCall = createApiCaller();

    return { apiCall };
};

describe('api: createApiCaller()', () => {
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