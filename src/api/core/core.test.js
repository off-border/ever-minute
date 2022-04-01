import { describe, it, expect } from 'vitest';
import { createAppCore } from './core';
import { createStorage } from '../storages/inMemoryStorage';

const setup = () => {
    const core = createAppCore(createStorage);

    return {
        core,
    };
};

describe('app-core', () => {
    it('should assemble storages', () => {
        const { core } = setup();

        expect(core.models.tasks).toBeTruthy();
    });

    it('should assemble use-cases', () => {
        const { core } = setup();

        expect(core.useCases.addTask).toBeTruthy();
    });

    it('should inject storage to use-case', async () => {
        const { core } = setup();

        const taskId = await core.useCases.addTask({ title: 'title', text: 'text' });
        const savedTask = await core.models.tasks.read(taskId);

        expect(savedTask).toEqual({ id: taskId, title: 'title', text: 'text' });
    });
});
