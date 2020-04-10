const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors');

//let comando = argv._[0];



let comando = argv._[0];


switch (comando) {
    case 'crear':
        //console.log('crear por hacer')
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('=======por hacer==========='.blue);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('==========================='.blue)
        }
        // console.log('Mostrar todas las tareas')
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado)
            //console.log('actualiza las tareas')
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        //console.log('primer paso a tarea borrada');
        console.log(borrado)
        break;

    default:
        console.log('comando no reconocido')
}