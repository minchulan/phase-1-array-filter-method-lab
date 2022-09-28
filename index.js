// findMatching()
function findMatching(drivers, name) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === name.toLowerCase()
  );
  // drivers.filter(function (driver) {
  //     return driver === name;
  // })
}

//fuzzyMatch()
// strings and arrays have overlapping methods: split(), join(), slice()
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.slice(0, letters.length) === letters)
}

//matchName()
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase === name.toLowerCase())
}

// const drivers = [
//   {
//     name: "Bobby",
//     hometown: "Pittsburgh",
//   },
//   {
//     name: "Sammy",
//     hometown: "New York",
//   },
//   {
//     name: "Sally",
//     hometown: "Cleveland",
//   },
//   {
//     name: "Annette",
//     hometown: "Los Angeles",
//   },
//   {
//     name: "Bobby",
//     hometown: "Tampa Bay",
//   },
// ];