const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	
  let sum = 0;
  arr.forEach(item => {
    sum += item;
  });
  return sum;
};

const multiply = function(arr) {
  let total = 1;

  arr.forEach(item => {
    total *= item;
  });
  return total;
};

const power = function(a,b) {

  return a ** b;
	
};

const factorial = function(num) {
	let final = 1;
  for (let i=num; i>0; i--){
    final *= i;
  }
  return final;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
