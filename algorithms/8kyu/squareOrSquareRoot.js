function squareOrSquareRoot(array) {
  return array.map(num => {
    const sqrt = Math.sqrt(num);
    return Number.isInteger(sqrt) ? sqrt : num * num;
  });  
}