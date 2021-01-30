var express = require('express')
var join = require('path').join

var router = new express.Router()

function home(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
}

router.use(express.static(join(__dirname, 'build')))
router.get('/', home)
module.exports = router
