document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector("nav");

	function addShadow() {
		if (window.scrollY >= 300) {
			nav.classList.add("shadow-bg");
		} else {
			nav.classList.remove("shadow-bg");
		}
	}

	window.addEventListener("scroll", addShadow);
});

const form = document.getElementById("form");
const given_name = document.getElementById("given_name");
const family_name = document.getElementById("family_name");
const email = document.getElementById("email");
const my_message = document.getElementById("my_message");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	const given_nameValue = given_name.value.trim();
	const family_nameValue = family_name.value.trim();
	const emailValue = email.value.trim();
	const my_messageValue = my_message.value.trim();

	if (given_nameValue === "") {
		setErrorFor(given_name, "Podaj imię!");
	} else {
		setSuccessFor(given_name);
	}

	if (family_nameValue === "") {
		setErrorFor(family_name, "Podaj nazwisko!");
	} else {
		setSuccessFor(family_name);
	}

	if (emailValue === "") {
		setErrorFor(email, "Podaj email!");
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, "Niepoprawny email!");
	} else {
		setSuccessFor(email);
	}

	if (my_messageValue === "") {
		setErrorFor(my_message, "Podaj wiadomość!");
	} else {
		setSuccessFor(my_message);
	}

	if (
		given_nameValue !== "" &&
		family_nameValue !== "" &&
		emailValue !== "" &&
		my_messageValue !== ""
	) {
		alert("Wysłano wiadomość!");
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector("small");
	formControl.className = "form-control error";
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = "form-control success";
}

function setErrorFor(textarea, message) {
	const formControl = textarea.parentElement;
	const small = formControl.querySelector("small");
	formControl.className = "form-control error";
	small.innerText = message;
}

function setSuccessFor(textarea) {
	const formControl = textarea.parentElement;
	formControl.className = "form-control success";
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	);
}
