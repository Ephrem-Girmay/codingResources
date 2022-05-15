/** @format */

document.addEventListener("DOMContentLoaded", function (event) {
	document.documentElement.setAttribute("data-theme", "light");
	// Get our button switcher
	const themeSwitcher = document.getElementById("theme-switcher");

	// When our button gets clicked
	themeSwitcher.onclick = function () {
		// Get the current selected theme, on the first run
		// it should be `light`
		const currentTheme = document.documentElement.getAttribute("data-theme");

		// Switch between `dark` and `light`
		const switchToTheme = currentTheme === "dark" ? "light" : "dark";

		// Set our currenet theme to the new one
		document.documentElement.setAttribute("data-theme", switchToTheme);
	};
});
