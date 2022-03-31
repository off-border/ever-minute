import { describe, it, expect, vi } from 'vitest'
import { createAppCore } from './core';

const setup = () => {
    const core = createAppCore();

    return {
        core
    };
};

describe('app-core', () => {
    it('should assemble storages', () => {
       const { core } = setup();

       expect(core.storages.tasks).toBeTruthy();
    });

    it('should assemble use-cases', () => {
       const { core } = setup();

       expect(core.useCases.addTask).toBeTruthy();
    });

    it('should inject storage to use-case', async () => {
        const { core } = setup();

        const taskId = await core.useCases.addTask({ title: 'title', text: 'text' });

        const savedTask = await core.storages.tasks.read(taskId);

        expect(savedTask).toEqual({ id: taskId, title: 'title', text: 'text' });
     });
})
