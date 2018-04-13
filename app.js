var numberStoreList = require ("./numberStoreList.js");
var listSorter = require ("./listSorter.js");
var input = process.argv.slice(2);
input.forEach(function(num) {
  numberStoreList.numberStore(num);
});
var result = listSorter(numberStoreList.returnList());
console.log(result);