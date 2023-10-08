let mainDiv = document.getElementById("mainDiv");
//Muhammad Z

//QUIZ
// let answersArr = [
//   {
//     id:1,
//     question:"what is the full form of javascript",
//     answers:["java","javascript","csharp"]
// } ,
// {
//   id:2,
//   question:"what is the full form of c#",
//   answers:["java","javascript","csharp"]
// } ,
// {
//   id:3,
//   question:"what is the full form of j",
//   answers:["java","javascript","csharp"]
// }
// ]

// answersArr.map(item => {
//   let questionPara = document.createElement("p")
//   questionPara.id = "question"
//   mainDiv.appendChild(questionPara)
//   questionPara.innerText = item.question
//   item.answers.map(itemChild => {
//       let btn = document.createElement("button")
//       questionPara.appendChild(btn)
//       btn.innerText = itemChild
//       if(item.id === 1){
//         btn.addEventListener("click",()=>{handleClickFor1(itemChild,btn,questionPara)})
//       }
//       if(item.id === 2){
//         btn.addEventListener("click",()=>{handleClickFor2(itemChild,btn,questionPara)})
//       }
//       if(item.id === 3){
//         btn.addEventListener("click",()=>{handleClickFor3(itemChild,btn,questionPara)})
//       }
//   })
// })

// function handleClickFor1(x,y,z) {
//   let para = document.createElement("p")
//   z.appendChild(para)
//     if(x.valueOf() === "javascript"){
//       para.innerText = "ok"
//     } else {
//       para.innerText = "wrong"
//     }

// }
// function handleClickFor2(x,y,z) {
//   let para = document.createElement("p")
//   z.appendChild(para)
//     if(x.valueOf() === "csharp"){
//         para.innerText = "ok"
//     } else {
//       para.innerText = "wrong"
//     }

// }
// function handleClickFor3(x,y,z) {
//   let para = document.createElement("p")
//   z.appendChild(para)
//     if(x.valueOf() === "java"){
//         para.innerText = "ok"
//     } else {
//       para.innerText = "wrong"
//     }

// }

//SLIDER
// let prevBtn = document.getElementById("prev")
// let nextBtn = document.getElementById("next")

// let imgArr = [
//   {
//     src:"https://plus.unsplash.com/premium_photo-1663840297123-29164230cc9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
//     id:1
//   },
//   {
//     src:"https://images.unsplash.com/photo-1682686580224-cd46ea1a6950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500 &q=80",
//     id:2
//   },
//   {
//     src:"https://plus.unsplash.com/premium_photo-1673263587227-afde886b59e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
//     id:3
//   },
//   {
//     src:"https://images.unsplash.com/photo-1694975452344-51e6ed6f59a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
//     id:4
//   },
//   {
//     src:"https://images.unsplash.com/photo-1694675042062-f73713a6a122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
//     id:5
//   }
// ]

// imgArr.map(item => {
//   let img = document.createElement("img")
//   let index = 1
//   img.src = item.src
//   mainDiv.appendChild(img)
//   img.classList.add("hide")
//   img.classList.remove("show")
//   if(item.id === index){
//     img.classList.add("show")
//     img.classList.remove("hide")
//     prevBtn.classList.add("hide")
//   }
//   nextBtn.addEventListener("click",()=>{
//     index++
//     img.classList.add("hide")
//     if(item.id === index){
//       img.classList.add("show")
//       img.classList.remove("hide")
//       prevBtn.classList.add("show")
//       prevBtn.classList.remove("hide")
//     }
//     if(index === imgArr.length){
//       nextBtn.classList.add("hide")
//     }
//   })
//   prevBtn.addEventListener("click",()=>{
//     index--
//     img.classList.add("hide")
//     img.classList.remove("show")
//     if(item.id === index){
//       img.classList.add("show")
//       img.classList.remove("hide")
//     }
//     if(index !== imgArr.length){
//       nextBtn.classList.add("show")
//       nextBtn.classList.remove("hide")
//       if(index === 1){
//         prevBtn.classList.add("hide")
//       }
//     }
//   })
// })

// const data =  fetch(`http://swapi.dev/api/planets/${Math.floor(Math.random() * 10)}/`)
// data.then((res)=>{
//     return res.json()
// }).then((d)=>{
//     console.log(d.name);
// })

// console.log(Math.floor(Math.random() * 10));

// stopwwatch

// let startButton = document.getElementById("start")
// let stopButton = document.getElementById("stop")
// let resetButton = document.getElementById("reset")
// let ten = 0;
// let sec = 0;
// let getSec = document.getElementById("sec")
// let getTen = document.getElementById("tens")
// let interval
// startButton.addEventListener("click",()=>{
//     clearInterval(interval)
//      interval = setInterval(setTimer, 1000);
// })
// stopButton.addEventListener("click",()=>{
//     clearInterval(interval)
// })
// resetButton.addEventListener("click",()=>{
//     clearInterval(interval)
//     ten = "00"
//     sec = "00"
//     getSec.innerText = sec
//     getTen.innerText = ten
// })
// function setTimer() {
//     ten++
//     if(ten <= 9 ){
//         getTen.innerText = "0" + ten
//     }
//     if(ten>9 ){
//         getTen.innerText = ten
//     }
//     if(ten > 60){
//         sec++
//         getSec.innerText = sec
//         ten = 0
//         ten++
//         if(ten <= 9){
//             getTen.innerText = "0" + ten
//         }
//         if(ten>9 ){
//             getTen.innerText = ten
//         }
//     }
// }

// let data = fetch('https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=5784249b3b01ae87c9c3af23adfe3955')
// let weatherDiv = document.getElementById("weather")
// data.then((res)=>{
//   return res.json()
// }).then((d)=> {
//     console.log(d);
//     if (d.name === "Karachi") {
//         console.log(d.timezone,d.weather);

//     }
// })
//Shalow and deep copy
// let obj = {
//   name: "Raza",
//   age: 17,
//   adress: {
//     home: "fake street 123",
//     office: "fake street 456",
//   },
// };
// let kir = JSON.parse(JSON.stringify(obj));
// kir.name = "ali";
// console.log(kir);
// console.log(obj);

// let rr = [2, 3, 4];
// let arr = JSON.parse(JSON.stringify(rr));
// arr[2] = 6;
// console.log(rr);
// console.log(arr);
