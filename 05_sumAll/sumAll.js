const sumAll = function(...nums) {
  if (nums.length !== 2) { return 'ERROR' };
  if (nums.filter(x => typeof x !== 'number').length) { return 'ERROR' };
  if (nums.filter(x => x<0).length) { return 'ERROR' };
  nums.sort();
  return nums[1]*(nums[1]+1)/2 - nums[0]*(nums[0]-1)/2;
};

// Do not edit below this line
module.exports = sumAll;
