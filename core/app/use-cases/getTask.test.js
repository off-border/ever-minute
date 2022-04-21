import { describe, it, expect } from 'vitest';
import { getTask } from './getTask';

const setup = () => {
    const tasksStore = {
        read: (id) => ({ id, title: `${id} title` }),
    };

    return { tasksStore };
};

describe('use-cases', () => {
    describe('getTask()', () => {
        it('should return task from store', () => {
            const { tasksStore } = setup();

            const savedTask = getTask(tasksStore, { id: 'task_id' });

            expect(savedTask).toEqual({ id: 'task_id', title: 'task_id title' });
        });
    });
});
