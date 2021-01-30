/**
 * calculate 2 metrics:
 * i.	Number of patents per portfolio category
 * ii.	Number of patents per NASA field center
 *
 */
function calcMetrics(arr) {
    const categoryMap = {}
    const centerMap = {}

    arr.forEach((ele) => {
        categoryMap[ele.category] = (categoryMap[ele.category] || 0) + 1
        centerMap[ele.center] = (centerMap[ele.center] || 0) + 1
    })

    return [categoryMap, centerMap]
}

exports.calcMetrics = calcMetrics
