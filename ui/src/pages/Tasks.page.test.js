import { shallowMount } from '@vue/test-utils';
import { expect, vi } from 'vitest';
import { routerKey } from 'vue-router';
import TaskList from './Tasks.page.vue';
import ButtonAdd from '../components/ButtonAdd.vue';

const setup = () => {
    const api = {
        addTask: vi.fn(() => 1234),
    };

    const Router = {
        push: vi.fn(),
    };

    const tasksList = shallowMount(TaskList, {
        global: {
            provide: {
                api,
                [routerKey]: Router,
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
        Router,
    };
};

describe('TasksList', () => {
    describe('Add new task', () => {
        it('should show add buton', () => {
            const { buttonAdd } = setup();

            expect(buttonAdd.exists()).toBeTruthy();
        });

        describe('when AddButton clicked', () => {
            it('create new task', () => {
                const { clickAddButton, api } = setup();

                clickAddButton();

                expect(api.addTask).toHaveBeenCalledWith({
                    title: 'new task',
                    description: 'new task description',
                    status: 'new task status',
                });
            });

            it('open created task', async () => {
                const { clickAddButton, Router } = setup();

                await clickAddButton();

                expect(Router.push).toHaveBeenCalledWith({
                    name: 'task',
                    params: {
                        id: expect.any(Number),
                    },
                });
            });
        });
    });
});
