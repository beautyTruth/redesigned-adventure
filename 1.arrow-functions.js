//----------------------------- Example 1 -----------------------------

//------------------------------------Function Declaration
// function randomNumber() {
//   return Math.floor(Math.random() * 10);
// }

// let ranNum = randomNumber();
// console.log(ranNum);

//------------------------------------Arrow Function

// Longer;

// let randomNumber = () => {
//   return Math.floor(Math.random() * 10);
// };

// Shorter;

// let otherRandomNumber = () => Math.floor(Math.random() * 10);

// let ranNum = otherRandomNumber();
// console.log(ranNum);

//----------------------------- Example 2 -----------------------------

//------------------------------------Function Declaration

// function isPositive(num) {
//   return num >= 0;
// }

// let isPositiveResult = isPositive(5);
// console.log(isPositiveResult);

//------------------------------------Arrow Function

// Longer

// let isPositive = (num) => {
//   return num >= 0;
// };

// Shorter

// let isPositive = (num) => num >= 0;

// let isPositiveResult = isPositive(5);
// console.log(isPositiveResult);

//----------------------------- Example 3 -----------------------------

//------------------------------------Function Declaration

// function multiply(x, y) {
//   return x * y;
// }

// let multiplyResult = multiply(5, 15);
// console.log(multiplyResult);

//------------------------------------Arrow Function

// let otherMultiply = (a, b) => a * b;

// console.log(otherMultiply(10, 20));

//----------------------------- Example 4 -----------------------------
// const btn = document.querySelector(".nipple");

// btn.addEventListener("click", () => {
//   document.body.style.backgroundColor = "green";
// });

// btn.addEventListener(
//   "click",
//   () => (document.body.style.backgroundColor = "green")
// );

// -----------------------------ARRAY SORT METHOD----------------------------

// let names = ["John", "Sandy", "Mark", "Sandra"];
// let nums = [1, 5, 5, 9, 11, 8, 212, 55, 313, 115, 1245];

// console.log(names.sort());
// console.log(nums.sort());

// let sortFunc = nums.sort(function (a, b) {
//   return a - b;
// });

/*
if result > 0 -> b
if result = 0 -> unchanged
if result < 0 -> a
*/

// console.log(sortFunc); // small to big

// let sortFunc = nums.sort(function (a, b) {
//   return b - a;
// });

/*
if result > 0 -> a
if result = 0 -> unchanged
if result < 0 -> b
*/

// console.log(sortFunc); // big to small

// ----------------------ARRAY FOR EACH METHOD------------------

// const bestSongs = [
//   {
//     artist: "Bob Dylan",
//     song: "Like a Rolling Stone",
//   },

//   {
//     artist: "John Lennon",
//     song: "Imagine",
//   },

//   {
//     artist: "Chuck Berry",
//     song: "Johnny B. Goode",
//   },

//   {
//     artist: "Aretha Franklin",
//     song: "Respect",
//   },

//   {
//     artist: "The Beatles",
//     song: "Hey Jude",
//   },

//   {
//     artist: "Ray Charles",
//     song: "What'd I Say",
//   },
// ];

// bestSongs.forEach((bestsong) => console.log(bestsong));

// ---------------------ARRAY MAP METHOD---------------------

// loops over the array and creates a new array of the value from the specified key

// const bestSongs = [
//   {
//     artist: "Bob Dylan",
//     song: "Like a Rolling Stone",
//   },

//   {
//     artist: "John Lennon",
//     song: "Imagine",
//   },

//   {
//     artist: "Chuck Berry",
//     song: "Johnny B. Goode",
//   },

//   {
//     artist: "Aretha Franklin",
//     song: "Respect",
//   },

//   {
//     artist: "The Beatles",
//     song: "Hey Jude",
//   },

//   {
//     artist: "Ray Charles",
//     song: "What'd I Say",
//   },
// ];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// let artists = bestSongs.map((bestSong) => bestSong.artist);
// console.log(artists);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-ARRAY REDUCE METHOD-=-=-=-=-=-=-=-=-=-=-=

const nums = [1, 2, 3, 4, 5];

const total = nums.reduce(sum, 0);

function sum(accumulator, value) {
  return accumulator + value;
}

console.log(total);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=ARRAY FILTER METHOD=-=-=-=-=-=-=-=-=-=-=-=-=-

// const bestSongs = [
//   {
//     artist: "Bob Dylan",
//     song: "Like a Rolling Stone",
//     year: 1965,
//   },

//   {
//     artist: "John Lennon",
//     song: "Imagine",
//     year: 1971,
//   },

//   {
//     artist: "Chuck Berry",
//     song: "Johnny B. Goode",
//     year: 1958,
//   },

//   {
//     artist: "Aretha Franklin",
//     song: "Respect",
//     year: 1967,
//   },

//   {
//     artist: "The Beatles",
//     song: "Hey Jude",
//     year: 1968,
//   },

//   {
//     artist: "Ray Charles",
//     song: "What'd I Say",
//     year: 1959,
//   },
// ];

// let songYears = bestSongs.filter((songYear) => songYear.year >= 1965);
// console.log(songYears);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-ARRAY FIND METHOD-=-=-=-=-=-=-=-=-=-=-=-=-=-

// const bestSongs = [
//   {
//     artist: "Bob Dylan",
//     song: "Like a Rolling Stone",
//     year: 1965,
//   },

//   {
//     artist: "John Lennon",
//     song: "Imagine",
//     year: 1971,
//   },

//   {
//     artist: "Chuck Berry",
//     song: "Johnny B. Goode",
//     year: 1958,
//   },

//   {
//     artist: "Chuck Berry",
//     song: "The Second One",
//     year: 1959,
//   },

//   {
//     artist: "Aretha Franklin",
//     song: "Respect",
//     year: 1967,
//   },

//   {
//     artist: "The Beatles",
//     song: "Hey Jude",
//     year: 1968,
//   },

//   {
//     artist: "Ray Charles",
//     song: "What'd I Say",
//     year: 1959,
//   },
// ];

// let artistNames = bestSongs.find(
//   (artistName) => artistName.artist === "Chuck Berry"
// );
// console.log(artistNames);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-OBJECT KEYS METHOD-=-=-=-=-=-=-=-=-=-

// let favColors = {
//   colorOne: "Green",
//   colorTwo: "Blue",
//   colorThree: "Brown",
// };

// let keys = Object.keys(favColors);
// console.log(keys);

// keys.forEach((key) => console.log(key));

// -=-=-=-=-=-=-=-=-=-=-=-=-OBJECT VALUES METHOD-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// let favColors = {
//   colorOne: "Green",
//   colorTwo: "Blue",
//   colorThree: "Brown",
// };

// let values = Object.values(favColors);
// console.log(values);

// values.forEach((value) => console.log(value));

//-=-=-=-=-=-=-=-=-=-=-=-=-OBJECT ENTRIES METHOD-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// let favColors = {
//   colorOne: "Green",
//   colorTwo: "Blue",
//   colorThree: "Brown",
// };

// let entries = Object.entries(favColors);
// console.log(entries);

// entries.forEach((entry) => console.log(entry));
