function myFavoriteColor (evt) {
    evt.preventDefault();

    alert("My favorite color is blue.")
}
let favColor = document.querySelector('#color')
favColor.addEventListener('click',myFavoriteColor)


function myFavoritePlace (evt) {
    evt.preventDefault();

    alert("My favorite place is Iceland.")
}
let favPlace = document.querySelector('#place')
favPlace.addEventListener('click',myFavoritePlace)


function myFavoriteRitual (evt) {
    evt.preventDefault();

    alert("I have no idea what ritual means.")
}
let favRitual = document.querySelector('#ritual')
favRitual.addEventListener('click',myFavoriteRitual)