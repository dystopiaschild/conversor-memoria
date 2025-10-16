#!/usr/bin/env node

//@ts-nocheck
const { Validations }=require('./validations.js');
const { Ui, readline, userinput }=require('./ui.js');
const { MemoryConverter, unitMaps }=require('./memory-converter.js');

function ConvertOnInput(memory, valid_StartUnit, valid_TargetUnit){
    if(valid_TargetUnit==='all'){
        return MemoryConverter.convertAll(memory, valid_StartUnit);
    }
    return MemoryConverter.convertSingular(memory, valid_StartUnit, valid_TargetUnit);
}

function CommandLine(args){
    const [value, startUnit, targetUnit]=args;
    try {
        const memory=Validations.validateMemory(value);
        const valid_StartUnit=Validations.validateUnit(startUnit);
        const valid_TargetUnit=Validations.validateUnit(targetUnit);
        const result=ConvertOnInput(memory, valid_StartUnit, valid_TargetUnit);
        if(valid_TargetUnit==='all'){
            console.log(`Listo! ${memory} ${valid_StartUnit} equivale a:`);
            Object.entries(result).forEach(([unit, conversion])=> {
                console.log(conversion.formatted);
            });
        } else {
            console.log(`Listo! ${memory} ${valid_StartUnit} -> ${result.formatted}`);
        }
        process.exit(0); //codigo success
    } catch(error){
        console.log('Ups! '+error.message);
        process.exit(1); // codigo error
    }
}

function Start(){
    const args=process.argv.slice(2);

    //modo ayuda
    if(args.includes('--help') || args.includes('-h')){
        Ui.showHelp();
        process.exit(0); //codigo success
    }

    if(args.length<3){
        console.log('Faltan argumentos! Uso: <valor> <unidad-inicio> <unidad-destino>');
        console.log('Usa "memconvert --help" o "memconvert -h" para ver opciones');
        process.exit(1); //codigo error
    
    } else if(args.length>=3){
        if(args.length>3){
            console.log('Demasiados argumentos!');
            console.log('Advertencia: El uso es <valor> <unidad-inicio> <unidad-destino>. Argumentos adicionales serán ignorados');
        }
        console.log();
        CommandLine(args);
    }
}

Start();