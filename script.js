document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simulate authentication
    if (username === 'admin' && password === 'admin') {
        window.location.href = 'admin.html'; // Redirect to admin page
    } else if (username === 'school' && password === 'school') {
        window.location.href = 'school.html'; // Redirect to school page
    } else {
        document.getElementById('errorMessage').innerText = 'Invalid username or password';
    }
});
