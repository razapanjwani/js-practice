function enterString(string) {
    if(typeof string !== "string"){
        throw "please enter a string :("
    }
    else{
        console.log(`you have entered a string: ${string}`);
    }
}
try{
    enterString("raza")
} catch(e){
    console.log(e);
} finally{
    console.log("this will run always");
}

function myString(string) {
    if(typeof string === "string"){
        this.value = string
        this.getValue = function () {
            console.log(`you have entered a string :${this.value}`);
        }
    }
    else{
        throw new stringException(string)
    }
}
function stringException(value) {
    this.value = value
    this.message = "this is not a string"
    this.myFUnc = function () {
        console.log(value + " " + this.message);
    }
}

function checkString(s) {
    let str
    try{
       str = new myString(s)
    }
    catch(e){
        e.myFUnc()
        // console.log(e.myFUnc, 'tst');
    }
    finally{
        console.log("this will execute every time");
    }
    return str
}
const a = checkString(1)
// console.log(a.getValue(), '====');


