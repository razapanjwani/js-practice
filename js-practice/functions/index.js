let obj ={
    whatismyname: function (myName){
        console.log(myName);
    }
}
obj.whatismyname("raza")

function user(firstName,lastName,age,password){
    function fullNameOfUser(){
         Name =  firstName +" "+ lastName
         return Name
    }
    function userObj(fullName){
        let obj =   {
            nameOfUser:fullName,
            age:age,
            pass:password
        }
        return obj
    }
    console.log(userObj(fullNameOfUser()));
}

user("raza","panjwani",17,1234)

let  sayHi= (name ="ali" ,...names) => {
    console.log("hello "+ name );
    names.map((a) =>{
       console.log(a["user"]); 
    }) 
}
sayHi("raza",{user:"raza",age:10},{user:"ali",age:15})
age =18
ages=18

console.log(age == ages ? "your age is 18" : "your age is not 18");