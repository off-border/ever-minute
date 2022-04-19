import { shallowMount } from '@vue/test-utils';
import { expect, vi } from 'vitest';
import TaskList from './TasksList.vue';
import ButtonAdd from '../components/ButtonAdd.vue';

const setup = () => {
    const api = {
        addTask: vi.fn(),
    };

    const tasksList = shallowMount(TaskList, {
        global: {
            provide: {
                api,
            },
        },
    });

    const buttonAdd = tasksList.findComponent(ButtonAdd);
    const clickAddButton = () => buttonAdd.vm.$emit('click');

    return {
        tasksList,
        buttonAdd,
        api,
        clickAddButton,
    };
};

describe('TasksList', () => {
    describe('Adding new task', () => {
        it('should show add buton', () => {
            const { buttonAdd } = setup();

            console.log('--- html', buttonAdd.html());

            expect(buttonAdd.exists()).toBeTruthy();
        });

        describe('when AddButton clicked', () => {
            it('create new task', () => {
                const { clickAddButton, api } = setup();

                clickAddButton();

                expect(api.addTask).toHaveBeenCalled();
            });
        });
    });
});
