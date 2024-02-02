console.log('js loaded');

// elements
const currentImage = document.getElementById('currentImage');

let images = [
    'images/Overwatch.jpg',
    'images/tracer.jpg',
    'images/zen.jpg',
    'images/genji.jpg',
    'images/moira.jpg'
];
let currentImageIndex = 0;

currentImage.src = images[currentImageIndex];


function updateSlides(){
    currentImageIndex++; 

    if(currentImageIndex >= images.length){ 
        currentImageIndex = 0;
    }

    console.log('changing image', currentImageIndex);
    currentImage.src = images[currentImageIndex];
}

setInterval(updateSlides, 2000);




const apiUrl = 'https://type.fit/api/quotes';
const QuoteOfTheDay = document.getElementById('QuoteOfTheDay');
fetch(apiUrl)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
    let rand = Math.floor(Math.random() * data.length);
    console.log(data[rand].author);
    console.log(data[rand].text);
    QuoteOfTheDay.innerHTML = data[rand].text;
  })