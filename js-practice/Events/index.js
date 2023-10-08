const bgDiv = document.getElementById("bgColor")
const divUl = bgDiv.querySelector("ul")
const divLi = divUl.querySelectorAll('li')

document.addEventListener("click",listitem)
function listitem(e){
    e.stopPropagation()
    let targetLi = e.target
    console.log(targetLi.nodeName);
    if(targetLi.nodeName !== "LI"){
        return
    }
    for(let prop of divLi){
        prop.classList.remove('green')
    }
    targetLi.classList.add("green") 
}
let mySecondDiv = document.getElementById("div2")
let myForm = document.getElementById("myForm")

myForm.addEventListener("submit",addList)
function addList(e){
    e.preventDefault()
    const myInput = document.getElementById("myInput").value
    console.log(myInput);
    const newLi = document.createElement("li")
    newLi.innerText = myInput 
    divUl.appendChild(newLi)    
    myForm.reset()
}

let divNo3 = document.getElementById("div3")
let para = document.querySelector('p')
document.addEventListener("keydown",addText)
document.addEventListener("keyup",removeText)

function addText(e) {
    para.innerText = 'user is typing'
}

function removeText(e) {
    setTimeout(() => {
        para.innerText=''
    }, 1000);
}




function uniCode(e){
    if(e.keyCode === "32"){
        e.preventDefault()
    }
}
bgDiv.addEventListener("click",logEvent)
function logEvent(event){
    bgDiv.classList.add("bgYellow")
    divLi[0].innerText = event.timeStamp
bgDiv.removeEventListener("click",logEvent)

}