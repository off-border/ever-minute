import {
    describe, it, expect, vi,
} from 'vitest';
import { addTask } from './addTask';

const setup = () => {
    const tasksStore = {
        create: vi.fn(),
    };

    return { tasksStore };
};

describe('use-cases', () => {
    describe('addTask', () => {
        it('should add task to store', () => {
            const { tasksStore } = setup();

            addTask(tasksStore, { title: 'task title', text: 'task text' });

            expect(tasksStore.create).toHaveBeenCalled({ title: 'task title', text: 'task text' });
        });
    });
});
