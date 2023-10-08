let myArr1 = [1, 2, 3];
let myArr2 = ["raza", "ali", "panjwani"];
let finalArr = [...myArr1, ...myArr2];
let anotherArr = [];

console.log(finalArr);

function addInArr(...args) {
  console.log(args);
  anotherArr.push(...args);
}

addInArr(1, 23, 4, 5);
console.log(anotherArr);

let myFullArr = [...myArr1.slice(0, 1), ...myArr2, ...myArr1.slice(1)];
console.log(myFullArr, "........");

let obj = {
  title: "object",
  sayHi() {
    console.log("hello raza");
  },
};
obj.sayHi();

let objA = {
  name: "raza",
  id: 1,
  author: "lorem",
};
let objB = { ...objA };
objB.name = "ali";
console.log(objA, "objA");
console.log(objB, "objB");

let arrA = [1, 2, 3];
console.log(arrA[0]);
let arrB = [{ ...arrA }];
console.log(arrB[0][1]);
let stringil = "Raza";
let arrrr = [...stringil];
console.log(arrrr);
