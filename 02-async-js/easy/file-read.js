const fs = require('fs');

function printContent(err, data) {
    if (err) {
        console.error(err);
        return;
    }

    console.log(data);
}

fs.readFile('file.txt', 'utf8', printContent);

let count = 0;
for(let i=0;i<1000000000;i++) {
    count += 1;
}
console.log(count);