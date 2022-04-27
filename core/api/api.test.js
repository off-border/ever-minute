import { createApi } from './api';

const setup = () => {
    const apiCaller = vi.fn();
    const createApiBus = vi.fn(() => apiCaller);

    const api = createApi(createApiBus);

    return {
        api,
        apiCaller,
    };
};

describe('api: createApi()', () => {
    it('should call api methods', () => {
        const { api, apiCaller } = setup();

        api.addTask('arg1', 'arg2');

        expect(apiCaller).toHaveBeenCalledWith('tasks.add', 'arg1', 'arg2');
    });
});
