//configuracion de yargs

//const options = {
//    crear: {
//        descripcion: {
//            demand: true,
//            alias: 'd',
//            desc: "Descripcion de la tarea por hacer"
//        }
//    },
//    actulizar: {
//        descripcion: {
//            demand: true,
//            alias: 'd',
//            desc: "Descripcion de la tarea por hacer"
//        },
//        completando: {
//            default: true,
//            alias: 'c',
//            desc: "Marca como contemplado o pendiente"
//        }
//    }
//}

const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripcion de la tarea por hacer"
}

const completando = {
    default: true,
    alias: 'c',
    desc: "Marca como contemplado o pendiente"
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completando una tarea', {
        descripcion,
        completando
    })
    .command('borrar', 'borra tarea ya hecha', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}