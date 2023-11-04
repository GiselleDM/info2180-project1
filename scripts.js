/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the form and message elements
    const form = document.querySelector("form");
    const emailInput = document.querySelector("#email");
    const messageDiv = document.querySelector(".message");

    // Add a submit event listener to the form
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the entered email address
        const email = emailInput.value.trim();

        // Check if the email is empty or not a valid email address
        if (email === "") {
            messageDiv.textContent = "Please enter a valid email address.";
        } else if (!isValidEmail(email)) {
            messageDiv.textContent = "Please enter a valid email address.";
        } else {
            // Display a success message
            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
        }
    });

    // Function to validate email format
    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }
});
