document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const credentials = btoa(`${username}:${password}`);
    try {
        const response = await fetch('https://YOUR_DOMAIN/api/auth/signin', {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${credentials}`
            }
        });
        if (!response.ok) {
            throw new Error('Invalid credentials');
        }
        const data = await response.json();
        localStorage.setItem('jwt', data.token);
        window.location.href = 'profile.html'; // Redirect to profile page
    } catch (error) {
        alert(error.message);
    }
});
