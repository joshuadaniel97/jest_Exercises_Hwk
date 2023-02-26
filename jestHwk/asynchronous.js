function greetings(){
    return new Promise((resolve, reject) =>{
        resolve('Good day to you');
        
    })
}

module.exports= {greetings}