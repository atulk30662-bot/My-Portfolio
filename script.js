
document.addEventListener("DOMContentLoaded", function () {

    // Current year in footer
    const footerText = document.querySelector("footer p");

    if (footerText) {
        footerText.innerHTML =
            '© ${new Date().getFullYear()} Atul Kumar. All Rights Reserved.';
    }


    // Smooth navigation
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId.startsWith("#")) {

                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    event.preventDefault();

                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }

        });

    });


    // Welcome message
    console.log("Welcome to Atul Kumar's Portfolio!");

});