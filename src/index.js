const breedsList = document.getElementById("dog-breeds");
const selectLetter = document.getElementById("breed-dropdown");

function loadImage() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      for (const element of object.message) {
        const newElement = document.createElement("img");
        const imageHolder = document.getElementById("dog-image-container");
        imageHolder.appendChild(newElement);
        newElement.setAttribute("src", element);
      }
    });
}

function fetchBreeds() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      let dogs = Object.keys(object.message);
      renderBreed(dogs);
      searchBy(dogs);
    });
}

function renderBreed(dogs) {
  for (const dog of dogs) {
    const newElement = document.createElement("ul");
    breedsList.append(newElement);
    newElement.innerHTML = dog;
    newElement.addEventListener("click", function changeColour() {
      newElement.setAttribute("style", "color:#FF0000");
    });
  }
}

function searchBy(dogs) {
  selectLetter.onchange = function(e) {
    e.preventDefault();
    let letter = selectLetter.options[selectLetter.selectedIndex].value;
    breedsList.innerHTML = "";
    let newDogs = dogs.filter(dog => dog.charAt(0) === letter);
    renderBreed(newDogs);
  };
}

function initialize() {
  loadImage();
  fetchBreeds();
}

initialize();
