const fs = require('fs'); //vamos a nesecitar escribir en un archivo

let listadoPorHacer = []; //las notas se almacenan en un arreglo

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se puede grabar en el archivo', err)
    })
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

    //console.log(listadoPorHacer);
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if (listadoPorHacer.length === nuevoListado.length) {
        return false
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB()
        return true
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porhacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porhacer);
    guardarDB();
    return porhacer
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}