// sum.test.js
import { describe, expect, test } from 'vitest'
import { addArray, sum } from '../../src/helpers/sum';

describe('add function', ()=> {
    test('adds 1 + 2 to equal 3', () => {
        //Preparación
        const a = 1
        const b = 2
        // Estímulo
        const resultado = sum(a,b)
        // Comportamiento esperado
        expect(resultado).toBe(3)
    })
})

describe('addArray function', ()=> {
    test('Should return the proper value of the addArray function', () => {
        const arrayMock = [1,2,3,4]
        const resultado = addArray(arrayMock)
        expect(resultado).toBe(10)
    })
    
    test('should return 0 if the array is empty', () => {
        const arrayMock = []
        const resultado = addArray(arrayMock)
        expect(resultado).toBe(0)
    })
})
