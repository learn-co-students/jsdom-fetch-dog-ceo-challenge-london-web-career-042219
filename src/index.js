console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const dogsContainer = document.getElementById("dog-breeds")

function addDog(dog) {
	const tr = document.createElement('tr')

	tr.innerHTML = `<img src = ${dog.message} >`

	dogsContainer.append(tr)
}

function addDogs(dogs) {
	for (const key in dogs) {

		const dogImages = dogs[key]
		dogImages.forEach(function(dogImage) {addDog(dogImage)})

	}
}

function getDogs() {
	return fetch(imgUrl)
			.then((response) => response.json())
}

getDogs()
.then((dogs) => addDogs(dogs))


