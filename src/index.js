module.exports = function toReadable (number) {
  const numberToString = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };

  let result = '';
  let single = number % 10;
  let dozen = number - single;
  let hundreds = numberToString[Math.trunc(number / 100)] + ' hundred '
  
 
  if (number < 20) {
      result = numberToString[number];
  } 
  else if (number < 100 && number % 10 === 0) {
      result = numberToString[dozen];
  }
  else if (number < 100){
      result = numberToString[dozen] + ' ' + numberToString[single];
  }
  else if (number % 100 === 0) {
      result = numberToString[Math.trunc(number / 100)] + ' hundred';
  } 
  else if (number % 100 < 20) {
      result = hundreds + numberToString[number % 100 ];
  }
  else if (number % 10 === 0) {
      result = hundreds + numberToString[number % 100] ;
  }         
  else {
      result = hundreds + numberToString[number % 100 - single] + ' ' + numberToString[single];
  }
  return result;
}

const toReadable = require('./');



