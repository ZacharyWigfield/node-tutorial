var http = require('http')
var fs = require('fs')

// the entire point of this module is to send our large file to the server in chunks rather than in one large piece
// pipe method pushes from read stream to write stream
http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)