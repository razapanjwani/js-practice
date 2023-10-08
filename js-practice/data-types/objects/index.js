// objects
var obj1 = {
    1:"Raza",
    2:"ali"
}
console.log(obj1);
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
let copiedPerson = person;

copiedPerson.firstName = 'Jane';
copiedPerson.lastName = 'fayyaz';

console.log(person, copiedPerson); 

var myObj = obj1;
myObj[1] = 'fayyaz'
console.log(myObj, '=============');

var obj2 = new Object()
obj2[1] = "raza"
console.log(obj2);

var obj3= Object()
obj3["student"] = 'raza'
console.log(obj3.student);

function User(name,id,rollNo,){
    this.name = name
    this.id = id
    this.rollNo = rollNo
    this.courses = []
    this.phoneNo = []
    this.addCourse = function(...courseName){
        this.courses.push(courseName)
    }
    this.addPhoneNo = function(phoneno)  {
        this.phoneNo.push(phoneno)
    }
    
}
var user1 = new User("Raza",1,"16986")
user1.addCourse("web3","metaverse","AI")
user1.addPhoneNo({home:"0123456789",office:"0987654321"})
console.log(user1);

// destructuring objects

let obj = {
    name:"Raza",
    age:17,
    address:"123 Fake Street"
}
let {name,age,address} = obj

let objFunc = ({name:nameRaza,age}) => {
    console.log(`${nameRaza},${age}`);
}
objFunc({name:"raza",age:17})

let objFunc2= (obj)=>{
    let {name = "raza",age,address} = obj
    console.log(`${name}, ${age}, ${address}`);
}
let object1 = {
    age:17,
    address:"123 Fake Street"
}
objFunc2(object1)

const objObj = {
    title:"this is the title",
    entries:[{
        name:"raza",
        age:17,
        address:"123 Fake Street"
    },
    {
        name:"ali",
        age:15,
        address: "555 Fake Street"
    },
    {
        name:"hamza",
        age:20,
        address: "332 Fake Street"
    },
    {
        name:"jane",
        age:25,
        address: "110 Fake Street"
    }
],
courses:["web3","AI","java"],
institute:"numaish"
}
let {title,courses:[crs1,crs2,crs3],institute,entries} = objObj
for(let {name,age,address} of entries){
    console.log(`${name},${age},${address}`);
}
let x = 1
let y = 2 
let z = 3
let objfff = {
    x,
    y,
    z
}
console.log(objfff.x);


function addInArr(x,y,z,numberTimes) {
    let myArr= []
    for(let i = 1 ; i<=numberTimes;i++){
        let obj = {
            x:i,
            y:y,
            z:z
        }
        myArr.push(obj)
        
    }
    
    return myArr
}
let raza = addInArr("panjwani","raza",false,10)
console.log(raza);
for(let prop of raza){
    var formatObject = {}
    formatObject["user" + prop.x] = prop
    console.log(formatObject);
}


let obbj = {}
obbj["name"] = "raza"
console.log(obbj);