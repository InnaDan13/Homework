let firstNAme = "Anonymous";
// prompt("Input name:", "Anonymous");
let secondNAme = "Anonymous";
// prompt("Input name:", "Anonymous");
let phone = "+12536436";
// prompt("Input phone:", "12345");
let age = "18";
// prompt("Input age:", "18");
let link ="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  // "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";
const isLogin = true;
const loginColor = isLogin ? "green" : "black";
const mode = isLogin ? "Online" : "Offline";
const isFemale = true;
const genderColor = isFemale ? "deeppink" : "blue";
const isMaleCOlor = isFemale? "female" : "male"


document.write(
  `<div><article class=" ${isMaleCOlor}">
    <img src= "${link}" style = border-color:${genderColor} />
    <p style = color:${loginColor};> ${mode}</p>    
    <h2>${firstNAme} ${secondNAme}</h2>
    <h3> ${age} years old</h3>
    <p>${phone}</p>
    </article></div>
    `
);


