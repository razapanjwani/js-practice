const firstName = "Raza"
const lastName = "Panjwani"
const fullName = `${firstName} ${lastName}`
console.log(fullName);

let div = document.getElementById('divTemplate')
let myList = 
`<ul>
    <li>list item #1</li>
    <li>list item #2</li>
    <li>list item #3</li>
    <li>list item #4</li>
</ul>`

div.innerHTML = myList

let div2 = document.getElementById('pizzaDiv')
let pizzaToppings = ["cheese" ,"pepproni", "tomato", "pineapple", "meat"]

let list = 
`
<h1>pizza toppings</h1>        
<ul>
        ${pizzaToppings.map((topping)=> `<li>${topping}</li>`).join("")}
</ul>` 
div2.innerHTML = list

