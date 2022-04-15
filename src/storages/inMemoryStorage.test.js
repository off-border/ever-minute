import { describe, it, expect } from 'vitest';

import { createStorage } from './inMemoryStorage';

const setup = () => {
    const storage = createStorage({ modelName: 'test-model' });

    return { storage };
};

describe('inMemoryStorage', () => {
    it('create() and read()', () => {
        const { storage } = setup();

        const id = storage.create({ field1: 'field-1', field2: 'field-2' });
        const saved = storage.read(id);

        expect(saved).toEqual({ id, field1: 'field-1', field2: 'field-2' });
    });
});
