export default function describeFn({ name, description, args }, fn) {
    console.log('----describe');

    if (!name) {
        throw new Error('name is not provided');
    }

    if (!description) {
        throw new Error('description is not provided');
    }

    return (recievedArgs) => {
        if (args) {
            validateParams(args, recievedArgs);
        }

        return fn(recievedArgs);
    };
}

function validateParams(argsConfig, args) {
    Object.entries(argsConfig).forEach(([argName, config]) => {
        validate(argName, config, args?.[argName]);
    });
}

function validate(argName, config, value) {
    if (config.required && value === undefined) {
        throw new Error(`[${argName}] is required`);
    }

    if (config?.type === 'string' && (typeof value !== 'string')) {
        throw new Error(`[${argName}] must be of type ${config.type}`);
    }

    if (config?.type === 'number' && (typeof value !== 'number')) {
        throw new Error(`[${argName}] must be of type ${config.type}`);
    }
}
