let obj1 = {
    name:"raza",
    id:1,
    rollNo:16986,
    age:18,
    country:"Pakistan"
}
let universityLocatedAt = "Pakistan" 
let universityNotLocatedAt = "USA"
let ageOfAdmission = 18
if(universityNotLocatedAt !== obj1.country){
    console.log("your country is eligeble");
    if(obj1.age <= ageOfAdmission){
        console.log("your age is eligeble");
    }
}

function BankUser(name,id,accountBalance) {
    this.name = name
    this.id = id
    this.accountBalance = accountBalance
    this.canBuyThis = function(){
        if(accountBalance >= 10000){
            if(id === 1){
                console.log("you have" + " "+ accountBalance +" "+  "amount which is sufficient");
            } else if(id !== 1){
                console.log("Enter correct ID!");
            } else{
                console.log("there is no ID in database!");
            } 
            if(name === "raza"){
                console.log("your name matches the ID!");
            } else{
                console.log("your name does not machtes");
            }
        }else{
            console.log("your account does not have enough money"); 
        }
    } 
}

let user1 = new BankUser("raza",undefined,11000)

user1.canBuyThis()

function Account(name,phoneNo,age,proffesion,money,country,Travel){
    this.name =name
    this.phoneNo = phoneNo
    this.age = age 
    this.proffesion = proffesion
    this.money = money
    this.country = country
    this.Travel = Travel
    this.checkUser = function(){
        if((age >=18 && proffesion === true ) || country === "Pakistan"){
            console.log("you can open account!!!");
            if(country !== "Pakistan"){
                if(!Travel){
                    console.log("you are eligeble");
                    if(money <=1000){
                        console.log("not sufficient money");
                    }
                }
            }
        } else{
            console.log("Enter right infromation");
        }
    }
}
let person1 = new Account("raza","0321-4455",18,true,1000,"pakistan",false)
person1.checkUser()
