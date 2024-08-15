document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation for demonstration purposes
    if (username === 'user' && password === 'password') {
        sessionStorage.setItem('loggedIn', true);
        window.location.href = 'index.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
