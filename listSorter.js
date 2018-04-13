function sortList(importList) {
  importList.sort(function compareNumbers(a, b) {
  return a - b;
});
  return importList;
}
function returnSortList(list) {
  sortList(list);
  return list;
}
module.exports = returnSortList;