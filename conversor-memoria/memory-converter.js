//@ts-nocheck

class MemoryConverter{

    static unitMaps={
        'bytes':{factor:1, name:'bytes'},
        'kb':{factor:2**10, name:'kilobytes'},
        'mb':{factor:2**20, name:'megabytes'},
        'gb':{factor:2**30, name:'gigabytes'},
        'tb':{factor:2**40, name:'terabytes'}
    }

    static FormatResult(result, targetUnit){
        const unitInfo=this.unitMaps[targetUnit.toLowerCase()];
        if(!unitInfo) return `${result} ${targetUnit}`;
        return `${result.toFixed(4)} ${unitInfo.name}`;
    }

    static convertSingular(validInput, startUnit, targetUnit){
        //convierte a bytes como unidad base
        const value=validInput*this.unitMaps[startUnit.toLowerCase()].factor;
        //desde bytes convierte a la unidad deseada
        const result=value/this.unitMaps[targetUnit.toLowerCase()].factor;
        return{
            value:result,
            formatted:this.FormatResult(result, targetUnit)
        };
    }

    static convertAll(validInput, startUnit){
        const results={};
        const unitKeys=Object.keys(this.unitMaps);
        for(const targetUnit of unitKeys){
            if(targetUnit!==startUnit){
                results[targetUnit]=this.convertSingular(validInput,startUnit,targetUnit);
            }
        }
        return results;
    }
}

module.exports={ MemoryConverter, unitMaps: MemoryConverter.unitMaps } //ignorar advertencia para typescript