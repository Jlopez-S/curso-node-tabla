const color = require('colors');

const argv = require('yargs')
    .option('b',{
        alias: 'base'.green,
        type: 'number'.green,
        demandOption: true,
        describe: 'es la base de la tabla de multiplicar'.green
    })
    .option('l',{
        alias: 'listar'.green,
        type: 'boolean'.green,
        describe: 'muestra o no la tabla de multiplicar'.green
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        describe: 'limite de la multiplicación'
    }) 
    .check( (argv, options ) => {
        if (isNaN( argv.b)){
            throw `la base tiene que ser un numero`.red
        }
        return true;
    })                
    .argv;

module.exports = argv;