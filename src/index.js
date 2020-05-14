console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", init);

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const dropDown = document.querySelector("#breed-dropdown");
const breedElement = document.querySelector("#dog-breeds");
const container = document.querySelector("#dog-image-container");
const ulBreed = document.querySelector("#dog-breeds")
let localBreeds = {}


function transformIntoArray (breedsObject) {
	const result = []
	for (const key in breedsObject) {
        result.push({ name: key, subBreeds: breedsObject[key] })
	}
	return result
}

function fetchDogs() {
    fetch(imgUrl)
        .then(response => response.json())
        .then(dogsArray => renderDogs(dogsArray));
}

//add dogs to page
renderDogs = (dogs) => {
    //first I need to select the area by ID of where the dog images will be rendered. 
    dogs.message.forEach(dog => { 
        const img = document.createElement("img")
        img.src = `${dog}`
        container.append(img) 
    })
}


//fetch
function fetchBreeds() {
    return fetch(breedUrl)
        .then(response => response.json())
        .then(breedObject => {
            localBreeds = transformIntoArray(breedObject.message)
            renderBreeds(localBreeds)
        });
}

function renderBreeds(breeds) {
    ulBreed.innerHTML = ""
    //first I need to select the area by ID of where the dog images will be rendered. 
    for (const breed of breeds) { 
    // You an look through the object by saying const key of (object)  in this case we need to look through the object(message) to go one level deeper.
        const liBreed = document.createElement("li")
        liBreed.innerText = `${breed.name}`
        ulBreed.append(liBreed) 
    }

    breedElement.addEventListener('click', function(event) {
        event.target.style.color = "#FF4500";
    })
}

function addDropdownListener () {
    dropDown.addEventListener("change", function(event) {
        if (dropDown.value.length == 0) {
             renderBreeds(localBreeds);
        } else {
            const filteredBreeds = localBreeds
            .filter(breed => breed.name[0] == dropDown.value);
            renderBreeds(filteredBreeds);
        }                                
    })
}

function init(){
    fetchDogs();
    fetchBreeds();
    addDropdownListener();
}


