var router = require('express').Router()
var patent = require('./patent-model')
var metric = require('./metrics')

function getMetrics(req, res) {
    patent.getAll((err, patents) => {
        if (err) {
            console.log('Error:Retrieving Patents', err)
            res.status(500).send(err)
            return
        }
        const [categoryMap, centerMap] = metric.calcMetrics(patents)
        res.send({
            category: categoryMap,
            center: centerMap,
        })
    })
}

router.get('/metrics', getMetrics)

module.exports = router
