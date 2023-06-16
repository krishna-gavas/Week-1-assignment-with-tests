const fs = require('fs');

function cleanContent(err, data) {
    if (err) {
        console.error(err);
        return;
    }

    let fileContent = data.replace(/\s\s+/g, ' ').trim();

    fs.writeFile('text3.txt', fileContent, 'utf8', (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('File has been cleaned successfully');
    });
}

fs.readFile('text3.txt', 'utf8', cleanContent);
