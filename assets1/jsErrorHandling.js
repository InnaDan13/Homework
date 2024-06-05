function pow(base, exponent) {
  if (typeof base !== "number") {
    throw new TypeError("Base must be number");
  } else if (typeof exponent !== "number") {
    throw new TypeError("Exponent must be number");
  }

  if (!Number.isInteger(base) || base < 0) {
    throw new RangeError("base must be integer");
  }

  if (exponent === 0) {
    return 1;
  }
  return base * pow(base, exponent - 1);
}
try {
  console.log(pow(0, 2));
} catch (err) {
  if (err instanceof RangeError) {
    console.log("RangeError");
  } else if (err instanceof TypeError) {
    console.log("TypeError");
  } else {
    console.log("Error");
  }
  console.log(err);
}

//

function validateEmail(email) {
  // email = email.trim();
  if (typeof email !== "string") {
    throw new TypeError("email must be string");
  }
  if (email.length < 4 || email.length > 32) {
    //cant be less than 4 or not more than 32
    throw new RangeError("name must be more than 4 and less than 32 letters");
  }
  if (email.startsWith("@") || email.endsWith("@")) {
    throw new SyntaxError("na poczatku ne moze buty");
  }
  email = email.trim(); //додала трім в кінці бо 
  //як додаю зверху то при введенні числа замість емейла видає помилку що функція трім не існує

  return email;
}

try {
  console.log(validateEmail("@fgasrb@gmail.com"));
} catch (err) {
  if (err instanceof RangeError) {
    console.log("RangeError");
  } else if (err instanceof TypeError) {
    console.log("TypeError");
  } else {
    console.log("Error");
  }
  console.log(err);
}
