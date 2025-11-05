// script.js

document.addEventListener("DOMContentLoaded", () => {
    const reservationForm = document.querySelector(".reservation-form");

    reservationForm.addEventListener("submit", (e) => {
        e.preventDefault(); // stop default form submission

        // Collect input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const guests = document.getElementById("guests").value;

        // Simple validation
        if (!name || !email || !phone || !date || !time || !guests) {
            showMessage("Please fill in all fields.", "error");
            return;
        }

        // Email regex validation
        if (!validateEmail(email)) {
            showMessage("Please enter a valid email address.", "error");
            return;
        }

        // Phone regex validation (basic)
        if (!/^\+?\d{10,15}$/.test(phone)) {
            showMessage("Please enter a valid phone number.", "error");
            return;
        }

        // Success
        showMessage(`Thanks, ${name}! Your reservation for ${guests} on ${date} at ${time} is confirmed.`, "success");

        // Reset form
        reservationForm.reset();
    });

    // Helper: show message
    function showMessage(msg, type) {
        let messageEl = document.querySelector(".reservation-message");

        if (!messageEl) {
            messageEl = document.createElement("div");
            messageEl.className = "reservation-message";
            reservationForm.prepend(messageEl);
        }

        messageEl.textContent = msg;
        messageEl.style.color = type === "success" ? "var(--clr-secondary-accent)" : "red";
        messageEl.style.marginBottom = "15px";
        messageEl.style.fontWeight = "600";
        messageEl.style.textAlign = "center";
    }

    // Email validation helper
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
