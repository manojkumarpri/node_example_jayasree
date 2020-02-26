const http=require('http');
const app=require('./appp');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
const port=process.env.PORT || 3005;
const server=http.createServer(app);
server.listen(port);
console.log("port is:"+port);
