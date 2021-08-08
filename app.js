// select the input fields and the form
const firstNameEl = document.querySelector("#first-name");
const lastNameEl = document.querySelector("#last-name");
const passwordEl = document.querySelector("#password");
const form = document.querySelector("form");
console.log(form);

// reusable utility functions
// check if a field has been filled in
const isFilledIn = (value) => (value = "" ? false : true);

// check if an email is valid
const isEmailValid = (email) => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
};

// the function which shows the error message
const showError = (input, message) => {
	// get the form field element
	const formField = input.parentElement;
	// add the error class
	formField.classList.add("error");
	// show the error message
	const error = formField.querySelector("small");
	error.textContent = message;
};

// the function which clears the error message
const success = (input) => {
	// get the parent of the input field
	const formField = input.parentElement; //remove the error class
	formField.remove("error");
	// hide the error message
	const error = formField.querySelector("small");
	error.textContent = "";
};
