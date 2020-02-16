var input = "Hello World!"

function balikString(str) {
    var output = "";
    for (var i = 0; i < str.length; i++){
        output += str[str.length - i - 1]
    }
    return output
}

console.log(balikString(input))