// ==========================
// DARK MODE TOGGLE
// ==========================

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const currentTheme =
            document.documentElement.getAttribute("data-theme");

        if (currentTheme === "dark") {
            document.documentElement.removeAttribute("data-theme");
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";
        } else {
            document.documentElement.setAttribute(
                "data-theme",
                "dark"
            );
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";
        }
    });
}

// ==========================
// LOAD SAVED THEME
// ==========================

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.documentElement.setAttribute(
            "data-theme",
            "dark"
        );

        if (themeToggle) {
            themeToggle.textContent = "☀️";
        }
    }
});
