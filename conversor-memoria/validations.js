//@ts-nocheck
const { unitMaps } = require("./memory-converter");

class Validations {
    
    static validateMemory(input){
        if(input === '' || isNaN(input) || input===null || input===undefined) throw new Error('Por favor ingresa una medida de memoria válida');

        if(input.includes('e') || input.includes('E')) throw new Error('Notacion cientifica no permitida, por favor ingresa un numero decimal');

        if(!/^-?\d*\.?\d+$/.test(input)) throw new Error('Uno o mas caracteres no reconocidos. Por favor ingresa un numero valido');

        const memory=Number(input);

        if(memory<0) throw new Error('Por favor ingresa un numero positivo');

        if(memory<Number.MIN_VALUE) throw new Error('Numero demasiado pequeño. El mínimo permitido es '+Number.MIN_VALUE);

        if(memory>Number.MAX_SAFE_INTEGER) throw new Error('Numero demasiado grande. El máximo permitido es '+Number.MAX_SAFE_INTEGER);

        return memory;
    }

    static validateUnit(unit){

        if(unit==='' || unit===null || unit===undefined) throw new Error('La unidad no puede estar vacia');

        if(unit.trim().toLowerCase()==='all') return unit; //caso especial xq no es unidad pero es valido

        if(!unitMaps[unit.trim().toLowerCase()]) throw new Error(`Unidad no reconocida: ${unit}. Debe ser una de las siguientes: ${Object.keys(unitMaps).join(', ')}`);

        return unit;
    }
}

module.exports={ Validations }