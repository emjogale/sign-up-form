// define all the variables to use
const firstName = document.getElementById("first-name");
console.log(firstName);
console.log(firstName.value === "");
const secondName = document.getElementById("second-name");
const password = document.getElementById("password");
const form = document.querySelector("form");
console.log(form);
const inputs = document.querySelectorAll("input");
console.log(inputs);

// define the function to check if any of these fields are empty
const checkInput = (e) => {
	e.preventDefault();
	console.log("submit action fired");
	inputs.forEach((input) => {
		if (input.value === "") {
			console.log(`the input is empty`);
		}
	});
	// return firstName.value === ""
	// 	? console.log("First Name cannot be empty")
	// 	: console.log("thanks");
};

// add the function to the submit event
form.addEventListener("submit", checkInput);
