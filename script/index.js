function darkMode() {
	document.body.classList.toggle("dark");
	if (localStorage.getItem('theme') == "dark") {
		localStorage.setItem('theme', 'light');
	} 
	else if (localStorage.getItem('theme') == "light") {
		localStorage.setItem('theme', 'dark');
	}
	else {
		localStorage.setItem('theme', 'dark');
	}
}

function setMode() {
	if (localStorage.getItem('theme') == 'dark') {
		document.body.classList.toggle("dark");
	}
}
function test() {
	alert('Can you read this?')
}

