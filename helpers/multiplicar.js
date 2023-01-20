const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async(base = 5, list = false, height = 10) => {

    try {
        
    
        // imprimir la tabla del 5
        let salida = '';
        let consola = '';
        let nombreArchivo = `tabla-${base}.txt`;
    
        for(let i = 1; i<=height; i++) {
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
            salida += `${base} x ${i} = ${base * i}\n`;
        }
    
        if(list) {
            console.log('========================================='.green);
            console.log('              Tabla del:'.yellow, colors.blue(base));
            console.log('========================================='.green);
            
            console.log(consola);
        }
    
        fs.writeFileSync(`./output/${nombreArchivo}`, salida, (err) => {
            if(err) throw err;
        });
    
        return nombreArchivo;
        
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivoTabla
}