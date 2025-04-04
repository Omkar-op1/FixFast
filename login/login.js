document.addEventListener('DOMContentLoaded', function() {
    // Get DOM Elements
    const loginContainer = document.getElementById('login-container');
    const registerContainer = document.getElementById('register-container');
    const forgotPasswordContainer = document.getElementById('forgot-password-container');
    const dashboardContainer = document.getElementById('dashboard-container');

    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const forgotPasswordForm = document.getElementById('forgot-password-form');

    const registerLink = document.getElementById('register-link');
    const loginLink = document.getElementById('login-link');
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    const backToLoginLink = document.getElementById('back-to-login');
    const logoutBtn = document.getElementById('logout-btn');

    const loginError = document.getElementById('login-error');
    const registerError = document.getElementById('register-error');
    const forgotError = document.getElementById('forgot-error');

    const userGreeting = document.getElementById('user-greeting');
    const userEmail = document.getElementById('user-email');

    // Toggle password visibility
    document.getElementById('toggle-password').addEventListener('click', function() {
        let passwordInput = document.getElementById('login-password');
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    });

    document.getElementById('toggle-register-password').addEventListener('click', function() {
        let passwordInput = document.getElementById('register-password');
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    });

    // Function to show/hide containers
    function showContainer(container) {
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'none';
        forgotPasswordContainer.style.display = 'none';
        dashboardContainer.style.display = 'none';
        container.style.display = 'block';
    }

    // Navigation event listeners
    registerLink.addEventListener('click', () => showContainer(registerContainer));
    loginLink.addEventListener('click', () => showContainer(loginContainer));
    forgotPasswordLink.addEventListener('click', () => showContainer(forgotPasswordContainer));
    backToLoginLink.addEventListener('click', () => showContainer(loginContainer));
    
    // Check if user is already logged in
    function checkAuth() {
        let user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) {
            showDashboard(user);
        }
    }

    function showDashboard(user) {
        showContainer(dashboardContainer);
        userGreeting.textContent = user.name;
        userEmail.textContent = user.email;
    }

    // Handle Login
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let email = document.getElementById('login-email').value.trim();
        let password = document.getElementById('login-password').value.trim();
        
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            showDashboard(user);
        } else {
            loginError.textContent = "Invalid email or password!";
            loginError.style.display = 'block';
        }
    });

    // Handle Registration
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let name = document.getElementById('register-name').value.trim();
        let email = document.getElementById('register-email').value.trim();
        let password = document.getElementById('register-password').value.trim();
        
        let users = JSON.parse(localStorage.getItem('users')) || [];
        
        if (users.find(u => u.email === email)) {
            registerError.textContent = "Email already registered!";
            registerError.style.display = 'block';
            return;
        }
        
        let newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        alert("Registration successful! Please login.");
        showContainer(loginContainer);
    });

    // Handle Logout
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('currentUser');
        showContainer(loginContainer);
    });

    // Check authentication on load
    checkAuth();
});
