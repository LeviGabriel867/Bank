import {soma} from './Soma'
import { multiplica } from './Soma'
describe('soma', ()=>{
    it('deve somar 1 ao número informado', ()=>{
        const value = soma(10)
        expect(value).toBe(11)
    })
})

describe('multiplicacao', ()=>{
    
    it('Deve multiplicar o numero pelo valor desejado', ()=>{
        const value = multiplica(2, 3)
        expect(value).toBe(6)
    })
    it('Multiplicador deve ser 2 ou 3!', ()=>{
        const value = multiplica(2,2)
        expect(value).toBe(4)
    })
})