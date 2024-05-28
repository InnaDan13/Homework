function User(name, surname, age, isMale, email, isSubscribed) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribed =isSubscribed;
  }
  
  User.prototype.getFullName = function () { document.write(`<ol>${this.firstName} 
  ${this.lastName}</ol>`)}

//   const users = [user1,user2,user3];
  
//   for (let i = 0; i < 10; i++) {
//     const user = new User(
//       `Username${i}`,
//       `Usersurname${i}`,
//       Math.floor(Math.random() * 90),
//       Math.random() < 0.5,
//       `useremail${i}@gmail.com`,
//       Math.random() < 0.5
//     );
//     users.push(user);
//   }

//   console.table(users);

const user1 = new User('Test','Testowycz',15,true,'blabla@gmaill',true)
const user2 = new User('Test2','Testowycz2',25,false,'useremail5@gmail.com',true)
const user3 = new User('Test3','Testowycz3',7,true,'blablabla@gmail',false)
const users = [user1,user2,user3];

//Отримати масив користувачів, які не підписані (not subscribed).
const notSubscribed = users.filter((el)=> el.isSubscribed ==false)
//Вивести список повних імен користувачів.
const fullName = users.map((el)=> el.getFullName())
//Отримати масив повних імен осіб жіночої статі шкільного віку (6 – 18 років).
const femaleSchoolAge = users.filter((el)=> el.isMale ===false && el.age> 6 && el.age<18)
//Видалити з масиву користувача з email  useremail5@gmail.com.
const deleteEmail = users.findIndex((el)=>el.email === 'useremail5@gmail.com') 
users.splice(deleteEmail, 1);
//Змінити email користувачу з id 2 (можна спробувати використати find).
const changeEmail = users.findIndex((el,index)=> index===2)
users[changeEmail].email = 'changed@gmail'
//*Знайти середній вік користувачів (спробувати використати reduce).
const avarageAge = users.reduce((accum,current)=>accum + current.age,0)/users.length
//*Впорядкувати користувачів за віком (sort).
const sortByAge = users.sort((a,b)=>a.age - b.age)
//*Перевірити, чи всі користувачі підписані (subscribed).
const allSubscribed = users.every(el => el.isSubscribed===true)

//*Перевірити, чи є серед користувачів користувач з email`ом useremail7@gmail.com.
//*Визначити, який відсоток користувачів підписані (subscribed).

