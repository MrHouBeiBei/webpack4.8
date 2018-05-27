

var fn1 = function () {
    console.log('process.env.NODE_ENV', process.env.NODE_ENV)
}

module.exports = {
    a: fn1
}