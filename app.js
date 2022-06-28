const { crearArchivo } = require('./helpers/multiplicar');
const  argv = require('./config/yargs');
const color = require('colors');

console.clear();


crearArchivo(argv.b, argv.l, argv.h)
    .then(crearArchivo => console.log(crearArchivo.rainbow, `creado`.red))
    .catch( err => console.log(err));


