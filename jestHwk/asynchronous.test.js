const {greetings} = require('./asynchronous')

// Promise way 
// describe('checking greetings function', () => {
//     it(' checking promise ', () =>{
//         return greetings().then((res)=>{
//             expect(res).toBe('Good day to you')
//         })
//     })
// })


// Async/Await way 
describe('checking greetings function', () => {
    it('checking promise', async () => {
        const res = await greetings()
        expect(res).toBe('Good day to you')
    })

})
