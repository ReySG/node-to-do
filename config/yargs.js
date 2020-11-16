const descripcion = {
    alias: 't',
    demand: true,
};
const completado = {
    alias: 'c',
    default: true
};

const argv = require('yargs')
    .command('crear', 'Se crea una tarea por hacer', 
     descripcion)
     
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })

    .command('borrar', 'borra una tarea',
     descripcion)
    .help()
    .argv;

module.exports = {
    argv
}