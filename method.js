var pi = 3.14
var obj = {}
obj.updateData = function() {
    console.log('update Data')
}
obj.deleteUser = function() {
    console.log('Delete User')
}

var add = function(a,b) {
    return a+b
}

var update = function() {
    return 'update server'
}
exports.add = add
exports.pi = pi
exports.update = update
exports.data = obj