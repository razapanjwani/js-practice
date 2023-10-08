let mainDiv = document.getElementById("mainDiv");
let nameList = document.getElementById("nameList");
function getName() {
  const data = fetch("https://jsonplaceholder.typicode.com/users");
  return data;
}
getName()
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((res) => {
    console.log(res);
    showName(res);
  })
  .catch((err) => {
    console.log("error");
  });

function showName(userArr) {
  userArr.map((userObj) => {
    let listElement = document.createElement("li");
    nameList.appendChild(listElement);
    listElement.innerText = userObj.name;
    listElement.addEventListener("click", () => {
      handleClick(userObj);
    });
  });
}

function getPost(id) {
  const res = fetch("https://jsonplaceholder.typicode.com/posts");
  //   return res;
  res
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      showPost(data, id);
    });
}
function handleClick(userObj) {
  let { id, username } = userObj;
  console.log(id, username);
  getPost(id);
}

function showPost(postArr, id) {
  let returnedPost = postArr.filter((element) => element.userId == id);
  console.log(returnedPost);
}

// Promise.all([getName, getPost]);
