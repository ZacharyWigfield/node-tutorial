const { readFile, writeFile } = require('fs');

console.log('start')
// this shows how to do the same functionality of fs-module, but asynchronously. As you can see it's a bit of callback hell, so I imagine we will start utilizing promises or async/await next.
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt', `Here is the result asynchronously: ${first}, ${second}`, (err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('done with this task')
        })
    })
})
console.log('starting next task')