//1. Creo un array con la lista delle immagini
const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
]

// 2.creo un ciclo con la lista delle immagini per visualizzarla

const containerCarosel = document.querySelector ('.container-carosel')

for (let index = 0 ; index < images.length; index++){
    console.log(images[index]);

    // aggiungo le immagini all'interno del mio contenitore in html
    containerCarosel.innerHTML += `<div class="img-container">
                                        <img src="${images[index]}">
                                    </div>`;
}

// questo comando seleziona tutte le classi slide presenti all'interno di html e non solo la prima come fa si solito il query selector
const allSlides = document.querySelectorAll('.img-container');
console.log('allSlides', allSlides);

//aggiungo la classe che rende visibile solo al primo elemento
allSlides[0].classList.add('block');

//assegno la posizione alla slide corrente
let currentSlide = 0;

// seleziono la freccia after
const afterArrow = document.querySelector('.after');
const beforeArrow = document.querySelector('.before');

//creo il funzionamento con click che passa il block alle varie immagini
afterArrow.addEventListener('click',

    function(){
        allSlides[currentSlide].classList.remove('block');

        currentSlide = currentSlide + 1;

        allSlides[currentSlide].classList.add('block');

        beforeArrow.classList.remove('hidden');

        if(currentSlide == allSlides.length - 1){
            afterArrow.classList.add('hidden');
        }
    }

);

beforeArrow.addEventListener('click',

    function(){
        allSlides[currentSlide].classList.remove('block');

        currentSlide = currentSlide - 1;

        allSlides[currentSlide].classList.add('block');

        if(currentSlide == 0){
            beforeArrow.classList.add('hidden');
        }

        afterArrow.classList.remove('hidden');
    }

);