const removeFromArray = function(arr, ...removeArgs) {
  const cleanedArr = [];
  arr.forEach(x => {
    if (!removeArgs.includes(x))  {
      cleanedArr.push(x);
    }
  });
  return cleanedArr;
};

// Do not edit below this line
module.exports = removeFromArray;
