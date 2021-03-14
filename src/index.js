module.exports = function towelSort (matrix) {
  let res = [];
  if (!matrix) {
    return res;
  }
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    if (i % 2 === 0) {
      for (let j = 0; j < row.length; j++) {
        res.push(row[j]);
        }
      } else {
      for (let j = row.length - 1; j >= 0; j--) {
        res.push(row[j]);
        }
      }
    } 
  return res;
}
