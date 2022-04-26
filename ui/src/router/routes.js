const routes = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            {
                path: '',
                component: () => import('pages/Tasks.page.vue'),
            },
            {
                name: 'task',
                path: 'task/:id',
                component: () => import('pages/Task.page.vue'),
            },
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/404.page.vue'),
    },
];

export default routes;
