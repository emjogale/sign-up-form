// select the input fields and the form
const firstNameEl = document.querySelector("#first-name");
const lastNameEl = document.querySelector("#last-name");
const passwordEl = document.querySelector("#password");
const emailEl = document.querySelector("#email");
const form = document.querySelector("form");

console.log(form);
// select the input values

const lastName = lastNameEl.value.trim();
const password = passwordEl.value.trim();

// reusable utility functions
// check if a field has been filled in
const isFilledIn = (value) => (value === "" ? false : true);

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

	formField.classList.remove("error");
	// hide the error message
	const error = formField.querySelector("small");
	error.textContent = "";
};

// validating the name and password fields have been filled in
const checkfirstName = () => {
	let valid = false;
	const firstName = firstNameEl.value.trim();
	if (!isFilledIn(firstName)) {
		showError(firstNameEl, "First Name cannot be empty");
	} else {
		success(firstNameEl);
		valid = true;
	}
};

const checkLastName = () => {
	let valid = false;
	const lastName = firstNameEl.value.trim();
	if (!isFilledIn(lastName)) {
		showError(lastNameEl, "Last Name cannot be empty");
	} else {
		success(lastNameEl);
		valid = true;
	}
};

const checkEmail = () => {
	let valid = false;
	const email = emailEl.value.trim();
	if (!isEmailValid(email)) {
		showError(emailEl, "Looks like this is not an email");
	} else {
		success(emailEl);
		valid = true;
	}
};

const checkPassword = () => {
	let valid = false;
	const password = passwordEl.value.trim();
	if (!isFilledIn(password)) {
		showError(passwordEl, "Password cannot be empty");
	} else {
		success(passwordEl);
		valid = true;
	}
};

// attache the submit event listener to the form
form.addEventListener("submit", function (e) {
	// prevent the form from submitting
	e.preventDefault();
	// validate the form
	checkEmail();
	checkfirstName();
	checkLastName();
	checkPassword();
});
