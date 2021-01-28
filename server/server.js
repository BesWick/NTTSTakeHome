var express = require('express')
var bodyParser = require('body-parser')
var config = require('./config')
const app = express()

//configure API to use bodyparser and look for JSON data in the request body
app.use(require('cors')())

app.use('/api', require('./metrics/router'))

app.listen(config.express.port, config.express.ip, function (error) {
    if (error) {
        console.log('Error: Unable to listen for connections', error)
        process.exit(10)
    }
    console.log(
        'server is listening on http://' +
            config.express.ip +
            ':' +
            config.express.port,
    )
})
