import { beforeAll } from 'vitest';
import { testStorage } from './utils/test-storage';
import { createStorage } from './localStorage';

describe('localStorage', () => {
    const storage = {};

    beforeAll(() => {
        global.localStorage = {
            getItem: (key) => storage[key],
            setItem: (key, value) => {
                storage[key] = value;
            },
        };
    });
    testStorage(createStorage);
});
