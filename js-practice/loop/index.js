// while loops

const users = [{name:"raza",balance:100},{name:"ali",balance:200},{name:"hasnain",balance:300},{name:"asad",balance:400},{name:"bilal",balance:500}]
function user(userArr){
    let index = 0
    while(userArr.length > index){
        if(userArr[index].name === "raza" && userArr[index].balance <= 500){
            canPurchase()
        }
        index++
    }
    function canPurchase(){
        console.log("your name is" +" "+ userArr[index].name + " "+"and your balance is" +" "+ userArr[index].balance);
    }
    
}


user(users)


// Do While Loops
let num = 1

do{
    num +=1
    console.log(num);
}while(num<5)



for(let i=1;i<=10;i++){
    
    setTimeout(()=>{
        console.log(i);
    },i*1000)
}
outerLoop:
for(let i = 1; i<=5; i +=1 ){
    console.log("outer loop " + i);
    innerLoop:
    for(let j=0 ;j < 10;j +=1){
        console.log("inner loop " + j);
        if(i === 3){
            break outerLoop
        }
    }
}

let obj1= {name:"raza",name2:"ali",name3:"raza"}
for(let prop in obj1){
    console.log(obj1[prop]);
}

let arr = ["raza","ali","chris","billy"]
for(const n of arr){
    console.log(n);
}
let obj = [{name:"Raza"},{name2:"ali"},{name3:"chris"}]
obj.forEach(element => {
    for(let x in element){
        console.log(element[x]);
    }
});