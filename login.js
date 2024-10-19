// Script to handle login and logout
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("welcome-section").style.display = "block";
        document.getElementById("user-name").textContent = username;
        document.getElementById("login-error").textContent = "";
        window.location.href = "./index.html"; 
    } else {
        document.getElementById("login-error").textContent = "Invalid credentials!";
    }
}

function logout() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("welcome-section").style.display = "none";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}
