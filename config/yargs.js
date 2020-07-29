/*Manejo de Parametos*/
const argv = require('yargs')
    .command(['create', 'list'], 'Create perro or List perro', {
        base: {
            demand: true,
            alias: 'b'
        },
        limit: {
            default: 10,
            alias: 'l'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}