import { describe, it, expect, vi } from 'vitest'
import describeFn from './describeFn';

const setup = ({name = 'some-name', description = 'some-description', args} = {}, fn) => {

    // console.log('----setup', descParams);


    const createDescribedFn = () => describeFn({name, description, args}, fn);

    return {
        createDescribedFn,
    };
};

describe('utils/describeFn()', () => {
    it('should throw error if endpointName is not provided', () => {
        const { createDescribedFn } = setup({ name: '' });

        expect(createDescribedFn).toThrow('name is not provided');
    });

    it('should throw error if description is not provided', () => {
        const { createDescribedFn } = setup({ description: ''});

        expect(createDescribedFn).toThrow('description is not provided');
    });

    it('should throw when required param is missing', () => {
        const { createDescribedFn } = setup({
            args: { someArg: { required: true } }
        });

        const describedFn = createDescribedFn();

        expect(describedFn).toThrow('[someArg] is required');
    });

    it('should throw when param has wrong type', () => {
        const { createDescribedFn } = setup({ name: 'some-name', description: 'description',
            args: { someArg: { type: 'string' } }
        });
        const describedFn = createDescribedFn();

        expect(describedFn).toThrow('[someArg] is required');
    });
});
