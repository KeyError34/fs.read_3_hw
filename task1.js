const fs = require('fs');
const folderName = 'myFolder';

fs.mkdir(folderName, (err) => {
  if (err) {
    console.log(`Error with create dir`, err);
    return;
  }
  console.log(`Directoty ${folderName} was touchet`);
  setTimeout(() => {
  fs.rmdir(folderName, (err) => {
    if (err) {
      console.log(`Error with delete directory`, err);
      return;
    }
    console.log(`Directoty ${folderName} was deleted`);
  });
},1000)
  
});
