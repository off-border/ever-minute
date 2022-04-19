import { createApi } from './api';

const setup = () => {
    const apiCaller = vi.fn();
    const createApiCaller = vi.fn(() => apiCaller);

    const api = createApi(createApiCaller);

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
