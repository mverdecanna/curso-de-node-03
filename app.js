var colors = require('colors');
const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./mult/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then( lista => console.log(lista) )
            .catch( e => console.log(e) );
    break;

    case 'crear':
            console.log(argv);
            console.log(argv.base);
            console.log(argv.limite);
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));        
    break;

    default:
        console.log('Comando inexistente')
}




