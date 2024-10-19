function bookAppointment() {
    // Get values from the form
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;

    // Simple validation
    if (name === "" || phone === "" || date === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Hide the form
    document.getElementById("appointmentForm").style.display = "none";

    // Show confirmation message
    const confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.style.display = "block";

    // Display the details
    const details = `Thank you, ${name}! Your appointment is booked for ${date}. We will contact you at ${phone}.`;
    document.getElementById("details").textContent = details;
}
