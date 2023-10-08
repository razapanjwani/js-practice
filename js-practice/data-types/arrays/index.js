// arrays

var arr1 = new Array()
arr1[0] = "raza"
arr1[1] = "raza"
arr1[2] = "ali"

var obj1 = {
    name:"raza",
    id:1,
    rollNo:16986,
    sayName:function(){
        return console.log("your name is"+" "+ this.name);
    }
}
var arr2 = ["raza","ali","hasnain",obj1]
// console.log(arr2);
var slicedArr = arr2.slice(arr2.length - 1)
// console.log(slicedArr);
var concatArr = slicedArr.concat(arr1)

console.log(concatArr);
console.log(concatArr[0].sayName());
console.log(concatArr.pop());
console.log(concatArr.slice(0,2));

// destructuring an array

arr = ["raza","ali",1,2]
let [name1,name2,num1,num2] = arr
console.log(`${name1} ${name2} ${num1} ${num2}` );

let a = 100
let b = 200
let c = 300
console.log(`${a} ${b} ${c}`);
[b,c] = [a,a]
console.log(`${a} ${b} ${c}`);

function returnArray() {
    return arr = ["raza","ali","hasnain","razapanjwani"]
    return arr.filter(function(ele){return ele === "raza" })
}
let result = returnArray()
for(let prop of result){
    if(prop === "ali"){
        console.log(`${prop} ${result}`);
    }
}

// function returnArray(name,...restOfName) {
//     console.log(name);
//     console.log(restOfName);
// }

returnArray("raza","ali","hasnain","razapanjwani")


let anotherArr = ["pizza","burger",true,false,"raza","ali"]
let [food1,...restThings] = anotherArr
console.log(food1);
console.log(restThings[0+1]);

