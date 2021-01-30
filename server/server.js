var express = require('express')
var bodyParser = require('body-parser')
var config = require('./config')
const app = express()
app.use(require('cors')())

// Load the routes
app.use(require('./site/router'))
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
