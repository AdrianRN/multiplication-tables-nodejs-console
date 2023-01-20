
const {crearArchivoTabla} = require('./helpers/multiplicar');
const argv = require('./config/yargs.js')






console.clear();

// console.log(argv);

// console.log('base: yargs', argv.base);



// const base = 9;


crearArchivoTabla(argv.base, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(error => console.log(error));




