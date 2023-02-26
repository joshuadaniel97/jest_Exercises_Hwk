const {divide} = require("./functions")
const {multiply} = require("./functions")
const {subtract} = require("./functions")

// subtract tests
describe("checking subtract function", () =>{
    let result = subtract(79, 37)
     it("check subtract function to return a value", () =>{
         expect(result).toBe(42)
     })

     it("Subtracting 16 - 9 does not result in number < 6" , () =>{
        expect(subtract(16,9)).not.toBe(6)
     })
 
 })

// multiply tests
describe("checking multiply function", () =>{
    let res = multiply(17, 64)
    it("check multiply to return a number ", () =>{
        expect(res).toBe(1088)
    })

    it("multiply 2 numbers that are > 100", () =>{
        expect(multiply(67,3)).toBeGreaterThan(100)
    })
})

// divide tests
describe("checking divide function", () =>{
    let result = divide(10,2)
     it("check divide function to return a value", () =>{
         expect(result).toBe(5)
     })

     it("Divide 2 numbers that are >= 30", () =>{
        expect(divide(48,8)).toBeLessThanOrEqual(30)
     })
 
 })