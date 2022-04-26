import { testStorage } from './utils/test-storage';
import { createStorage } from './inMemoryStorage';

describe('InMemoryStorage', () => {
    testStorage(createStorage);
});
