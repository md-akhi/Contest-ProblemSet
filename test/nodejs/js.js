
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});


rl.on('line', function (line) {
    
        n = parseInt(line);
        
        for (var i = 0 ; i < n ; i++) {
            console.log("man khoshghlab hastam");
        }
})