const http = require('http')
const port = 8080

const server = http.createServer()



server.listen(port,() =>{

console.log (`Server is listening to port ${port}`);

})