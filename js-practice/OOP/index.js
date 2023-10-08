class Persoon {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`hello ${this.name},${this.age}`);
  }
}

class Employee extends Persoon {
  constructor(name, age, role) {
    super(name, age);
    this.role = role;
    
  }
  greetss() {
    console.log(`hello ${this.name},${this.age}`);
  }
}
let Bob = new Employee("bob", 25, "pune");
console.log(Bob);
Bob.greet();
let chris = new Employee("chris", 30, "dev");
Employee.prototype.greets = function (params) {
  console.log(`you are fired ${this.name}`);
};
chris.greets();  
console.log(chris);

class Clothes {
  constructor(shirts = [], pants = []) {
    this.shirts = shirts;
    this.pants = pants;
  }
  addShirt(...shrtObj) {
    this.shirts.push(...shrtObj);
  }
  addPant(...pantObj) {
    this.pants.push(...pantObj);
  }
}
class Customer {
  constructor(name, creditBalance) {
    this.name = name;
    this.creditBalance = creditBalance;
  }
  canBuy(itemToBuy) {
    if (this.creditBalance >= itemToBuy.price) {
      console.log(`you can buy this ${itemToBuy.name}`);
      let accBalance = 40000;
      if (this.creditBalance <= accBalance) {
        accBalance -= this.creditBalance;
        console.log(accBalance);
      } else {
        console.log(`your account balance is negative`);
      }
    } else {
      console.log("you cannot afford");
    }
  }
}
class Shirt {
  constructor(name, type, size, ageGroup, price) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.ageGroup = ageGroup;
    this.price = price;
  }
}

class Pants {
  constructor(name, type, size, ageGroup, price) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.ageGroup = ageGroup;
    this.price = price;
  }
}

let shirtCatagorey = new Clothes();
let pantCatagorey = new Clothes();

let shirt1 = new Shirt("shirt1", "cotton", "large", 18, 5000);
let shirt2 = new Shirt("shirt2", "chicken", "large", 18, 10000);
let pant1 = new Pants("pant1", "cotton", "small", 20, 15000);
let pant2 = new Pants("pant2", "chicken", "small", 20, 20000);

let Customer1 = new Customer("Raza", 30000);
shirtCatagorey.addShirt(shirt1, shirt2);
pantCatagorey.addPant(pant1, pant2);
console.log(shirtCatagorey);
console.log(pantCatagorey);
Customer1.canBuy(pant2);
