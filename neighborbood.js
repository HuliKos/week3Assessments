function randomRestaurant (evt) {
    evt.preventDefault();

const restaurantList = ['Antonio Ristorante', 'Table 13', `hamberlain's Stake & Fish`, 'Ida Claire']
const randomR = Math.floor(Math.random()*restaurantList.length)
// console.log(randomR,restaurantList[randomR])

    alert(`My random restaurant recommendation to you is ${restaurantList[randomR]}!`)
}

let randomRest = document.querySelector('#randomRestButton')
randomRest.addEventListener('click',randomRestaurant)