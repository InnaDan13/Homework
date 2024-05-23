//1.

function isWorkingAgePerson(age) {
  return age < 64 && age > 16
    ? `You are ${age} years old and are allowed to work`
    : `You are ${age} years old and are not allowed to work`;
}

console.log(isWorkingAgePerson(20));
console.log(isWorkingAgePerson(4));
console.log(isWorkingAgePerson(88));

//2.

function checkMultiplicity(a, b) {
  return a % b === 0;
}

console.log(checkMultiplicity(20, 10));
console.log(checkMultiplicity(15, 3));
console.log(checkMultiplicity(15, 4));

//3.

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a && a > 0 && b > 0 && c > 0;
}
console.log(isTriangle(2, 3, 0));

//4.
/**
 * Heron's formula
 * @param {number} b -The base of the triangle
 * @param {number} h - The height from the top to the base
 * @returns {number} -  SQuare
 */
function squareTriangle(a, h) {
  return (a * h) / 2;
}
console.log(squareTriangle(5, 3));

const squares = function squareRactangle(a, b) {
  return a * b;
}
console.log(squares(2, 6));

function shapeSquare(a) {
  return a ** 2;
}
console.log(shapeSquare(5));

//5.  Сама б до рішення не додумалась, але добре хоч шукати вмію:D

// Define a function named test_prime that checks whether a given number n is a prime number
function test_prime(n) {

  // Check if the number is equal to 1, which is not a prime number
  if (n === 1) {
    return false;
  }
  // Check if the number is equal to 2, which is a prime number
  else if (n === 2) {
    return true;
  } else {
    // Iterate from 2 to n-1 to check for factors of n
    for (var x = 2; x < n; x++) {
      // If n is divisible by x without a remainder, it is not a prime number
      if (n % x === 0) {
        return false;
      }
    }
    // If no factors are found, the number is a prime number
    return true;  
  }
}

console.log(test_prime(37));


//6.

const picture =
  "https://static4.arkanasmaku.pl/hpeciai/4c5bb1e3ed76e7ccb957b18228dc9a50/pol_pm_Cytryna-BIO-1-kg-48909_1.webp";
const name = "Lemon";
const description = "A fruit of yellow color and bitter taste";
const price = 20;
const priceDiscount = '3%';

function createProductCard(
  productImg,
  productName,
  productDescription,
  productPrice,
  productDiscount
) {
  if (productDiscount === undefined) {
    productDiscount = '';
  } 

  return `<article>
    <img src="${productImg}"/> 
    <h2>${productName}</h2>
    <p>${productDescription}</p>
    <p>${productPrice}HRN</p>
    <p>${productDiscount} </p>

  </article>`;
 
}

document.write(
  createProductCard(picture, name, description, price, priceDiscount)
);

//7. реалізоване в фігурах