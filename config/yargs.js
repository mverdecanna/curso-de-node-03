
const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 1
    }
}

const argv = require('yargs')
                .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
                .command('crear', 'Crea un archivo con la tabla de multiplicar, con una base y un limite', opts)
                .help()
                .argv;




module.exports = {
  argv  
}