// if

// 1.

const isDay = true;
const color = isDay ? "blue" : "white";
const day = isDay ? "Light" : "Dark";
const background = isDay ? "yellow" : "black";

if (isDay) {
  document.write(
    `<button style = color:blue;background-color:yellow>Light theme</button>`
  );
} else {
  document.write(
    `<button style = color:white;background-color:black;>Dark theme</button>`
  );
}
//Тернарний оператор
document.write(
  `<button style = color:${color};background-color:${background}> ${day} theme</button>`
);
//2.
const isOnline = true;

if (!isOnline) {
  alert("Ваше повідомлення буде відправлено при підєднанні до мережі Інтернет");
}

//3.
// const price = +prompt("Input product price");

// if (price > 500) {
//   document.write(price - (price * 3) / 100);
// } else if (price > 800) {
//   document.write(price - (price * 5) / 100);
// } else {
//   document.write("No discount");
// }

//4. В окремому файлі

//switch...case

//  1.

/*const dayOfWeek = prompt("Input day of the week: 1-Monday, 2 - Tuesday, 3-Wednesday,4 - Thusday, 5- Friday,6-Saturday,7-Sunday ");

switch (dayOfWeek) {
  case "1":
    console.log("Monday");
    break;
  case "2":
    console.log("Tuesday");
    break;
  case "3":
    console.log("Wednesday");
    break;
  case "4":
    console.log("Thursday");
    break;
  case "5":
    console.log("Friday");
    break;
  case "6":
    console.log("Saturday");
    break;
  case "7":
    console.log("Sunday");
    break;
  default:
    console.log("Input name doesn't exist");
    break;
} */

// 2.

/*const day1 = prompt("Input");

switch (day1) {
  case "1":
  case "2":
  case "3":
  case "4":
    // i тд.
    console.log("First decade");
    break;
  case "20":
    console.log("Second decade");
    break;
  case "25":
    console.log("Third decade");
    break;
  default:
    console.log("Not in the scope");
}*/
