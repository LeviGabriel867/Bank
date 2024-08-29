export const soma = (num:number):number => {
    return num + 1;
}

export const multiplica =(num:number, mult:number):number | string  =>{
    if(num===2 || num ===3){
        return num * mult
    }
    return 'multiplicador deve ser igual 2 ou 3 por gentileza'
}