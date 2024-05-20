document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validate the username and password (this is just a simple example)
    if (username === 'admin' && password === 'password') {
        alert('Login successful!'); // Replace this with your actual login logic
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
