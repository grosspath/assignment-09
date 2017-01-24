
// Part 08: getSeasonForMonth()

// Write a function called getSeasonForMonth() that accepts
// an integer as an argument and returns the season of year.
//   e.g. getSeasonForMonth(6) => 'summer'

// The function should be built to accept integer values
// of 1-12.
//
// It should also return false if the function is given
// bad input.
var getSeasonForMonth = function (month) {
  if ((typeof month !== 'number') || (month < 1) || (month > 12)) {
    return false;
  } else if (month === 1) {
    return "winter";
  } else if (month === 2) {
    return "winter";
  } else if (month === 3) {
    return "spring";
  } else if (month === 4) {
    return "spring";
  } else if (month === 5) {
    return "spring";
  } else if (month === 6) {
    return "summer";
  } else if (month === 7) {
    return "summer";
  } else if (month === 8) {
    return "summer";
  } else if (month === 9) {
    return "fall";
  } else if (month === 10) {
    return "fall";
  } else if (month === 11) {
    return "fall";
  } else {
    return "winter";
  }
}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( getSeasonForMonth(1) === "winter")
console.assert( getSeasonForMonth(3) === "spring")
console.assert( getSeasonForMonth(5) === "spring")
console.assert( getSeasonForMonth(7) === "summer")
console.assert( getSeasonForMonth(9) === "fall")
console.assert( getSeasonForMonth(12) === "winter")

console.assert( getSeasonForMonth(13) === false)
console.assert( getSeasonForMonth(32) === false)
console.assert( getSeasonForMonth(0) === false)
console.assert( getSeasonForMonth("June") === false)
