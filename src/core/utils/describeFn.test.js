import { describe, it, expect } from 'vitest';
import describeFn from './describeFn';

const setup = ({ name = 'some-name', description = 'some-description', args } = {}, fn) => {
    // console.log('----setup', descParams);

    const createDescribedFn = () => describeFn({ name, description, args }, fn);

    return {
        createDescribedFn,
    };
};

describe('utils/describeFn()', () => {
    describe('throw error when:', () => {
        it('name is not provided', () => {
            const { createDescribedFn } = setup({ name: '' });

            expect(createDescribedFn).toThrow('name is not provided');
        });

        it('description is not provided', () => {
            const { createDescribedFn } = setup({ description: '' });

            expect(createDescribedFn).toThrow('description is not provided');
        });

        it('required param is missing', async () => {
            const { createDescribedFn } = setup({
                args: { someArg: { required: true } },
            });

            const describedFn = createDescribedFn();

            await expect(describedFn).toThrow('[someArg] is required');
        });

        it('provided param has wrong type', () => {
            const { createDescribedFn } = setup({
                name: 'some-name',
                description: 'description',
                args: { someArg: { type: 'string' } },
            });
            const describedFn = createDescribedFn();

            expect(describedFn).toThrow('[someArg] must be of type string');
        });
    });

    describe('if all parameters are provided correctlye', () => {
        it('run wrapped function', () => {
            const { createDescribedFn } = setup({
                name: 'some-name',
                description: 'description',
                args: { someArg: { type: 'string' } },
            }, ({ someArg }) => (`returned ${someArg}`));

            const describedFn = createDescribedFn();

            expect(describedFn({ someArg: 'some-value' })).toBe('returned some-value');
        });
    });
});
