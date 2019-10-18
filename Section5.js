// This is an example of how to pass functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalculator(arr, fctn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fctn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  }
  else {
    return -1
  }
}

var ages = arrayCalculator(years, calculateAge);
console.log(ages);
var fullAges = arrayCalculator(ages, isFullAge);
console.log(fullAges);
var rates = arrayCalculator(ages, maxHeartRate);
console.log(rates);
