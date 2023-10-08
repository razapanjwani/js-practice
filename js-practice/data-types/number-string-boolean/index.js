var isString = "hello world";
var isNumber = 2;
var isNull = null;
var isUndefined;
var isTruth = true
var isFalse = false
var isNotANumber = isNaN(isString)
if(isNotANumber){
    console.log("this is truthy");
}
else{
    console.log("this is falsey");
}

console.log(isString.charAt(0).toUpperCase());
console.log(parseInt("10"));
console.log(Math.random().toFixed(2));

console.log(isString.length);