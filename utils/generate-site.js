const fs = require('fs');

const writeFile = fileContent => {
   console.log('hit writeFile');
   return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
         // if there's an error, reject the Promise and send the error to the promise's `.catch()` method
         if (err) {
            reject(err);
            // retrun out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
         }

         // if everything went well, resolve the Promise and send the successful data to the `/then()` method
         resolve({
            ok: true,
            message: 'File created!'
         });
      });
   });
};

const copyFile = fileContent => {
   return new Promise((resolve, reject) => {
      fs.copyFile('./src/style.css', './dist/style.css', err => {
         // if there is an error, reject the promise and send to .catch()
         if (err) {
            reject(err);
            // return out of the function to stop the code
            return;
         }

         // if it is good, resolve the Promise
         resolve({
            ok: true,
            message: 'File copied'
         });
      });
   });
};

module.exports = {
   writeFile: writeFile,
   copyFile: copyFile
};