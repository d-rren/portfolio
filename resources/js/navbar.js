var btn = document.getElementById('navbarTogglerBtn');
var icon = btn.getElementsByClassName('material-icons')[0];

btn.onclick = function() {
	console.log('clicked');
	if (icon.textContent == "expand_more") {
		icon.textContent = "expand_less";
	}
	else if (icon.textContent == "expand_less") {
		icon.textContent = "expand_more";
	}
};
