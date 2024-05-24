//1.

const customer = {
  name: "Test",
  surname: "Testowych",
  email: "testtestowych@ua.com",
  password: "qwerty123",
  phone: +3812445768,
  adres: {
    street: "Kromera",
    city: "WR",
    postcode: "51-163",
  },
  isMale: false,
  changePhone(newPhone) {
    this.phone = newPhone;
  },
  getFullAddress() {
    return `${this.adres.postcode} ${this.adres.city} ${this.adres.street}`;
  },
};

customer.changePhone("123456");
console.log(customer.phone);
console.log(customer.getFullAddress());

delete customer.adres;
console.log(customer);
//копіювання обєктів
const customerCopy = Object.assign({}, customer);
console.log(customerCopy === customer); //->false

const customerCopy1 = { ...customer };
console.log(customerCopy1 === customer); //->false

//2.
const cat = {
  name: "Murka",
  color: "black",
  isMale: false,
  isFurnitureDemage: true,
};

for (const key in cat) {
    console.log(key);}

//3.

 function Book (author,title,year,publish,price){
    this.author = author;
    this.title = title;
    this.year = year;
    this.publish=publish;
    this.price = price;
    this.getAge = function() {
        return new Date().getFullYear() - this.year
      };
 }

 const book1 = new Book('Євгенія Кузнєцова',"Драбина",'2022','Видавництво Лева',50)
 console.log(book1);