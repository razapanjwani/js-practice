var myName = "raza panjwani"
function sayHi(){
    var enterName = true
    if(enterName === false){
        var yourName = "ali"
        console.log("Hi" + " " + yourName);
    }else{
        console.log("Hi" + " " + myName);
    }
    yourName = "hasnain"
    console.log(yourName);
}
sayHi()
function sayHiTwo(){
    let enterName = false
    let yourName = "ali"
    if(enterName){
        let myName = "raza"
        console.log("Hi!" + " " + myName); 
        myName = "hasnain"
        console.log("Hi!" + " " + myName);
    } else{
        console.log("Hi" + " " + yourName);
    }
}
sayHiTwo()

function sayHiThree(){
    const myName = "raza"
    // myName = "ali" 
    console.log(myName);
}
sayHiThree()

const arr = [1,2,3,4]
let arr1= [5,6]
// arr = [7,8]
arr.push(5,6)
arr = [1,2,3,10]


console.log(arr);

function sayHiFour(){
    var myName = "raza"
    var myName = "ali"
    console.log(`hello ${myName}`);
}
sayHiFour()
