
function arrayDiff(a, b) {
  return a.filter(x => b.indexOf(x) === -1);
}
console.log(arrayDiff([ 1, 2, 3, 4, 5 ],[ 4, 5, 6 ] ))