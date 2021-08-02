// define all the variables to use
const firstName = document.getElementById("first-name");
console.log(firstName);
console.log(firstName.value === "");
const secondName = document.getElementById("second-name");
const password = document.getElementById("password");
const form = document.querySelector("form");
console.log(form);

// define the function to check if any of these fields are empty
const checkInput = (e) => {
	e.preventDefault();
	console.log("submit action fired");
	return firstName.value === ""
		? console.log("First Name cannot be empty")
		: console.log("thanks");
};

// add the function to the submit event
form.addEventListener("submit", checkInput);
