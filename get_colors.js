const getColors = require('get-image-colors');
const path = require('path');

getColors(path.join(__dirname, 'public/images/LOGO.jpeg')).then(colors => {
  console.log("Colors extracted:");
  colors.forEach(color => {
    console.log(color.hex());
  });
}).catch(err => {
  console.error("Error:", err);
});
