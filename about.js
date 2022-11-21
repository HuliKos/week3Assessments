console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert("The form has been submitted successfully!")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);



function complimentYou (evt){
	evt.preventDefault();

	alert("You have successful hover over the picture! Nice Job!")
}

let image = document.querySelector('img');
image.addEventListener('mouseover', complimentYou);


// function getInputValue(){
// 	let inputValue = document.querySelector('#name')
// 	console.log(inputValue.textContent)
// }

// getInputValue()