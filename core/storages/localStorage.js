export function createStorage({ modelName }) {
    if (!localStorage.getItem(modelName)) {
        localStorage.setItem(modelName, {});
    }

    const getNewId = () => `${Object.keys(readAll()).length}-${Date.now()}`;

    function create(data) {
        const id = getNewId();
        const fullDataSet = readAll();
        const newEntry = { ...data, id };

        localStorage.setItem(modelName, {
            ...fullDataSet,
            [id]: newEntry,
        });

        return id;
    }

    function read(id) {
        return localStorage.getItem(modelName)[id];
    }

    function readAll() {
        return localStorage.getItem(modelName);
    }

    function update(id, newData) {
        const data = read(id);
        const fullDataSet = readAll();

        localStorage.setItem(modelName, {
            ...fullDataSet,
            [id]: { ...data, ...newData },
        });
    }

    return {
        create,
        read,
        readAll,
        update,
    };
}
