
function sum(...numbers) {
    return numbers.reduce((accum, value) => accum+parseInt(value), 0)
}

module.exports = sum
