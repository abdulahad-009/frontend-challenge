document.addEventListener("DOMContentLoaded", function () {
    console.log("JS is running");

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (!hamburger || !navMenu) {
        console.error("Elements not found");
        return;
    }

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});
