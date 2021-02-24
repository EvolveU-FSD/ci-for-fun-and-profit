
function sum(...numbers) {
    return numbers.reduce((accum, value) => value+accum, 0)
}

module.exports = sum
