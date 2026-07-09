(() => {
	const stored = localStorage.getItem("theme");
	const theme = stored === "light" || stored === "dark" ? stored : "dark";
	document.documentElement.setAttribute("data-theme", theme);
})();
