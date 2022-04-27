const dataMap = {};

export function createStorage({ modelName }) {
    if (!dataMap[modelName]) {
        dataMap[modelName] = {};
    }

    const store = dataMap[modelName];

    const getNewId = () => `${Object.keys(store).length}-${Date.now()}`;

    return {
        create: (data) => {
            const id = getNewId();
            store[id] = { ...data, id };

            return id;
        },

        read: (id) => store[id],

        readAll: () => store,

        update: (id, newData) => {
            const data = store[id];
            store[id] = { ...data, ...newData };
        },
    };
}
