module.exports = function towelSort (matrix) {
  if (matrix) {
      let newArr = matrix.join().split(',');
      newArr.sort(function(a,b){ 
          return a — b
        })
  }
}
