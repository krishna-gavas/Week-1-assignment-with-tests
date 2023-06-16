const fs = require('fs');

const content = 'This is code to write to a file in JS \n';

fs.writeFile('file2.txt', content, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Content has been written to the file');
});

// fs.appendFile('file2.txt', content, 'utf8', (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log('Content has been appended to the file.');
// });

let count = 0;
for(let i=0;i<1000000000;i++) {
    count += 1;
}
console.log(count);