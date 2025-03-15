// DOM Elements
const breedSelect = document.getElementById("breedSelect");
const dogImage = document.getElementById("dogImage");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
let currentIndex = 0;

// Variables for tracking images and current index
let breed = breedSelect.value;
let images = [];

// Fetch images based by selected breed
function fetchDogImages(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random/10`)
        .then(response => response.json())
        .then(data => {
            images = data.message;
            displayImage();
        })
        .catch(error => {
            console.error('Error fetching images:', error);
        });
}

// Display current dog
function displayImage() {
    if (images.length > 0) {
        dogImage.src = images[currentIndex];
    }
}

// Event listener for breed selection
breedSelect.addEventListener("change", (e) => {
    breed = e.target.value;
    fetchDogImages(breed);
});

// Event listener for next button
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    displayImage();
});

// Event listener for back button
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    displayImage();
});

// fetch for the default breed
fetchDogImages(breed);
