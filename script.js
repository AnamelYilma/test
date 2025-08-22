document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = this.username.value;
    const password = this.password.value;
    const errorMessage = d iniocument.getElementById('error-message');

    console.log('Username:', username);
    console.log('Password:', password);

    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        errorMessage.textContent = '';
        // Redirect to a new page or perform other actions
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
