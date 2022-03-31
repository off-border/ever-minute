const endpointNames = {

};

export default function describeFn({ name, description, args, }, fn) {
    if (!name) {
        throw new Error('name is not provided');
    }

    if (!description) {
        throw new Error('description is not provided');
    }

    console.log('----describeFn', args);


    return (recievedArgs) => {
        console.log('----run', args);

        if (args) {
            validateParams(args, recievedArgs);
        }
    }
}

function validateParams(argsConfig, args) {
    console.log('----validateParams', );

    Object.entries(argsConfig).forEach(([argName, config]) => {
        validate(argName, config, args?.[argName]);
    })
}

function validate(argName, config, value) {
    console.log('----validate', argName, config, value);

    if (config.required && value === undefined) {
        throw new Error(`[${argName}] is required`);
    }
}
