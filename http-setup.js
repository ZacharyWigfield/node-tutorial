const http = require('http')

// here we spin up our server and then listen for incoming request. req and res are commonly used for the parameters, but you could user any name. 
// req is the incoming server request, res is the result our server spits back.
// Here our server checks the url property of req to see where it should route. We have a home, about, and catch all page depending on what the user types into the url.
// You can respond with straight HTML which I find neat
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`<h1>Ooops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000)