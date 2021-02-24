function toInt(couldBeAnything) {
    if (couldBeAnything === null) return 0
    if (couldBeAnything === undefined) return 0
    let possibleInteger = parseInt(couldBeAnything)
    if (Number.isNaN(possibleInteger)) return 0
    return possibleInteger
}

function sum(...numbers) {
    return numbers.reduce((accum, value) => accum+toInt(value), 0)
}

module.exports = sum
