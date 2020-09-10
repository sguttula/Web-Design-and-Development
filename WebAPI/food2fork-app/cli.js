const
    app = require('./app'),
    yargs = require('yargs')

const flags = yargs.usage('$0: Usage <cmd> [options]')
    .command({
        command: 'search',
        desc: 'Search the Food2Fork API (***MAX OF 50 API CALLS/DAY***)',
        builder: (yargs) => {
            return yargs.option('f', {
                alias: 'food',
                describe: 'List of foods'
            })
        },
        handler: (argv) => {app.search(argv.f)}
    })
    .help('help')
    .argv