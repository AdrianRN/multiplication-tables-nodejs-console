const argv = require('yargs')
    .option('b', {
        alias: 'base',
        describe: 'gets the number of the table that will be shown',
        type: 'number',
        demandOption: true
    }
    )

    .option('l', {
        alias: 'list',
        type: 'boolean',
        describe: 'displays the table if it is true',
        default: false
    }
    )

    .option('h', {
        alias: 'height',
        describe: 'the height of the table that will be shown',
        type: 'number',
        default: 10
    }
    )

    .check((argv) => {
        if(isNaN(argv.b)) {
            throw 'base must be a number';
        }
        return true;
    })
    .argv;


module.exports = argv;