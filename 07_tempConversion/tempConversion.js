const ftoc = function(f) {
  return Math.round(10 * 5/9 * (f-32))/10;
};

const ctof = function(c) {
  return Math.round(10 * (9/5 * c + 32))/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
