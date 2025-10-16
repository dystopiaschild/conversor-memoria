const readline=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

//funcion de ayuda para procesar entradas de forma asincrona
function userinput(prompt){
    return new Promise((resolve) => {
        readline.question(prompt, resolve);
    });
}

class Ui{
    static showHelp(){
        console.log(`
            Conversor de Memoria:
            
            Modo de Uso:
                memconvert <valor> <unidad-inicio> <unidad-destino>
                
            Unidades disponibles:
                bytes,
                kb (kilobyyes),
                mb (megabytes),
                gb (gigabytes),
                tb (terabytes),
                all -> convierte a todas las unidades
                
            Ejemplo de uso:
                memconvert 1 gb mb  -> 1024 mb
        `)
    }
}

module.exports={ Ui, readline, userinput }