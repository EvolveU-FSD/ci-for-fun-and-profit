const sum = require('../sum')

describe('sum', () => {
    it('should add two positive numbers', () => {
        let result = sum(1, 2)
        expect(result).toBe(3)
    })
    it('should add three numbers', () => {
        let result = sum(2,3,5)
        expect(result).toBe(10)
    })
    it('should add 0 to a number and get the number back', () => {
        let result = sum(1, 0)
        expect(result).toBe(1)
    })
    it('should be ok with strings', () => {
        let result = sum('1', '3', '5')
        expect(result).toBe(9)
    })
    it('should be ok with strings that are not numbers', () => {
        let result = sum('1', '3', 'hello')
        expect(result).toBe(4)
    })
    it('should be ok with null values', () => {
        let result = sum('1', '3', null)
        expect(result).toBe(4)
    })
    it('should be ok with undefined values', () => {
        let result = sum('1', '3', undefined)
        expect(result).toBe(4)
    })

})