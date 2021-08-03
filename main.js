// define all the variables to use
const firstName = document.getElementById("First-Name");
console.log(firstName);
console.log(firstName.value === "");
const secondName = document.getElementById("Last-Name");
const password = document.getElementById("Password");
const form = document.querySelector("form");
console.log(form);
const inputs = document.querySelectorAll("input");
console.log(inputs);

// define the function to check if any of these fields are empty
const checkInput = (e) => {
	e.preventDefault();
	console.log("submit action fired");
	inputs.forEach((input) => {
		if (input.id === "Password") {
			console.log("this is the password field");
		} else if (input.value === "") {
			console.log(`${input.id} cannot be empty`);
		}
	});
};

// add the function to the submit event
form.addEventListener("submit", checkInput);
