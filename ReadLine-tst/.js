//Node.js
// 1
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var x, y;

rl.on('line', function (line) {

        var tmp = line.split(' ');
        x = parseInt(tmp[0]);
        y = parseInt(tmp[1]);
        var z = x + y;
        console.log(z);
    }
)



// 2
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var cnt = 0;
var n, sum = 0;

rl.on('line', function (line) {
    if (cnt == 0) {
        n = parseInt(line);
        cnt++;
    }
    else {
        var tmp = line.split(' ');
        for (var i = 0 ; i < n ; i++) {
            sum += parseInt(tmp[i]);
        }
        console.log(sum);
    }
})







//JavaScript (V8)
// 1
var array = readline().split(' ');
var x = parseInt(array[0]);
var y = parseInt(array[1]);
console.log(x + y);



// 2
var n = parseInt(readline());
var a = readline().split(' ');
var result = 0;
for (var i = 0 ; i < n ; i++)
{
    result += parseInt(a[i]);
}
console.log(result);