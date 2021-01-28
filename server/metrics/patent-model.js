const axios = require('axios')

//patent array structure
// 0:'id'
// 1:'reference number'
// 2:'title'
// 3:'abstract'
// 4:'client_record_id'
// 5:'category' <- WANT
// 6:'release type'
// 7:'catalog note'
// 8:'SW URL'
// 9:'Center' <- WANT
// 10:'Image Url'
// 11:'Subcategotu'

//convert input arr, an array containing arrays of strings to be
// an array of JSON objects, each representing a patent
function convertToJSON(arr) {
    const result = []
    if (arr.length == 0 || arr === null) {
        console.log('Error: Invalid Input Arr')
        return result
    }
    arr.forEach((ele) => {
        if (ele.length != 12) {
            console.log('Error: Invalid data')
            return result
        }
        result.push({
            id: ele[0],
            reference_number: ele[1],
            title: ele[2],
            abstract: ele[3],
            client_record: ele[4],
            category: ele[5],
            release_type: ele[6],
            catalog_note: ele[7],
            sw_url: ele[8],
            center: ele[9],
            image_url: ele[10],
            subcategory: ele[11],
        })
    })

    return result
}

const getAll = async (callback) => {
    try {
        const res = await axios.get(
            'https://technology-api.ndc.nasa.gov/api/patent',
        )
        const modifiedRes = convertToJSON(res.data.results)
        callback(null, modifiedRes)
    } catch (err) {
        console.error(err)
        callback(err)
    }
}

exports.getAll = getAll
