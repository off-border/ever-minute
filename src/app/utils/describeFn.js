export default function describeFn({ name, description, args, }, fn) {
    if (!name) {
        throw new Error('name is not provided');
    }

    if (!description) {
        throw new   Error('description is not provided');
    }

    return (recievedArgs) => {
        if (args) {
            validateParams(args, recievedArgs);
        }
    }
}

function validateParams(argsConfig, args) {
    Object.entries(argsConfig).forEach(([argName, config]) => {
        validate(argName, config, args?.[argName])
    })
}

function validate(argName, config, value) {
    if (config.required && value === undefined) {
        throw new Error(`[${argName}] is required`);
    }

    if (config?.type && (typeof value !== config.type)) {
        throw new Error(`[${argName}] must be of type ${config.type}`)
    }
}
