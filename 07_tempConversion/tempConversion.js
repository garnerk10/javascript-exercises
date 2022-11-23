const ftoc = function(fahr) {
  let newCTemp = ((fahr - 32) * (5/9));
  let roundCTemp = Number(newCTemp.toFixed(1));

  return roundCTemp
};

const ctof = function(cels) {
  let newFTemp = (cels * (9/5) + 32);
  let roundFTemp = Number(newFTemp.toFixed(1));

  return roundFTemp
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
