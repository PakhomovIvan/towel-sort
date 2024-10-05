module.exports = function towelSort(matrix) {
  if(!matrix) return [];
  
  let result = [];

  matrix.forEach((e, i) => {
    if (i % 2 !== 0) {
      result.push(e.reverse());
    } else {
      result.push(e);
    }
  });
  
  return result.flat();
}
