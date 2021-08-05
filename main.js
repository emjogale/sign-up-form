// define all the variables to use
const firstName = document.getElementById("First-Name");
const secondName = document.getElementById("Last-Name");
const password = document.getElementById("Password");
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
console.log(inputs);

// define a function to check if email is in valid format
const isValid = function (email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// define the function to check if any of these fields are empty
const checkInput = (e) => {
	e.preventDefault();
	inputs.forEach((input) => {
		if (input.value === "") {
			console.log(`${input.id} cannot be empty`);
		}
	});
};

// add the function to the submit event
form.addEventListener("submit", checkInput);
