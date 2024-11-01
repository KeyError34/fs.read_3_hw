const fs = require('fs');

const fileName = 'info.txt';
const content = 'Node.js is awesome!';

fs.writeFile(fileName, content, 'utf8', (err) => {
  if (err) {
    console.error('Error with create and with touche file:', err);
    return;
  }
  console.log(`File "${fileName}" was created and touched`);

  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error('Error with reading file:', err);
      return;
    }
    console.log(`File "${fileName}":`, data);
  });
});
