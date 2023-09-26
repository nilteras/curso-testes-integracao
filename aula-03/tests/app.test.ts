//suite de testes
//agrupamento de testes que fazer sentido ficarm juntos


describe("Testes calculadora",() => {
    it("return true for sum", () => {
        const result = (1 + 2)

        expect(result).toBe(3)
    })
    it("return true for sub", () => {
        const result = (1 - 2)

        expect(result).toBe(-1)
    })
    it("return true for multiplicate", () => {
        const result = (1 * 2)

        expect(result).toBe(2)
    })
    it("return true for division", () => {
        const result = (2 / 1)

        expect(result).toBe(2)
    })
})