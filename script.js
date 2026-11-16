
// =====================================
// MOBILE NAVIGATION
// =====================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });

    // Close menu after clicking a navigation link
    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}


// =====================================
// CONTACT FORM VALIDATION
// =====================================

const contactForm = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

if (contactForm && feedback) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get form values
        const fullName = document.getElementById("full-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check for empty fields
        if (!fullName || !email || !subject || !message) {

            showFeedback("Please fill in all the fields.", "error");

            return;
        }

        // Check email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            showFeedback("Please enter a valid email address.", "error");

            document.getElementById("email").focus();

            return;
        }

        // Prepare WhatsApp message
        const whatsappMessage = [
            "Hello Jophil Tools and Machineries,",
            "",
            "Name: " + fullName,
            "Email: " + email,
            "Enquiry: " + subject,
            "Message: " + message
        ].join("\n");

        // Create WhatsApp URL
        const whatsappURL =
            "https://wa.me/2348033210409?text=" +
            encodeURIComponent(whatsappMessage);

        // Open WhatsApp
        window.open(whatsappURL, "_blank", "noopener,noreferrer");

        // Display feedback
        showFeedback(
            "WhatsApp should open with your enquiry. Review it and press Send.",
            "success"
        );

        // Clear the form
        contactForm.reset();

    });

}


// =====================================
// PRODUCT ENQUIRIES
// =====================================

const productLinks = document.querySelectorAll(".product-link");

productLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const productCard = link.closest(".product-card");

        if (!productCard) return;

        const productHeading = productCard.querySelector("h3");

        if (!productHeading) return;

        const productName = productHeading.textContent.trim();

        const productMessage =
            "Hello Jophil Tools and Machineries, " +
            "I would like to enquire about the " +
            productName + ".";

        const whatsappURL =
            "https://wa.me/2348033210409?text=" +
            encodeURIComponent(productMessage);

        window.open(whatsappURL, "_blank", "noopener,noreferrer");

    });

});


// =====================================
// FORM FEEDBACK
// =====================================

function showFeedback(message, type) {

    const feedback = document.getElementById("form-feedback");

    if (!feedback) return;

    feedback.textContent = message;

    feedback.className = "form-feedback " + type;

}


// =====================================
// AUTOMATIC COPYRIGHT YEAR
// =====================================

const currentYear = document.getElementById("current-year");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}

// =====================================
// SCROLL REVEAL ANIMATION
// =====================================

const revealElements = document.querySelectorAll(
    ".section-heading, .about-content, .product-card, .home-link-card, .contact-container, .map-section"
);

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(function (element) {

        element.classList.add("reveal");
        revealObserver.observe(element);

    });

}
