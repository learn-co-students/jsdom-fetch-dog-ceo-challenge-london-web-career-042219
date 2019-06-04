function fetchDogs() {
  return fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(json => renderDogs(json))
}

function renderDogs(json) {
    const div = document.querySelector("#dog-image-container")
    json.message.forEach(dog => {
      // console.log(dog)
      const img = document.createElement("img")
      img.src = `${dog}`
      // console.log(img)
      div.appendChild(img)
    })
}

////////////////////////////////////////////////////////

function fetchDogBreeds() {
  return fetch("https://dog.ceo/api/breeds/list/all")
  .then(resp => resp.json())
  .then(json => renderDogBreeds(json))
}

function renderDogBreeds(json) {
  const ul = document.querySelector("#dog-breeds")
  for (const key in json["message"]) {
    const li = document.createElement("li")
    li.innerHTML = `${key}`
    ul.appendChild(li)
  }

  ////////////////////////////////////////////////////////

  let li = document.querySelectorAll("li")

  for (const element of li) {
    element.addEventListener("click", function() {
      element.style.color = "red"
    });
  }

  ////////////////////////////////////////////////////////

  const dropdown = document.querySelector("#breed-dropdown")

  for (const element of dropdown) {
    if (element.attributes.value.value === "a") {
      console.log(element)
    } else if (element.attributes.value.value === "b") {
      console.log(element)
    } else if (element.attributes.value.value === "c") {
      console.log(element)
    } else if (element.attributes.value.value === "d") {
      console.log(element)
    }
  }


} // final bracket

document.addEventListener("DOMContentLoaded", function() {
  fetchDogs();
  fetchDogBreeds();
});
