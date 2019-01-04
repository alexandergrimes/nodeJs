const csv = require('csvtojson')
const fs = require('fs')
const csvFilePath = 'customer-data.csv'

csv()
 .fromFile(csvFilePath)
 .then((jsonObj) => {
   str = JSON.stringify(jsonObj, null, 2);
   fs.writeFile('customer-data.json', str, (err) => {
     if (err) throw err;
     console.log("JSON successfully converted");
   })
 })
