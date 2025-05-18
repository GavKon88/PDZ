document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("darkModeToggle");
    const root = document.documentElement;

    if (localStorage.getItem("darkMode") === "true") {
        root.classList.add("dark-mode");
    }

    if (toggle) {
        toggle.addEventListener("click", () => {
        root.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", root.classList.contains("dark-mode"));
        });
    }
});
