import { shallowMount } from '@vue/test-utils';
import TaskList from './TasksList.vue';

const setup = () => {
    const taskList = shallowMount(TaskList, {});

    return {
        taskList,
    };
};

describe('TasksList', () => {
    describe('Adding new task', () => {
        it('should show add buton', () => {
            const { tasksList } = setup();

            expect(tasksList).toBeFalsy();
        });
    });
});
