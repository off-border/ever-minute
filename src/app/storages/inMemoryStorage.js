const dataMap = {};

export function createStorage({ modelName }) {
    if (!dataMap[modelName]) {
        dataMap[modelName] = {};
    }

    const data = dataMap[modelName];

    const getNewId = () => `${Object.keys(data).length}-${Date.now()}`;

    return {
        create: (task) => {
            const id = getNewId();

            data[id] = { ...task, id };

            return id;
        },

        read: (id) => data[id],

        readAll: () => data,
    };
}
