document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    console.log("Username:", username);
    console.log("Password:", password);
});

document.getElementById("forgot-password").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Forgot password clicked.");
});