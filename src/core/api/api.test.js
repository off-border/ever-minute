import { describe, it, expect } from 'vitest';
import { createApi } from './api';

const setup = () => {
    const apiCall = createApi();

    return { apiCall };
};

describe('api.createApi()', () => {
    it('should return function', () => {
        const { apiCall } = setup();

        expect(typeof apiCall).toBe('function');
    });

    it('should add / read task', () => {
        const { apiCall } = setup();

        const taskId = apiCall('tasks.add', { title: 'test-title', text: 'test-text' });
        const savedTask = apiCall('tasks.get', { id: taskId });

        expect(savedTask).toEqual({ id: taskId, title: 'test-title', text: 'test-text' });
    });
});
