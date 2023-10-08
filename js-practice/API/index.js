const planetDiv = document.getElementById("planetDiv");
const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");
const btnThree = document.getElementById("btnThree");
btnOne.addEventListener("click", addPlanets);

function addPlanets() {
  const res = fetch(
    `http://swapi.dev/api/planets/${Math.floor(Math.random() * 10)}/`
  );
  res
    .then((data) => {
      return data.json();
    })
    .then((d) => {
      showingPlanets(d);
    });
}

btnTwo.addEventListener("click", addAllPlanets);

function addAllPlanets() {
  const res = fetch(`http://swapi.dev/api/planets/`);
  res
    .then((data) => {
      return data.json();
    })
    .then((planets) => {
      showingAllPlanets(planets.results);
    });
}

function showingAllPlanets(planetArr) {
  for (const [index, prop] of planetArr.entries()) {
    showingPlanets(prop, index);
  }
}

function showingPlanets(planetObj, index) {
  let pop;
  let { name, climate, population, terrain } = planetObj;
  if (population > 0 && population < 1000000) {
    pop = "low";
  } else if (population > 1000000 && population < 100000000) {
    pop = "medium";
  } else if (population > 100000000 && population < 1000000000000000) {
    pop = "high";
  } else {
    pop = "unknown";
  }
  const divInPlanet = `
    <div class = "planet" id = ${index} data-population = ${pop}>
        <h1>${name}</h1>
        I am ${name}, my climate is ${climate}, my population is ${
    population === "unknown"
      ? (pop = population)
      : (pop = parseInt(population).toLocaleString())
  }, my terrain is ${terrain}, 
    </div>
    `;
  planetDiv.insertAdjacentHTML("beforeend", divInPlanet);
}

btnThree.addEventListener("click", changeColor);
let allPlanetsDivs = document.getElementsByClassName("planet");

function changeColor() {
  console.log(allPlanetsDivs);
  for (let props of allPlanetsDivs) {
    if (props.dataset.population === "unknown") {
      props.classList.toggle("yellow");
    }
  }
}

const selector = document.getElementById("selector");
selector.addEventListener("change", highlight);
function highlight(event) {
  let { value } = event.target;
  for (let prop of allPlanetsDivs) {
    prop.style.backgroundColor = "white";
    if (prop.dataset.population === value) {
      prop.style.backgroundColor = "teal";
    }
  }
}

const ftch = async () => {
  let res = await fetch("JSON/lorem.json");
  let dta = await res.json();
};
ftch();

console.log(1);
console.log(2);

const lol = () => {
  return fetch("JSON/lorem.json");
};
lol()
  .then((data) => {
    if (data.status !== 200) {
      console.log("i dont know");
    } else {
      console.log(data);
      return data.json();
    }
  })
  .then((res) => {
    res.map((element) => {
      let { name, id, author } = element;
      console.log(name, id, author);
    });
  });

console.log(3);
console.log(4);

const pic = (cb) => {
  cb();
};

function callBack(ele) {
  let data = fetch("JSON/lorem.json");
  data
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
}
pic(callBack);
