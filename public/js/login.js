const loginFormHandler = async (event) => {
<<<<<<< HEAD
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    console.log(email);
    console.log(password);
  
    if (email && password) {
=======
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  console.log(email, password); // Log email and password for debugging

  if (email && password) {
>>>>>>> 8c35881e8a483b1d7ee1932b27271b0e1d465f2a
      const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
      });
<<<<<<< HEAD
  
      console.log("made it here1")
      if (response.ok) {
        document.location.replace('/'); 
=======

      console.log(await response.json()); // Log response for debugging

      if (response.ok) {
          document.location.replace('/'); // Changed to '/' for homepage.
>>>>>>> 8c35881e8a483b1d7ee1932b27271b0e1d465f2a
      } else {
          alert('Login failed. Check your email and password and try again.');
      }
  }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
