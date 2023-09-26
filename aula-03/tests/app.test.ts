//suite de testes
//agrupamento de testes que fazer sentido ficarm juntos

import calculator from "calculator"


describe("Testes calculadora",() => {
    it("return true for sum", () => {

        expect(calculator.sum(1,2)).toBe(3)
    })
    it("return true for sub", () => {
        expect(calculator.sub(1,2)).toBe(-1)
    })
    it("return true for multiplicate", () => {  
        expect(calculator.mul(1,2)).toBe(2)
    })
    it("return true for division", () => {
        expect(calculator.div(2,1)).toBe(2)
    })
})