//0.
const newMas = [];
newMas.push(3, 4, 5, 6, 7, 8);
//1.
newMas.pop(); //delete last el
newMas.shift(); //delete first el
newMas.unshift("firstAdded");
newMas.push("lastAdded");
//2.
console.log(newMas.length);
//3.
const copyMas = [...newMas];
//4.
const mas = [1, 5, 6, 9, 8];

for (let i = 1; i < mas.length; i++) {
  if (i % 2 === 0) {
    console.log(mas[i]);
  }
}
//5.
let mult = 1;

for (let el in mas) {
  mult *= mas[el];
}
console.log(mult);

//6.
const phones = [
  {
    id: 1,
    picture_link: "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/58/5860452/Smartfon-APPLE-iPhone-15-Pro-Tytan-bialy-1.jpg",
    brand: "Apple",
    model: "iPhone 14",
    color: "Black",
    price: 999,
    ram: "6GB",
  },
  {
    id: 2,
    picture_link: "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/58/5860452/Smartfon-APPLE-iPhone-15-Pro-Tytan-bialy-1.jpg",
    brand: "Samsung",
    model: "Galaxy S23",
    color: "Silver",
    price: 899,
    ram: "8GB",
  },
  {
    id: 3,
    picture_link: "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/41/4117878/Smartfon-APPLE-Fioletowy-1.jpg",
    brand: "Google",
    model: "Pixel 7",
    color: "Blue",
    price: 799,
    ram: "8GB",
  },
];

let sum = 0;

for (let i = 0; i < phones.length; i++) {
    sum += phones[i].price;

  document.write(
    ` <section>
    <article>
    <img src="${phones[i].picture_link}" alt ='phone picture'/>
    <h2>${phones[i].brand} ${phones[i].model}</h2>
    <p>${phones[i].color}</p>
    <p>${phones[i].price} UAH</p>
    <p>${phones[i].ram}</p>
  </article>
  </section>`
  );
}
document.write(`<span>${sum / phones.length}</span>`)

//8.
const arr = [-1, 5, 0, 9, -10,4,5,7,9,3 ]
const arrWithoutZero = arr.filter(el=> el !==0)
//9.
const arr1 =[ 99, 5, 0, 9, 30 ]
const arrDevidedHundred = arr1.map(el=> el/100)
//10.
arr.forEach(el=> console.log(el**3))
//11.
const deleteElem = phones.findIndex((el,index)=> (index**2 ===100))
phones.splice(deleteElem, 1);
//12.
const isEven = arr.every((el) => el%2===0);
//13.
const isMinus = arr.some((el) => el<0);
