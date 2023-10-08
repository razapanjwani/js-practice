const numberChecker = (num) => {
    let value;
    switch(num){
        case 1: case 2 : case 3: 
        value = "low range"
        console.log("your number"+" " + value);
        return;
        case 4 : case 5 : case 6 :
        value = "mid range"
        console.log("your number"+" " + value);
        return;
        case 7 : case 8 : case 9 :
        value = "high range"
        console.log("your number"+" " + value);
        return;
        default:
            value = "your number is invalid"
            console.log(value);
            return
    }
}

numberChecker(1)