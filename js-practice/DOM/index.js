let tagName = document.getElementsByTagName("p")
console.log(tagName);

console.log(tagName[4].addEventListener("click",()=>{tagName[2].innerHTML="reassinged"}));

const divisionOne = document.getElementById("divOne")
console.log(divisionOne);
const divisionTwo = document.getElementById("divTwo")
console.log(divisionTwo);
const spanOfDivisionOne = divisionOne.getElementsByTagName("span")
console.log(spanOfDivisionOne);
const spanOfDivisionTwo = divisionTwo.getElementsByTagName("span")
console.log(spanOfDivisionTwo);

for(let i of spanOfDivisionOne){
    i.innerHTML = "<h1>ali do not love html</h1>"
    i.classList.add("raza")
}

for(let j of spanOfDivisionTwo){
    j.innerHTML = "<h1 style = 'color:red'>raza do not love js</h1>"
    
}

let totalLength = spanOfDivisionOne.length + spanOfDivisionTwo.length
console.log(totalLength);
let result = document.getElementById("result")
result.innerHTML= totalLength

let listItem= document.querySelector("ul")
console.log(listItem);

    
    
let replacementId = "replace"
listItem.id = replacementId

let favoriteItems = ["choclate","vannila","strawberry","cherry","pista"]
const creationOfDiv = document.getElementById("created")
let newUl = document.createElement("ul")
creationOfDiv.appendChild(newUl)
for(let prop of favoriteItems){
    let newLi = document.createElement("li")
    console.log(newUl.childNodes);
    newLi.innerText = prop
    var child = newUl.appendChild(newLi)
    for(let items of newUl.childNodes){
        console.log(items);
    }
}






