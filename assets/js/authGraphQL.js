

export async function getData(username, password) {
    const url = 'https://learn.reboot01.com/api/auth/signin';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${btoa(username + ":" + password)}` // encrypt username & password with base 64 encoding
        },
      });

      const errorData = await response.json(); // Get error data
      if (!response.ok) {

          showError(errorData.message || 'Login failed: wrong username or password.');
          //throw new Error(errorData.message || 'Login failed: wrong username or password.');
          console.error('error:', errorData.message);
          //return; // Exit the function if there's an error
          throw "worng credentials";
      }

      const data = errorData // Declare data variable and get it from JSON response
      //console.log('Login response:', data); // Print the data in the response (access token)

      // Login failed: TypeError: Response.json: Body has already been consumed.
      return data;
}

getData('halfaraj', '#Num2Lock')

// Function to show error
function showError(message) {
  const errorDiv = document.getElementById('login-error'); // Container for the error
  const errorMessage = document.getElementById('error-message'); // Element for the error message

  errorMessage.textContent = message; // Set the error message text
  errorDiv.style.display = 'block'; // Make the error div visible

  // Add event listener to close the error message when the close button is clicked
  const closeButton = document.getElementById('error-close');
  closeButton.addEventListener('click', function() {
      errorDiv.style.display = 'none'; // Hide the error div
  });
}