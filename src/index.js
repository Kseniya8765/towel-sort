
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    let arr = [];

    for (let i =0; i < matrix.length; i++){ // row (index)
    for (let j= 0; j < matrix[i].length; j++){ //row element (column index)

        let columnIdx = i % 2 === 0  
        ? j
        : (matrix[i].length - j - 1); // reverse order
        
        arr.push(matrix[i][columnIdx]);
    }  
    }
  return arr;
}
