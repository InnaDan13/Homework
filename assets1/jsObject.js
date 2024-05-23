//1.

const customer = {
    name: 'Test',
    surname: 'Testowych',
    email: 'testtestowych@ua.com',
    password:'qwerty123',
    phone: +3812445768,
    adres:{
        street:'Kromera',
        city:'WR',
        postcode:'51-163',
    },
}
console.log(customer.adres);
customer.phone = '+3802354565332'
delete customer.adres;
console.log(customer);

const customerCopy = Object.assign({},customer)
console.log(customerCopy === customer);//->false

const customerCopy1 = {...customer}
console.log(customerCopy1 === customer);//->false

//2.
const cat = {   
    name: 'Murka',
    color: 'black',
    isMale: false,
    isFurnitureDemage: true,

}

//3.

