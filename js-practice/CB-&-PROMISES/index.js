// CALLBACKS

function add(num1, num2, cb) {
  let sum;
  sum = num1 + num2;
  cb(sum);
}
function tell(x) {
  console.log(x);
}
add(5, 5, tell);

let div = document.getElementById("division");
let para = div.querySelector("p");
let btn = document.getElementById("button");
btn.addEventListener("click", function () {
  fetchingData(replacingDom);
});
const fakeData = {
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nobis consequatur modi similique eos aspernatur, expedita molestias optio corporis, officiis asperiores laboriosam, delectus omnis aliquam rem vel mollitia ab quo.",
};

const fetchingData = (cb) => {
  let data = "loading....";
  cb(data);
  setTimeout(() => {
    data = fakeData.text;
    cb(data);
  }, 2000);
};
const replacingDom = (x) => {
  para.innerText = x;
};

// PROMISES
c = a+b
log(c)
const addOne = new Promise((resolve, reject) => {
  resolve("promise is OK!!!");
  reject("this is rejected");
});
addOne
  .then((data) => console.log(`look like your ${data}`))
  .catch((data) => console.log(data));

function addition(n1, n2) {
  return new Promise((resolve, reject) => {
    let addedNO = n1 + n2;
    resolve(addedNO);
  });
}
addition(2, 2).then((data) => console.log(data));
const promise = new Promise((resolve, reject) => {
  resolve("hi");
  reject("error");
});
promise
  .then((msg) => {
    return (msg += "there");
  })
  .then((msg) => {
    return (msg += "raza");
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });
  log('test')

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("a");
  }, 2000);
});
let p3 = Promise.resolve("rejected");
let p2 = Promise.resolve("b");
Promise.race([p1, p2, p3])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
