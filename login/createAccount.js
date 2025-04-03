document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');
    const togglePassword = document.querySelector('.toggle-password');

    // Toggle password visibility
    togglePassword.addEventListener('click', function () {
        let passwordInput = document.getElementById('register-password');
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    });

    // Handle registration
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();

        let name = document.getElementById('register-name').value.trim();
        let email = document.getElementById('register-email').value.trim();
        let password = document.getElementById('register-password').value.trim();
        let phone = document.getElementById('register-phone').value.trim();

        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if email already exists
        if (users.find(user => user.email === email)) {
            alert("Email already registered! Please use a different email.");
            return;
        }

        // Save user to localStorage
        let newUser = { name, email, password, phone };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        alert("Registration successful! Redirecting to login page.");
        window.location.href = "login.html"; // Redirect to login page
    });
});
